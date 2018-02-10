package china.mobile.v3;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.StringUtils;
import org.eclipse.jetty.util.ajax.JSON;
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

public class ChinaMobileRemoteExecute {

	static {
		System.setProperty("phantomjs.binary.path", "/usr/bin/phantomjs");
	}

	public static Result loginForm(String key) {
		CookieUtils.cleanSession(key);
		try {
			WebDriver driver = new MyPhantomJSDriver("", ToolUtils.getPort(key));
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.get("https://login.10086.cn/");
			driver.manage().window().maximize();
			return new Result(Constants.SUCCESS, ((RemoteWebDriver) driver).getSessionId().toString());
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}

	}

	public static Result getLoginPwd(String sessionId, String login) {
		SessionExpire sessionExpire = CookieUtils.getSessionExpire(sessionId);
		if (StringUtils.isEmpty(sessionId) || sessionExpire == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		try {
			WebDriver driver = new MyPhantomJSDriver(sessionId, ToolUtils.getPort(sessionExpire.key));
			String data = (String) JsExecUtils.exec(driver, "/mobile/getLoginPwd.js", true, login);
			if (!"success".equals(data)) {
				return new Result(Constants.INPUTERROR, data);
			}
			return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
	}

	public static Result getAuthPwd(String sessionId, String login) {
		SessionExpire sessionExpire = CookieUtils.getSessionExpire(sessionId);
		if (StringUtils.isEmpty(sessionId) || sessionExpire == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		try {
			WebDriver driver = new MyPhantomJSDriver(sessionId, ToolUtils.getPort(sessionExpire.key));
			Map<String, Object> data = (Map<String, Object>) JsExecUtils.exec(driver, "/mobile/getAuthPwd.js", true,
					login);
			if (!"000000".equals(data.get("retCode"))) {
				return new Result(Constants.INPUTERROR, data.get("retMsg"));
			}
			return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
	}

	public static Result login(String sessionId, String login, String pwd) {
		SessionExpire sessionExpire = CookieUtils.getSessionExpire(sessionId);
		if (StringUtils.isEmpty(sessionId) || sessionExpire == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		try {
			WebDriver driver = new MyPhantomJSDriver(sessionId, ToolUtils.getPort(sessionExpire.key));
			String data = (String) JsExecUtils.exec(driver, "/mobile/login.js", true, login, pwd);
			if (!"success".equals(data)) {
				return new Result(Constants.INPUTERROR, data);
			}
			driver.get("https://shop.10086.cn/i/");// FIXME: too slow...
			return new Result(Constants.SUCCESS, data);
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
	}

	public static Result getVerifyImage(String sessionId, boolean refresh) {
		SessionExpire sessionExpire = CookieUtils.getSessionExpire(sessionId);
		if (StringUtils.isEmpty(sessionId) || sessionExpire == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, ToolUtils.getPort(sessionExpire.key));
		driver.manage().window().maximize();
		try {
			String data = (String) JsExecUtils.exec(driver, "/mobile/getVerifyImage.js", true);
			return new Result(Constants.SUCCESS, data);
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}

	}

	public static Result auth(String sessionId, String servPwd, String smsPwd, String imgCode) {
		SessionExpire sessionExpire = CookieUtils.getSessionExpire(sessionId);
		if (StringUtils.isEmpty(sessionId) || sessionExpire == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId,
				ToolUtils.getPort(CookieUtils.getSessionExpire(sessionId).key));
		try {
			Map<String, Object> data = (Map<String, Object>) JsExecUtils.exec(driver, "/mobile/auth.js", true, servPwd,
					smsPwd, imgCode, CookieUtils.getSessionExpire(sessionId).nm);
			if (!"000000".equals(data.get("retCode"))) {
				return new Result(Constants.INPUTERROR, data.get("retMsg"));
			}
			doJob(sessionId, driver);
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
	}

	private static void doJob(String sessionId, WebDriver driver) {

		TaskKit.taskExecutor.execute(new Runnable() {
			@Override
			public void run() {
				try {
					Calendar calendar = Calendar.getInstance();
					List<Map<String, String>> datas = new ArrayList<>();
					SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
					for (int i = 0; i < 6; i++) {
						if (i > 0) {
							calendar.add(Calendar.MONTH, -1);
						}
						Map<String, ?> myData = (Map<String, ?>) JsExecUtils.exec(driver, "/mobile/doJob.js", true,
								CookieUtils.getSessionExpire(sessionId).nm, sdf.format(calendar.getTime()));
						if (!"000000".equals(myData.get("retCode"))) {
							continue;
						}
						String year = ((String) myData.get("startDate")).substring(0, 4);
						List<Map<String, String>> msgs = (List<Map<String, String>>) myData.get("data");
						for (Map<String, String> obj : msgs) {
							String commMode = obj.get("commMode");
							String commPlac = obj.get("commPlac");
							String commType = obj.get("commType");
							String commTime = obj.get("commTime");
							String remark = obj.get("remark");
							String startTime = obj.get("startTime");
							String anotherNm = String.valueOf(obj.get("anotherNm"));
							Map<String, String> ele = new HashMap<>();
							ele.put("nm", CookieUtils.getSessionExpire(sessionId).nm);
							ele.put("commMode", commMode);
							ele.put("commPlac", commPlac);
							ele.put("commType", commType);
							ele.put("commTime", commTime);
							ele.put("startTime", year + "-" + startTime);
							ele.put("anotherNm", anotherNm);
							ele.put("remark", remark);
							datas.add(ele);
						}
					}
					Map<String, ?> myData = (Map<String, ?>) JsExecUtils.exec(driver, "/mobile/getUserInfo.js", true,
							CookieUtils.getSessionExpire(sessionId).nm, sdf.format(calendar.getTime()));
					Map<String, ?> userInfo = (Map<String, ?>) myData.get("data");
					if (!"000000".equals(myData.get("retCode"))) {
						userInfo = Collections.EMPTY_MAP;
					}
					SaveDataUtils.saveData(userInfo, datas);
					CookieUtils.cleanSession(sessionId);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

}
