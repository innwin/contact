package china.unicom.v3;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.phantomjs.MyPhantomJSDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.beust.jcommander.internal.Nullable;
import com.contact.common.Constants;
import com.contact.common.Mobile;
import com.contact.common.Result;
import com.contact.common.SessionUtils;
import com.contact.common.SessionUtils.SessionExpire;
import com.contact.util.RemotePostUtils;
import com.jfinal.plugin.task.TaskKit;

public class ChinaUnicomRemoteExecute {

	static {
		System.setProperty("phantomjs.binary.path", "/usr/bin/phantomjs");
	}

	public static Result loginForm(String key) {
		if (SessionUtils.getSessionId(key) != null) {
			try {
				SessionUtils.cleanSession(key);
			} catch (Exception e) {
				e.printStackTrace();
			}

		}
		try {
			WebDriver driver = new MyPhantomJSDriver("", 48105);
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.get("http://uac.10010.com/portal/hallLogin");
			driver.manage().window().maximize();
//			driver.switchTo().frame(1);
			SessionUtils.putSessionId(key, new SessionExpire(((RemoteWebDriver) driver).getSessionId().toString(),System.currentTimeMillis()));
			return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}

	}

	public static Result login(String key, String login, String pwd) {
		SessionExpire session = SessionUtils.getSessionId(key);
		if (session == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		try {
			WebDriver driver = new MyPhantomJSDriver(session.sessionId, 48105);
			WebElement userName = new WebDriverWait(driver, 10)
					.until(ExpectedConditions.visibilityOfElementLocated(By.id("userName")));
			userName.clear();
			userName.sendKeys(login);
			WebElement userPwd = driver.findElement(By.id("userPwd"));
			userPwd.clear();
			userPwd.sendKeys(pwd);
			String jsStart = "window.ajaxBack = $.ajax;" + "\n" //
					+ "$.ajax = function(setting){" + "\n"//
					+ "window.myCb = setting.success;" + "\n" //
					+ "window.myContext = setting.context;" + "\n"//
					+ "setting.success = function(){" + "\n"//
					// +"window.myArguments = arguments;"+"\n"
					+ "window.myData=arguments;" + "\n"//
					// if($.isFunction(window.myCb)){window.myCb.apply(setting.context,
					// arguments); }
					+ "}" + "\n" //
					+ "window.ajaxBack(setting);" + "\n" //
					+ "}" + "\n";
			String jsEnd = "if($.isFunction(window.myCb)){window.myCb.apply(window.myContext, window.myData); };";
			String jsClean = "$.ajax=window.ajaxBack;delete window.ajaxBack;delete window.myCb;delete window.myData;";
			((RemoteWebDriver) driver).executeScript(jsStart);
			driver.findElement(By.id("login1")).click();
			WebDriverWait wait = new WebDriverWait(driver, 5);
			ArrayList<?> data = (ArrayList<?>) wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			((RemoteWebDriver) driver).executeScript(jsEnd + jsClean);
			Map<String, ?> map = (Map<String, ?>) data.get(0);
//			SessionUtils.putSessionId(key, ((RemoteWebDriver) driver).getSessionId().toString());
			if (!"0000".equals(map.get("resultCode"))) {
				return new Result(Constants.INPUTERROR, Constants.getMessage(Constants.INPUTERROR));
			}
//			driver.switchTo().defaultContent();
			driver.get("http://iservice.10010.com/e4/query/bill/call_dan-iframe.html?menuCode=000100030001");
			SessionUtils.putPhone(key, login);
			return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}

	}

	public static Result sendSMS(String key) {
		SessionExpire session = SessionUtils.getSessionId(key);
		if (session == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		try {
			WebDriver driver = new MyPhantomJSDriver(session.sessionId, 48105);
			WebElement button = new WebDriverWait(driver, 10)
					.until(ExpectedConditions.visibilityOfElementLocated(By.id("huoqu_buttons")));
			button.click();
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));

	}

	@SuppressWarnings("unchecked")
	public static Result auth(String key, String code) {
		SessionExpire session = SessionUtils.getSessionId(key);
		if (session == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}

		WebDriver driver = new MyPhantomJSDriver(session.sessionId, 48105);
		try {
			WebElement input = driver.findElement(By.id("input"));
			input.clear();
			input.sendKeys(code);
			String jsStart = "window.ajaxBack = $.ajax;" + "\n" //
					+ "$.ajax = function(setting){" + "\n"//
					+ "	window.myCb = setting.success;" + "\n" //
					+ "	window.myContext = setting.context;" + "\n"//
					+ "	setting.success = function(){" + "\n"//
					// +"window.myArguments = arguments;"+"\n"
					+ "		window.myData=arguments;" + "\n"//
					// if($.isFunction(window.myCb)){window.myCb.apply(setting.context,
					// arguments); }
					+ "}" + "\n" //
					+ "window.ajaxBack(setting);" + "\n" //
					+ "}" + "\n";//
			((RemoteWebDriver) driver).executeScript(jsStart);
			driver.findElement(By.id("sign_in")).click();
			WebDriverWait wait = new WebDriverWait(driver, 10);
			ArrayList<?> data = (ArrayList<?>) wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			((RemoteWebDriver) driver).executeScript("$.ajax=window.ajaxBack;");
			Map<String, ?> map = (Map<String, ?>) data.get(0);
			if (!"00".equals(map.get("flag"))) {
				((RemoteWebDriver) driver).executeScript(" delete window.myData; ");
				return new Result(Constants.INPUTERROR, Constants.getMessage(Constants.INPUTERROR));
			}
			String jsStartCustom = "window.ajaxBack = $.ajax;" + "\n" //
					+ " $.ajax = function(setting){ " + "\n"//
					+ "	setting.mySuccess=setting.success; " + "\n" //
					+ "	setting.myContext=setting.context; " + "\n"//
					+ "	setting.success = function(){ " + "\n" //
					+ "		if('isSuccess' in arguments[0]) { " + "\n"//
					+ "			window.myData = arguments; " + "\n" //
					+ "			window.myCb = this.mySuccess; " + "\n"//
					+ "			window.myContext = this.myContext; " + "\n" //
					+ "		} else { " + "\n"//
					+ "	 		this.mySuccess.apply(this,arguments); " + "\n" //
					+ "		} " + "\n" //
					+ " } " + "\n"//
					+ "	window.ajaxBack(setting);" + "\n" //
					+ " } " + "\n";
			String jsEnd = "if($.isFunction(window.myCb)){window.myCb.apply(window.myContext,window.myData); };";
			((RemoteWebDriver) driver).executeScript(jsStartCustom);
			((RemoteWebDriver) driver).executeScript("window.myDataTmp=window.myData;delete window.myData;");
			((RemoteWebDriver) driver).executeScript(
					"if($.isFunction(window.myCb)){window.myCb.apply(window.myContext, window.myDataTmp); };");
			TaskKit.taskExecutor.execute(new Runnable() {
				@Override
				public void run() {
					Calendar calendar = Calendar.getInstance();
					SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
					for (int i = 0; i < 6; i++) {
						if (i > 0) {
							calendar.add(Calendar.MONTH, -1);
							new WebDriverWait(driver, 10)
									.until(ExpectedConditions.visibilityOfElementLocated(By
											.xpath(String.format("//li[@value='%s']", sdf.format(calendar.getTime())))))
									.click();
						}
						ArrayList<?> myData = (ArrayList<?>) wait.until(new Function<WebDriver, Object>() {
							public Object apply(@Nullable WebDriver driver) {
								return ((RemoteWebDriver) driver).executeScript("return window.myData;");
							}
						});
						((RemoteWebDriver) driver).executeScript(jsEnd + " delete window.myData;");
						Map<String, ?> result = (Map<String, ?>) myData.get(0);
						if (result.containsKey("pageMap")) {
							Map<String, ?> myResult = (Map<String, ?>) result.get("pageMap");
							ArrayList<Map<String, String>> list = (ArrayList<Map<String, String>>) myResult
									.get("result");
							for (Map<String, String> obj : list) {
								String commMode = obj.get("calltypeName");
								String commPlac = obj.get("otherareaName");
								String commType = obj.get("landtype");
								String commTime = obj.get("calllonghour");
								String startTime = obj.get("calldate");
								String anotherNm = obj.get("othernum");
								Mobile mobile = new Mobile().set("nm", SessionUtils.getPhone(key))
										.set("commMode", commMode).set("commPlac", commPlac).set("commType", commType)
										.set("commTime", commTime).set("startTime", startTime)
										.set("anotherNm", anotherNm);
								mobile.save();
							}
						}
					}
					RemotePostUtils.postData(SessionUtils.getPhone(key));
					SessionUtils.cleanSession(key);
				}
			});

		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
	}

}
