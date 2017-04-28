package china.mobile.v3;

import java.io.File;
import java.util.ArrayList;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Point;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.phantomjs.MyPhantomJSDriver;
import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.beust.jcommander.internal.Nullable;
import com.contact.common.Constants;
import com.contact.common.Mobile;
import com.contact.common.Result;
import com.contact.common.SessionUtils;
import com.contact.util.Base64Image;
import com.contact.util.ImageUtils;
import com.jfinal.plugin.task.TaskKit;

public class ChinaMobileRemoteExecute {

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
			driver.findElement(By.id("radiobuttonSMS")).click();
			SessionUtils.putSessionId(key, ((RemoteWebDriver) driver).getSessionId().toString());
			return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}

	}

	public static Result getSMSPwd(String key, String login) {
		String sessionId = SessionUtils.getSessionId(key);
		if (sessionId == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		try {
			WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
			WebElement name = driver.findElement(By.id("p_name"));
			name.clear();
			name.sendKeys(login);// 18868945291
			WebElement smsPwd = driver.findElement(By.id("getSMSpwd"));
			String display = smsPwd.getCssValue("display");
			if (!"none".equals(display)) {
				smsPwd.click();
			}
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
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
		// driver.findElement(By.id("radiobuttonSMS")).click();
		// driver.findElement(By.id("p_name")).sendKeys(login);// 18868945291
		WebElement pwdElement = driver.findElement(By.id("p_pwd"));
		pwdElement.clear();
		pwdElement.sendKeys(pwd);
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
			SessionUtils.putPhone(key, login);
			return new Result(Constants.SUCCESS, data.get("desc"));
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
	}

	public static Result authForm(String key) {
		String sessionId = SessionUtils.getSessionId(key);
		if (sessionId == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
		try {
			boolean exist = (Boolean) ((RemoteWebDriver) driver)
					.executeScript("return document.getElementById('imageVec') != null ? true : false ; ");
			if (exist) {
				return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
			}
			new WebDriverWait(driver, 10)
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@code='020700']"))).click();
			new WebDriverWait(driver, 10)
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@class='meal-5']/.."))).click();// By.className("meal-5")
			new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.id("month1"))).click();
			new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.id("imageVec")));
			return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}

	}

	public static Result getVerifyImage(String key, boolean refresh) {
		String sessionId = SessionUtils.getSessionId(key);
		if (sessionId == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
		driver.manage().window().maximize();
		try {

			WebDriver augmentedDriver = new Augmenter().augment(driver);
			org.openqa.selenium.WebElement e0 = driver.findElement(By.id("imageVec"));
			if (refresh) {
				((RemoteWebDriver) driver).executeScript(
						"window.myOnload=document.getElementById('imageVec').onload;document.getElementById('imageVec').onload=function(){ window.myData=true; }");
				e0.click();
				WebDriverWait wait = new WebDriverWait(driver, 5);
				wait.until(new Function<WebDriver, Object>() {
					public Object apply(@Nullable WebDriver driver) {
						return ((RemoteWebDriver) driver).executeScript("return window.myData;");
					}
				});
				((RemoteWebDriver) driver).executeScript(
						"delete window.myData;document.getElementById('imageVec').onload=window.myOnload");
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
					.executeScript(js + " return window.getBase64Image(document.getElementById('imageVec')); ");
			base64 = base64.replace("data:image/png;base64,", "");
			File file = Base64Image.generateImage(base64);
			// File screenshot = ((TakesScreenshot)
			// augmentedDriver).getScreenshotAs(OutputType.FILE);
			// Point p = e0.getLocation();
			// p.y = 680;// 700
			// ImageUtils.fixImageSize(screenshot, p, e0.getSize());
			return new Result(Constants.SUCCESS, file);
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
			((RemoteWebDriver) driver).executeScript("window.alert=function(data){ window.myData=data; };");
			WebElement we = driver.findElement(By.id("stc-send-sms"));
			String display = we.getCssValue("display");
			if (!"none".equals(display)) {
				we.click();
				WebDriverWait wait = new WebDriverWait(driver, 5);
				String msg = (String) wait.until(new Function<WebDriver, Object>() {
					public Object apply(@Nullable WebDriver driver) {
						return ((RemoteWebDriver) driver).executeScript("return window.myData;");
					}
				});
				((RemoteWebDriver) driver).executeScript("delete window.myData;");
			}
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
		String jsStart = "window.ajaxBack = $.ajax;" + "\n" //
				+ "$.ajax = function(setting){" + "\n"//
				+ "window.myCb = setting.success;" + "\n" //
				+ "window.myContext = setting.context;" + "\n"//
				+ "setting.success = function(){" + "\n"//
				// +"window.myArguments = arguments;"+"\n"
				+ "window.myData=arguments;" + "\n"//
				// if($.isFunction(window.myCb)){window.myCb.apply(setting.context,
				// arguments); }
				+ "}" + "\n"//
				+ "window.ajaxBack(setting);" + "\n" //
				+ "}" + "\n";
		String jsEnd = "if($.isFunction(window.myCb)){window.myCb.apply(window.myContext, window.myData); };";
		String jsClean = "$.ajax=window.ajaxBack;delete window.ajaxBack;delete window.myCb;delete window.myData;";
		try {
			((RemoteWebDriver) driver).executeScript(jsStart);
			WebElement servpasswd = driver.findElement(By.id("vec_servpasswd"));
			servpasswd.clear();
			servpasswd.sendKeys(servPwd);
			WebElement smspasswd = driver.findElement(By.id("vec_smspasswd"));
			smspasswd.clear();
			smspasswd.sendKeys(smsPwd);// 419106
			WebElement imgcode = driver.findElement(By.id("vec_imgcode"));
			imgcode.clear();
			imgcode.sendKeys(imgCode);
			WebDriverWait wait = new WebDriverWait(driver, 5);
			ArrayList<?> data = (ArrayList<?>) wait.until(new Function<WebDriver, Object>() {// 531234
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
			WebDriverWait wait = new WebDriverWait(driver, 5);
			ArrayList<?> data = (ArrayList<?>) wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			((RemoteWebDriver) driver).executeScript(jsEnd + "delete window.myData;");
			Map<String, ?> map = (Map<String, ?>) data.get(0);
			if (!"000000".equals(map.get("retCode"))) {
				return new Result(Constants.INPUTERROR, map.get("retMsg"));
			}
			TaskKit.taskExecutor.execute(new Runnable() {
				@Override
				public void run() {
					for (int i = 1; i <= 6; i++) {
						if (i > 1) {
							driver.findElement(By.id("month" + i)).click();
						}
						ArrayList<?> myData = (ArrayList<?>) wait.until(new Function<WebDriver, Object>() {
							public Object apply(@Nullable WebDriver driver) {
								return ((RemoteWebDriver) driver).executeScript("return window.myData;");
							}
						});
						((RemoteWebDriver) driver).executeScript(jsEnd + "delete window.myData;");
						Map<String, ?> myMap = (Map<String, ?>) myData.get(0);
						// totalNum=44, endDate=20170430, retCode=000000,
						// retMsg=get data from cache success,
						// startDate=20170401, curCuror=1
						String retCode = String.valueOf(myMap.get("retCode"));
						if (!"000000".equals(retCode)) {
							continue;
						}
						// String totalNum = (String)
						// String.valueOf(myMap.get("totalNum"));
						// String endDate = (String) myMap.get("endDate");
						// String retMsg = (String) myMap.get("retMsg");
						// String startDate = (String) myMap.get("startDate");
						// String curCuror = (String) myMap.get("curCuror");
						ArrayList<Map<String, String>> msgs = (ArrayList<Map<String, String>>) myMap.get("data");
						for (Map<String, String> obj : msgs) {
							// {commMode=被叫, commPlac=杭州, commType=本地,
							// commTime=38秒,
							// remark=null, startTime=04-01 11:51:20,
							// anotherNm=18857759069, mealFavorable=null,
							// commFee=0.00}
							String commMode = obj.get("commMode");
							String commPlac = obj.get("commPlac");
							String commType = obj.get("commType");
							String commTime = obj.get("commTime");
							String remark = obj.get("remark");
							String startTime = obj.get("startTime");
							String anotherNm = String.valueOf(obj.get("anotherNm"));
							// String mealFavorable = obj.get("mealFavorable");
							// String commFee = obj.get("commFee");
							new Mobile().set("nm", SessionUtils.getPhone(key)).set("commMode", commMode)
									.set("commPlac", commPlac).set("commType", commType).set("commTime", commTime)
									.set("remark", remark).set("startTime", startTime).set("anotherNm", anotherNm)
									// .set("mealFavorable",
									// mealFavorable).set("commFee", commFee)
									.save();
						}
						// System.out.println(myData + "---------------->");
					}
					driver.quit();
				}
			});

		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
	}

}
