package china.unicom.v3;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
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
import com.jfinal.plugin.task.TaskKit;

public class ChinaUnicomRemoteExecute {

	static {
		System.setProperty("phantomjs.binary.path", "/usr/bin/phantomjs");
	}

	public static Result loginForm(String key) {
		if (SessionUtils.getSessionId(key) != null) {
			try {
				new MyPhantomJSDriver(SessionUtils.getSessionId(key), 48105).quit();
			} catch (Exception e) {
				e.printStackTrace();
			}

		}
		try {
			WebDriver driver = new MyPhantomJSDriver("", 48105);
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.get("http://iservice.10010.com/e4/query/bill/call_dan-iframe.html?menuCode=000100030001");
			driver.manage().window().maximize();
			driver.switchTo().frame(1);
			return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}

	}

	public static Result login(String key, String login, String pwd) {
		String sessionId = SessionUtils.getSessionId(key);
		if (sessionId == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		try {
			WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
			WebElement userName = new WebDriverWait(driver, 10)
					.until(ExpectedConditions.visibilityOfElementLocated(By.id("userName")));
			userName.sendKeys(login);// "13017830621"
			driver.findElement(By.id("userPwd")).sendKeys(pwd);// "720628"
			String jsStart = "window.ajaxBack = $.ajax;" + "\n" + "$.ajax = function(setting){" + "\n"
					+ "window.myCb = setting.success;" + "\n" + "window.myContext = setting.context;" + "\n"
					+ "setting.success = function(){" + "\n"
					// +"window.myArguments = arguments;"+"\n"
					+ "window.myData=arguments;" + "\n"
					// if($.isFunction(window.myCb)){window.myCb.apply(setting.context,
					// arguments); }
					+ "}" + "\n" + "window.ajaxBack(setting);" + "\n" + "}" + "\n";
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
			SessionUtils.putSessionId(key, ((RemoteWebDriver) driver).getSessionId().toString());
			if ("false".equals(map.get("resultCode"))) {
				return new Result(Constants.INPUTERROR, Constants.getMessage(Constants.INPUTERROR));
			}
			driver.switchTo().defaultContent();
			return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}

	}

	public static Result sendSMS(String key) {
		String sessionId = SessionUtils.getSessionId(key);
		if (sessionId == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		try {
			WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
			WebElement button = new WebDriverWait(driver, 10)
					.until(ExpectedConditions.visibilityOfElementLocated(By.id("huoqu_buttons")));
			button.click();
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));

	}

	public static Result auth(String key, String code) {
		String sessionId = SessionUtils.getSessionId(key);
		if (sessionId == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}

		WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
		try {
			// {"issuccess":true,"sendcode":true}
			driver.findElement(By.id("input")).sendKeys(code);
			String jsStart = "window.ajaxBack = $.ajax;" + "\n" + "$.ajax = function(setting){" + "\n"
					+ "window.myCb = setting.success;" + "\n" + "window.myContext = setting.context;" + "\n"
					+ "setting.success = function(){" + "\n"
					// +"window.myArguments = arguments;"+"\n"
					+ "window.myData=arguments;" + "\n"
					// if($.isFunction(window.myCb)){window.myCb.apply(setting.context,
					// arguments); }
					+ "}" + "\n" + "window.ajaxBack(setting);" + "\n" + "}" + "\n";
//			String jsEnd = "if($.isFunction(window.myCb)){window.myCb.apply(window.myContext, window.myData); };";
//			String jsClean = "$.ajax=window.ajaxBack;delete window.ajaxBack;delete window.myCb;delete window.myData;";
			((RemoteWebDriver) driver).executeScript(jsStart);
			driver.findElement(By.id("sign_in")).click();
			// {"flag":"02","error":"codefail"}
			WebDriverWait wait = new WebDriverWait(driver, 5);
			ArrayList<?> data = (ArrayList<?>) wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			Map<String, ?> map = (Map<String, ?>) data.get(0);
			System.out.println(data);
			if (!"".equals(map.get(""))) {
				return new Result(Constants.INPUTERROR, Constants.getMessage(Constants.INPUTERROR));
			}
			String jsStartCustom = "window.ajaxBack = $.ajax;" + "\n" //
					+ "$.ajax = function(setting){" + "\n"//
					+ "window.myCb = setting.success;" + "\n" //
					+ "window.myContext = setting.context;" + "\n"//
					+ "setting.success = function(){" + "\n" //
					+ " 	if('isSuccess' in arguments[0]) " + "\n" //
					+ "			window.myData=arguments;" + "\n"//
					+ " 	else " + "\n"//
					+ "    		if($.isFunction(window.myCb)){window.myCb.apply(window.myContext, arguments); };" + "\n"//
					+ "}" + "\n" //
					+ "window.ajaxBack(setting);" + "\n" //
					+ "}" + "\n";
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
						calendar.add(Calendar.MONTH, -1);
						if (i > 0) {
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
						Map<String, ?> result = (Map<String, ?>) myData.get(0);
						if (result.containsKey("pageMap")) {
							Map<String, ?> myResult = (Map<String, ?>) result.get("pageMap");
							ArrayList<Map<String, String>> list = (ArrayList<Map<String, String>>) myResult
									.get("result");
							for (Map<String, String> obj : list) {
								// {commMode=被叫, commPlac=杭州, commType=本地,
								// commTime=38秒,
								// remark=null, startTime=04-01 11:51:20,
								// anotherNm=18857759069, mealFavorable=null,
								// commFee=0.00}
								String commMode = obj.get("calltypeName");
								String commPlac = obj.get("otherareaName");
								String commType = obj.get("landtype");
								String commTime = obj.get("calllonghour");
								// String remark = obj.get("remark");
								String startTime = obj.get("calldate");
								String anotherNm = obj.get("othernum");
								// String mealFavorable =
								// obj.get("mealFavorable");
								// String commFee = obj.get("commFee");
								new Mobile().set("nm", SessionUtils.getPhone(key)).set("commMode", commMode)
										.set("commPlac", commPlac).set("commType", commType).set("commTime", commTime)
										// .set("remark", remark)
										.set("startTime", startTime).set("anotherNm", anotherNm)
										// .set("mealFavorable",
										// mealFavorable).set("commFee",
										// commFee)
										.save();
							}
						}
					}
				}
			});

		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
	}
}
