package china.telecom.v3;

import java.io.File;
import java.util.ArrayList;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.MyPhantomJSDriver;
import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.beust.jcommander.internal.Nullable;
import com.contact.common.Result;
import com.contact.util.ImageUtils;

import china.mobile.v3.SessionUtils;

public class ChinaTelecomRemoteExecute {

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
			driver.get("https://login.10086.cn/login.html?channelID=12003&backUrl=http://shop.10086.cn/i/");// https://login.10086.cn?backUrl=about:blank
			driver.manage().window().maximize();
			driver.findElement(By.id("getSMSpwd")).click();
			SessionUtils.putSessionId(key, ((RemoteWebDriver) driver).getSessionId().toString());
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
		WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
		driver.findElement(By.id("radiobuttonSMS")).click();
		driver.findElement(By.id("p_name")).sendKeys(login);// 18868945291
		driver.findElement(By.id("p_pwd")).sendKeys(pwd);
		((RemoteWebDriver) driver).executeScript(
				"window.getJSON=$.getJSON;$.getJSON=function(){ window.funObj=arguments[2]; var myFun=function(data){  window.myData=data;} ; window.getJSON(arguments[0],arguments[1],myFun) }");
		driver.findElement(By.id("submit_bt")).click();
		try {
			WebDriverWait wait = new WebDriverWait(driver, 10);
			@SuppressWarnings("unchecked")
			Map<String, ?> data = (Map<String, ?>) wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			((RemoteWebDriver) driver)
					.executeScript("window.funObj(window.myData);delete window.myData;$.getJSON=window.getJSON;");
			if (!"0000".equals(data.get("code"))) {
				return new Result(Constants.INPUTERROR, data.get("desc"));
			}
			return new Result(Constants.SUCCESS, data.get("desc"));
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
	}

	public static Result getVerifyImage(String key) {
		String sessionId = SessionUtils.getSessionId(key);
		if (sessionId == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
		try {
			new WebDriverWait(driver, 10)
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@code='020700']"))).click();
			new WebDriverWait(driver, 10)
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@class='meal-5']/.."))).click();// By.className("meal-5")
			new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.id("month1"))).click();
			new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.id("imageVec")));
			WebDriver augmentedDriver = new Augmenter().augment(driver);
			org.openqa.selenium.WebElement e0 = driver.findElement(By.id("imageVec"));
			File screenshot = ((TakesScreenshot) augmentedDriver).getScreenshotAs(OutputType.FILE);
			ImageUtils.fixImageSize(screenshot, e0.getLocation(), e0.getSize());
			return new Result(Constants.SUCCESS, screenshot);
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
		WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
		try {
			driver.findElement(By.id("stc-send-sms")).click();
			return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}

	}

	public static Result auth(String key, String servPwd, String smsPwd, String imgCode) {
		String sessionId = SessionUtils.getSessionId(key);
		if (sessionId == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
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
		try {
			((RemoteWebDriver) driver).executeScript(jsStart);
			driver.findElement(By.id("vec_servpasswd")).sendKeys(servPwd);
			driver.findElement(By.id("vec_smspasswd")).sendKeys(smsPwd);// 419106
			driver.findElement(By.id("vec_imgcode")).sendKeys(imgCode);
			WebDriverWait wait = new WebDriverWait(driver, 1);
			ArrayList<?> data = (ArrayList<?>) wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			((RemoteWebDriver) driver).executeScript(jsEnd + jsClean);
			Map<String, ?> map = (Map<String, ?>) data.get(0);
			if (!"000000".equals(map.get("retCode"))) {
				return new Result(Constants.INPUTERROR, map.get("retMsg"));
			}
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}

		try {
			((RemoteWebDriver) driver).executeScript(jsStart);
			driver.findElement(By.id("vecbtn")).click();
			WebDriverWait wait = new WebDriverWait(driver, 1);
			ArrayList<?> data = (ArrayList<?>) wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			((RemoteWebDriver) driver).executeScript(jsEnd);
			Map<String, ?> map = (Map<String, ?>) data.get(0);
			if (!"000000".equals(map.get("retCode"))) {
				return new Result(Constants.INPUTERROR, map.get("retMsg"));
			}
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
	}

}
