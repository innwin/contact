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

			String js = "  $.ajax({\n" + //
					"	type: \"get\",\n" + //
					"	contentType: \"*\",\n" + //
					"	cache: false,\n" + //
					"	async: true,\n" + //
					"	timeout: 2e4,\n" + //
					"	data: {},\n" + //
					"	url: \"/i/v1/fee/detbillrandomcodejsonp/" + login + "?callback=callback\"," + //
					"	success: function (result) {\n" + //
					"		var callback=function(data){\n" + //
					"			window.myData = data;\n" + //
					"		}\n" + //
					"		eval(result);\n" + //
					"	},\n" + "	error: function(data) {\n" + //
					"		alert(data);\n" + //
					"	}\n" + //
					"});\n";
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
		String js = " params={};\n" + //
				" params.account = \"" + login + "\";\n" + //
				" params.password = \"" + pwd + "\";\n" + //
				" params.pwdType =\"01\";\n" + //
				" params.accountType = \"01\";\n" + //
				" params.password =  encrypt(params.password);\n" + //
				" params.channelID = $(\"#channelID\").val();\n" + //
				" params.timestamp = new Date().getTime();\n" + //
				" $.getJSON('/login.htm', params, function(jsonData) {\n" + //
				"	if (jsonData.code == \"0000\") {\n" + //
				"		// success \n" + //
				"		window.location.href = jsonData.assertAcceptURL\n"
				+ "								+ \"?backUrl=\" + backUrl + \"&artifact=\"\n"
				+ "								+ jsonData.artifact;" + "		window.myData = \"success\";\n" + //
				"	} else if (jsonData.result == '9') {\n" + //
				"		// already login \n" + //
				"		window.location.href = \"http://shop.10086.cn/i/\";" + "		window.myData = \"success\";\n"
				+ //
				"	}else{\n" + //
				"		//faild \n" + //
				"		window.myData = jsonData.desc;\n" + //
				"	}\n" + //
				" });\n";
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

			String js = "var img = document.createElement(\"img\");\n" + //
					"img.src = \"/i/authImg?t=\" + Math.random();\n" + //
					"img.onload=function(){\n" + //
					"	var img = this;\n" + //
					"	var canvas = document.createElement(\"canvas\"); \n" + //
					"	canvas.width = img.width; \n" + //
					"	canvas.height = img.height; \n" + //
					"	var ctx = canvas.getContext(\"2d\");\n" + //
					"	ctx.drawImage(img, 0, 0, img.width, img.height); \n" + //
					"	var dataURL = canvas.toDataURL(\"image/png\");\n" + //
					"	window.myData = dataURL\n" + //
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

			String js = "$.ajax({\n" + //
					"	type: \"get\",\n" + //
					"	contentType: \"*\",\n" + //
					"	cache: false,\n" + //
					"	async: true,\n" + //
					"	timeout: 2e4,\n" + //
					"	data: {	pwdTempSerCode: \n" + //
					" 			base64encode(utf16to8(\"" + servPwd + "\"), \n" + //
					" 			pwdTempRandCode: base64encode(utf16to8(\"" + smsPwd + "\"),\n" + //
					"			captchaVal: \"" + imgCode + "\"},\n" + //
					"	url: \"/i/v1/fee/detailbilltempidentjsonp/" + //
					CookieUtils.getSessionExpire(sessionId).nm + "\", \n" + //
					"	success: function (result) {\n" + //
					"		window.myData = result; \n" + //
					"	},\n" + //
					"	error: function(data) {\n" + //
					"		window.myData= data; \n" + //
					"	}\n" + //
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

	private static void doJob(String sessionId, WebDriver driver) {

		TaskKit.taskExecutor.execute(new Runnable() {
			@Override
			public void run() {
				try {
					String js = "jQuery.ajax({\n" + //
					"	 type: \"GET\",\n" + //
					"	//dataType: \"json\",\n" + //
					"	 url: \"/i/v1/fee/detailbillinfojsonp/" + //
					CookieUtils.getSessionExpire(sessionId).nm + "\",\n" + //
					"	 data:{curCuror: \"1\",\n" + //
					"	 	step: \"50\",\n" + //
					"		qryMonth: \"%s\",\n" + //
					"		billType: \"01\"},\n" + //
					"	success: function (result) {\n" + //
					"		window.myData = result; \n" + //
					"	},\n" + //
					"	error: function(data) {\n" + //
					"		window.myData = data.responseText \n" + //
					"	}\n" + //
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
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

}
