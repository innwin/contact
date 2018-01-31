package china.telecom.v3;

import java.io.File;
import java.io.IOException;
import java.net.URLDecoder;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.params.HttpClientParams;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicHeader;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpProtocolParams;
import org.apache.http.util.EntityUtils;
import org.eclipse.jetty.util.ajax.JSON;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.MyPhantomJSDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.beust.jcommander.internal.Nullable;
import com.contact.common.Constants;
import com.contact.common.Result;
import com.contact.util.Base64Image;
import com.contact.util.CookieUtils;
import com.contact.util.CookieUtils.SessionExpire;
import com.contact.util.RemotePostUtils;
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
			((RemoteWebDriver) driver).executeScript("$(\"#txtAccount\").val(\"" + login + "\").blur();"//
					+ "$(\"#txtPassword\").val(\"" + pwd + "\");" //
					+ "$(\"#txtCaptcha\").val(\"" + code + "\");");
			String loginJs = "if(!document.getElementById(\"myIframe\")){ \n" + //
					"	jQuery(\"body\").append(\"<iframe  name='myIframe' id='myIframe'></iframe>\");\r\n" + //
					"}; \n" + //
					"document.getElementById(\"myIframe\").onload=function(){ \n" + //
					"	var msg = $(\"#myIframe\").contents().find(\"#loginForm\").attr(\"data-errmsg\"); \n" + //
					"	if(msg) window.myData = msg; else window.myData='success'; \n" + //
					"} \n" + //
					"$(\"#loginForm\").attr(\"target\",\"myIframe\"); \n" + //
					"$(\"#txtPassword\").valAesEncryptSet(); \n" + //
					"$(\"#loginForm\").submit();";//
			((RemoteWebDriver) driver).executeScript(loginJs);

			WebDriverWait wait = new WebDriverWait(driver, 10);
			String msg = (String) wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			((RemoteWebDriver) driver).executeScript("delete window.myData;");
			if (!"success".equals(msg)) {
				return new Result(Constants.SYSTEMERROR, msg);
			}
			doJob(sessionId);
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
	}

	public static Result getLoginVerifyImage(String sessionId, boolean refresh) {
		SessionExpire sessionExpire = CookieUtils.getSessionExpire(sessionId);
		if (StringUtils.isEmpty(sessionId) || sessionExpire == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, ToolUtils.getPort(sessionExpire.key));
		driver.manage().window().maximize();
		try {
			if (refresh) {
				((RemoteWebDriver) driver).executeScript("window.myOnload=document.getElementById('imgCaptcha').onload;"//
						+ "document.getElementById('imgCaptcha').onload=function(){ window.myData=true; };"//
				);
				((RemoteWebDriver) driver).executeScript("jQuery(\"#imgCaptcha\").click();");
				WebDriverWait wait = new WebDriverWait(driver, 5);
				wait.until(new Function<WebDriver, Object>() {
					public Object apply(@Nullable WebDriver driver) {
						return ((RemoteWebDriver) driver).executeScript("return window.myData;");
					}
				});
				((RemoteWebDriver) driver).executeScript(
						"delete window.myData;document.getElementById('imgCaptcha').onload=window.myOnload");
			}
			String js = "window.getBase64Image=function(img) {" + "\n"//
					+ " var canvas = document.createElement(\"canvas\"); " + "\n"//
					+ " canvas.width = img.width; " + "\n"//
					+ " canvas.height = img.height; " + "\n"//
					+ " var ctx = canvas.getContext(\"2d\"); " + "\n"//
					+ " ctx.drawImage(img, 0, 0, img.width, img.height); " + "\n"//
					+ " var dataURL = canvas.toDataURL(\"image/png\"); " + "\n"//
					+ " return dataURL; " + "\n"//
					+ " }; " + "\n";//
			String base64 = (String) ((RemoteWebDriver) driver)
					.executeScript(js + " return window.getBase64Image(document.getElementById('imgCaptcha')); ");
			base64 = base64.replace("data:image/png;base64,", "");
			File file = Base64Image.generateImage(base64);
			return new Result(Constants.SUCCESS, file);
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
							"return document.getElementById(\"bodyIframe\").src.match(/toStUrl=(http:\\/\\/.*\\.189\\.cn).*&/)[1]");

					String[] colums = new String[] { "startTime", "commTime", "commMode", "commPlac", "anotherNm" }; // 2017-10-01
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
								for (int j = 1; j < colums.length; j++) {
									if (j != 1)
										ele.put(colums[j - 1], data.get(j));
								}
								datas.add(ele);
							}
						}
					}
					RemotePostUtils.postData(datas);
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

		driver.get(url);// 201710

		List<List<String>> datas = new ArrayList<>();
		try {
			new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.tagName("table")));
			Boolean has = (Boolean) ((RemoteWebDriver) driver)
					.executeScript("return document.getElementById(\"wpage\") != null");
			if (!has) {
				return Collections.EMPTY_LIST;
			}
			Integer pageTotal = Integer.valueOf((String) ((RemoteWebDriver) driver)
					.executeScript("return document.getElementById(\"wpage\").getAttribute(\"maxlength\");"));

			for (int i = 1; i <= Integer.valueOf(pageTotal);) {
				String js = "window.data=[];" + //
						"$(\".jtqd_table2 table tr\").each(function(index,eles){ \n" + //
						"	if(index!=0){ \n" + //
						"		e = []; \n" + //
						"		$(eles).find(\"td\").each(function(index,ele){\n" + //
						"			console.log(ele);\n" + //
						"			e.push($(ele).text())\n" + //
						"		});\n" + //
						"		data.push(e); \n" + //
						"	} \n" + //
						" }); \n" + //
						" return window.data;";
				List<List<String>> ele = (List<List<String>>) ((RemoteWebDriver) driver).executeScript(js);
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
