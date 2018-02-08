package china.mobile.v3;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;

import org.apache.commons.lang3.StringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.MyPhantomJSDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.beust.jcommander.internal.Nullable;
import com.contact.common.Constants;
import com.contact.common.Result;
import com.contact.util.CookieUtils;
import com.contact.util.CookieUtils.SessionExpire;
import com.contact.util.JsUtils;
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
			driver.get("https://login.10086.cn/login.html?channelID=12003&backUrl=http://shop.10086.cn/i/");// https://login.10086.cn?backUrl=about:blank
			driver.manage().window().maximize();
			driver.findElement(By.id("sms_login_1")).click();
			// SessionUtils.putSessionId(key, new SessionExpire(((RemoteWebDriver)
			// driver).getSessionId().toString(),
			// System.currentTimeMillis()));
			return new Result(Constants.SUCCESS, ((RemoteWebDriver) driver).getSessionId().toString());
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}

	}

	public static Result getSMSPwd(String sessionId, String login) {
		SessionExpire sessionExpire = CookieUtils.getSessionExpire(sessionId);
		if (StringUtils.isEmpty(sessionId) || sessionExpire == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		try {
			WebDriver driver = new MyPhantomJSDriver(sessionId, ToolUtils.getPort(sessionExpire.key));

			String js = "  $.ajax({\r\n" + //
					"	type: \"get\",\r\n" + //
					"	contentType: \"*\",\r\n" + //
					"	cache: false,\r\n" + //
					"	async: true,\r\n" + //
					"	timeout: 2e4,\r\n" + //
					"	data: {},\r\n" + //
					"	url: \"/i/v1/fee/detbillrandomcodejsonp/" + login + "?callback=callback\"," + //
					"	success: function (result) {\r\n" + //
					"		var callback=function(data){\r\n" + //
					"			window.myData = data;\r\n" + //
					"		}\r\n" + //
					"		eval(result);\r\n" + //
					"	},\r\n" + "	error: function(data) {\r\n" + //
					"		alert(data);\r\n" + //
					"	}\r\n" + //
					"});\r\n";
			((RemoteWebDriver) driver).executeScript(js);
			WebDriverWait wait = new WebDriverWait(driver, 10);
			@SuppressWarnings("unchecked")
			Map<String, Object> data = (Map<String, Object>) wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			((RemoteWebDriver) driver).executeScript("delete window.myData;");
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
		WebDriver driver = new MyPhantomJSDriver(sessionId, ToolUtils.getPort(sessionExpire.key));
		String js = " params={};\r\n" + //
				" params.account = \"" + login + "\";\r\n" + //
				" params.password = \"" + pwd + "\";\r\n" + //
				" params.pwdType =\"01\";\r\n" + //
				" params.accountType = \"01\";\r\n" + //
				" params.password =  encrypt(params.password);\r\n" + //
				" params.channelID = $(\"#channelID\").val();\r\n" + //
				" params.timestamp = new Date().getTime();\r\n" + //
				" $.getJSON('/login.htm', params, function(jsonData) {\r\n" + //
				"	if (jsonData.code == \"0000\") {\r\n" + //
				"		// success \r\n" + //
				"		window.location.href = jsonData.assertAcceptURL\r\n" + 
				"								+ \"?backUrl=\" + backUrl + \"&artifact=\"\r\n" + 
				"								+ jsonData.artifact;"+
				"		window.myData = \"success\";\r\n" + //
				"	} else if (jsonData.result == '9') {\r\n" + //
				"		// already login \r\n" + //
				"		window.location.href = \"http://shop.10086.cn/i/\";"+
				"		window.myData = \"success\";\r\n" + //
				"	}else{\r\n" + //
				"		//faild \r\n" + //
				"		window.myData = jsonData.desc;\r\n" + //
				"	}\r\n" + //
				" });\r\n";
		((RemoteWebDriver) driver).executeScript(js);
		try {
			WebDriverWait wait = new WebDriverWait(driver, 10);
			@SuppressWarnings("unchecked")
			String data = (String) wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			((RemoteWebDriver) driver).executeScript("delete window.myData;");
			if (!"success".equals(data)) {
				return new Result(Constants.INPUTERROR, data);
			}
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

			String js = "var img = document.createElement(\"img\");\r\n" + //
					"img.src = \"/i/authImg?t=\" + Math.random();\r\n" + //
					"img.onload=function(){\r\n" + //
					"	var img = this;\r\n" + //
					"	var canvas = document.createElement(\"canvas\"); \r\n" + //
					"	canvas.width = img.width; \r\n" + //
					"	canvas.height = img.height; \r\n" + //
					"	var ctx = canvas.getContext(\"2d\");\r\n" + //
					"	ctx.drawImage(img, 0, 0, img.width, img.height); \r\n" + //
					"	var dataURL = canvas.toDataURL(\"image/png\");\r\n" + //
					"	window.myData = dataURL\r\n" + //
					"}";
			((RemoteWebDriver) driver).executeScript(js);
			WebDriverWait wait = new WebDriverWait(driver, 10);
			@SuppressWarnings("unchecked")
			String data = (String) wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			((RemoteWebDriver) driver).executeScript("delete window.myData;");
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

			String js = "$.ajax({\r\n" + //
					"	type: \"get\",\r\n" + //
					"	contentType: \"*\",\r\n" + //
					"	cache: false,\r\n" + //
					"	async: true,\r\n" + //
					"	timeout: 2e4,\r\n" + //
					"	data: {pwdTempSerCode: base64encode(utf16to8(\"" + servPwd
					+ "\"), pwdTempRandCode: base64encode(utf16to8(\"" + smsPwd + "\"), captchaVal: \"" + imgCode
					+ "\"},\r\n" + //
					"	url: \"/i/v1/fee/detailbilltempidentjsonp/" + CookieUtils.getSessionExpire(sessionId).nm
					+ "\", \r\n" + //
					"	success: function (result) {\r\n" + //
					"		window.myData = result; \r\n" + //
					"	},\r\n" + //
					"	error: function(data) {\r\n" + //
					"		window.myData= data; \r\n" + //
					"	}\r\n" + //
					"});";
			((RemoteWebDriver) driver).executeScript(JsUtils.base64() + JsUtils.utf16to8() + js);
			WebDriverWait wait = new WebDriverWait(driver, 5);
			Map<String, Object> data = (Map<String, Object>) wait.until(new Function<WebDriver, Object>() {// 531234
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			((RemoteWebDriver) driver).executeScript("delete window.myData;");
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

	private static Result doJob(String sessionId, WebDriver driver) {
		try {
			TaskKit.taskExecutor.execute(new Runnable() {
				@Override
				public void run() {
					String js = "jQuery.ajax({\r\n" + //
					"	 type: \"GET\",\r\n" + //
					"	//dataType: \"json\",\r\n" + //
					"	 url: \"/i/v1/fee/detailbillinfojsonp/" + CookieUtils.getSessionExpire(sessionId).nm + "\",\r\n" + //
					"	 data:{curCuror: \"1\",\r\n" + //
					"	 	step: \"50\",\r\n" + //
					"		qryMonth: \"%s\",\r\n" + //
					"		billType: \"01\"},\r\n" + //
					"	success: function (result) {\r\n" + //
					"		window.myData = result; \r\n" + //
					"	\r\n" + //
					"	},\r\n" + //
					"	error: function(data) {\r\n" + //
					"		window.myData = data.responseText \r\n" + //
					"	}\r\n" + //
					"});";

					Calendar calendar = Calendar.getInstance();
					List<Map<String, String>> datas = new ArrayList<>();
					SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
					for (int i = 0; i < 6; i++) {
						if (i > 0) {
							calendar.add(Calendar.MONTH, -1);
						}
						String formatJs = String.format(js, sdf.format(calendar.getTime()));
						((RemoteWebDriver) driver).executeScript(formatJs);
						WebDriverWait wait = new WebDriverWait(driver, 5);
						ArrayList<?> myData = (ArrayList<?>) wait.until(new Function<WebDriver, Object>() {
							public Object apply(@Nullable WebDriver driver) {
								return ((RemoteWebDriver) driver).executeScript("return window.myData;");
							}
						});
						((RemoteWebDriver) driver).executeScript("delete window.myData;");

						Map<String, ?> myMap = (Map<String, ?>) myData.get(0);
						String retCode = String.valueOf(myMap.get("retCode"));
						if (!"000000".equals(retCode)) {
							continue;
						}
						ArrayList<Map<String, String>> msgs = (ArrayList<Map<String, String>>) myMap.get("data");
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
							ele.put("startTime", ToolUtils.filterTime(startTime));
							ele.put("anotherNm", anotherNm);
							ele.put("remark", remark);
							datas.add(ele);
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

}
