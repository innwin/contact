package china.telecom.v3;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.StringUtils;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.MyPhantomJSDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.contact.common.Constants;
import com.contact.common.Result;
import com.contact.util.CookieUtils;
import com.contact.util.CookieUtils.SessionExpire;
import com.contact.util.DebugUtils;
import com.contact.util.JsExecUtils;
import com.contact.util.SaveDataUtils;
import com.contact.util.ToolUtils;
import com.jfinal.plugin.task.TaskKit;

public class ChinaTelecomRemoteExecute {

	static {
		System.setProperty("phantomjs.binary.path", "/usr/bin/phantomjs");
	}

	public static Result loginForm(String key, String sessionId) {
		CookieUtils.cleanSession(sessionId);
		try {
			WebDriver driver = new MyPhantomJSDriver("", ToolUtils.getPort(key));
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.get("http://login.189.cn/web/login");
			driver.manage().window().maximize();
			return new Result(Constants.SUCCESS, ((RemoteWebDriver) driver).getSessionId().toString());
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
	}

	public static Result login(String sessionId, String login, String pwd, String code) {
		SessionExpire sessionExpire = CookieUtils.getSessionExpire(sessionId);
		if (StringUtils.isEmpty(sessionId) || sessionExpire == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, ToolUtils.getPort(sessionExpire.key));
		driver.manage().window().maximize();
		try {
			String msg = (String) JsExecUtils.exec(driver, "/telecom/login.js", true, login, pwd, code);
			if (!"success".equals(msg)) {
				return new Result(Constants.INPUTERROR, msg);
			}
			doJob(sessionId);
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
	}

	public static Result getLoginVerifyImage(String sessionId) {
		SessionExpire sessionExpire = CookieUtils.getSessionExpire(sessionId);
		if (StringUtils.isEmpty(sessionId) || sessionExpire == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, ToolUtils.getPort(sessionExpire.key));
		driver.manage().window().maximize();
		try {
			String img = (String) JsExecUtils.exec(driver, "/telecom/getLoginVerifyImage.js", true);
			return new Result(Constants.SUCCESS, img);
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
	}

	public static Result doJob(String sessionId) {
		SessionExpire sessionExpire = CookieUtils.getSessionExpire(sessionId);
		if (StringUtils.isEmpty(sessionId) || sessionExpire == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, ToolUtils.getPort(sessionExpire.key));
		try {
			TaskKit.taskExecutor.execute(new Runnable() {
				@Override
				public void run() {
					driver.get("http://www.189.cn/dqmh/my189/initMy189home.do?fastcode=01420651");
					String domain = (String) ((RemoteWebDriver) driver).executeScript(
							"return document.getElementById('bodyIframe').src.match(/toStUrl=(http:\\/\\/.*\\.189\\.cn).*/)[1]");

					String[] colums = new String[] { "startTime", "commTime", "commType", "commPlac", "anotherNm" }; // 2017-10-01
																														// 08:48:11
					Calendar calendar = Calendar.getInstance();
					SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
					List<Map<String, String>> datas = new ArrayList<>();
					for (int i = 0; i < 6; i++) {
						if (i > 0) {
							calendar.add(Calendar.MONTH, -1);
							List<List<String>> rs = submit(driver, domain, sdf.format(calendar.getTime()));
							for (List<String> data : rs) {
								Map<String, String> ele = new HashMap<String, String>();
								ele.put("nm", sessionExpire.nm);
								for (int j = 1; j <= colums.length; j++) {
									ele.put(colums[j - 1], data.get(j));
								}
								datas.add(ele);
							}
						}
					}
					SaveDataUtils.saveData(datas);
					CookieUtils.cleanSession(sessionId);
				}
			});

		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));

	}

	private static List<List<String>> submit(WebDriver driver, String domain, String month) {
		Integer pageNo = 1;
		String url = domain + "/service/bill/result/mobile/mobile_call_result.jsp?"
				+ "SDAY=1&v_choosetype=0&EDAY=31&MONTH=" + month + "&PRODTYPE=50&PRODNO=MTgwNjUyMDkyODU=&PAGENO="
				+ pageNo + "&INTERPAGE=100";

		// DebugUtils.saveImg(driver, "/tmp/test0008.png");

		List<List<String>> datas = new ArrayList<>();
		try {
			driver.get(url);// 201710
			// new WebDriverWait(driver,
			// 10).until(ExpectedConditions.visibilityOfElementLocated(By.tagName("table")));
			Boolean has = (Boolean) ((RemoteWebDriver) driver)
					.executeScript("return document.getElementById('wpage') != null");
			if (!has) {
				return Collections.EMPTY_LIST;
			}
			Integer pageTotal = Integer.valueOf((String) ((RemoteWebDriver) driver)
					.executeScript("return document.getElementById('wpage').getAttribute('maxlength');"));

			for (int i = 1; i <= Integer.valueOf(pageTotal);) {
				List<List<String>> ele = (List<List<String>>) JsExecUtils.exec(driver, "/telecom/submit.js", true);
				datas.addAll(ele);
				pageNo = ++i;
				driver.get(url);
			}
			return datas;
		} catch (Exception e) {
			e.printStackTrace();
			if (datas.size() > 0) {
				return datas;
			}
		}
		return Collections.EMPTY_LIST;
	}

}
