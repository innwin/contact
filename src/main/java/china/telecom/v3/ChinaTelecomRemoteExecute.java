package china.telecom.v3;

import java.io.File;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.lang3.StringEscapeUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
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
import com.contact.common.Result;
import com.contact.common.SessionUtils;
import com.contact.util.ImageUtils;
import com.jfinal.plugin.task.TaskKit;

import china.mobile.v3.Mobile;

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
			driver.get(
					"http://zj.189.cn/wt_uac/auth.html?app=wt&login_goto_url=my%2Fben%2Fzhanghu%2Fxiangdan%2F&module=null&auth=uam_login_auth&template=uam_login_page");// https://login.10086.cn?backUrl=about:blank
			driver.manage().window().maximize();
			SessionUtils.putSessionId(key, ((RemoteWebDriver) driver).getSessionId().toString());
			return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
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
		driver.manage().window().maximize();
		try {
			WebDriver augmentedDriver = new Augmenter().augment(driver);
			org.openqa.selenium.WebElement e0 = driver.findElement(By.id("imgbar"));
			// e0.click();
			File screenshot = ((TakesScreenshot) augmentedDriver).getScreenshotAs(OutputType.FILE);
			ImageUtils.fixImageSize(screenshot, e0.getLocation(), e0.getSize());
			return new Result(Constants.SUCCESS, screenshot);
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
	}

	public static Result login(String key, String login, String pwd, String code) {
		String sessionId = SessionUtils.getSessionId(key);
		if (sessionId == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
		driver.findElement(By.id("u_account")).clear();
		driver.findElement(By.id("u_account")).sendKeys(login);
		driver.findElement(By.id("u_password")).clear();
		driver.findElement(By.id("u_password")).sendKeys(pwd);
		driver.findElement(By.id("product_code")).clear();
		;
		driver.findElement(By.id("product_code")).sendKeys(code);
		String jsStart = "window.ajaxBack = jQuery.ajax;" + "\n" //
				+ "jQuery.ajax = function(setting){" + "\n"//
				+ "window.myCb = setting.success;" + "\n" //
				+ "window.myContext = setting.context;" + "\n"//
				+ "setting.success = function(){" + "\n"//
				// +"window.myArguments = arguments;"+"\n"
				+ "window.myData=arguments;" + "\n"//
				// if($.isFunction(window.myCb)){window.myCb.apply(setting.context,
				// arguments); }
				+ "}" + "\n" //
				+ "window.ajaxBack(setting);" + "\n" //
				+ "}";
		// String jsEnd =
		// "if(jQuery.isFunction(window.myCb)){window.myCb.apply(window.myContext,
		// window.myData); };";
		// String jsClean = "jQuery.ajax=window.ajaxBack;delete
		// window.ajaxBack;delete window.myCb;delete window.myData;";
		String jsEndCustom = "jQuery.ajax=window.ajaxBack;delete window.ajaxBack;"
				+ "if(jQuery.isFunction(window.myCb)){window.myCb.apply(window.myContext, window.myData); };"
				+ "delete window.myCb;delete window.myData;delete window.myContext;";

		try {
			((RemoteWebDriver) driver).executeScript(jsStart);
			// ((RemoteWebDriver) driver).executeScript(test);
			driver.findElement(By.className("paySub")).click();
			WebDriverWait wait = new WebDriverWait(driver, 10);
			ArrayList<?> data = (ArrayList<?>) wait.until(new Function<WebDriver, Object>() {// 531234
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			((RemoteWebDriver) driver).executeScript(jsEndCustom);
			String result = (String) data.get(0);
			if (result == null || result.indexOf("success") != 0) {
				return new Result(Constants.INPUTERROR, Constants.getMessage(Constants.INPUTERROR));
			}
			SessionUtils.putPhone(key, login);
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));

	}

	public static Result sendCode(String key) {
		String sessionId = SessionUtils.getSessionId(key);
		if (sessionId == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
		try {
			new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.id("codekey")))
					.click();// 120s
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
	}

	public static Result auth(String key, String name, String idCard, String code) {
		String sessionId = SessionUtils.getSessionId(key);
		if (sessionId == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
		try {
			new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.id("codekey")));
			((RemoteWebDriver) driver).executeScript(
					"document.getElementsByName('username')[0].value=decodeURI(arguments[0]);",
					URLEncoder.encode(name));
			((RemoteWebDriver) driver).executeScript("document.getElementsByName('idcard')[0].value=arguments[0];",
					idCard);
			((RemoteWebDriver) driver)
					.executeScript("document.getElementsByName('cdrCondition.randpsw')[0].value=arguments[0];", code);
			String data = (String) ((RemoteWebDriver) driver)
					.executeScript("return decodeURIComponent(jQuery(\"form[name='form1']\").serialize());");
			String submit = "jQuery.ajax({" + "\n" //
					+ " type: \"POST\"," + "\n" //
					+ " dataType: \"html\"," + "\n"//
					+ " url: \"/zjpr/cdr/getCdrDetail.htm\"," + "\n" //
					+ " data: arguments[0]," + "\n" //
					+ " success: function (result) {" + "\n" //
					+ " 	window.myData=result;" + "\n" //
					+ " }," + "\n"//
					+ " error: function(data) {" + "\n" //
					+ "     console.log(\"error:\"+data.responseText);" + "\n" //
					+ "  }" + "\n" //
					+ " });";

			WebDriverWait wait = new WebDriverWait(driver, 10);
			((RemoteWebDriver) driver).executeScript(submit, HexUtils.getHexResult(data));
			String html = (String) wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			Pattern pattern = Pattern.compile("location.href = .*error.html.*", Pattern.CASE_INSENSITIVE);
			Matcher matcher = pattern.matcher(html);
			if (matcher.find()) {
				return new Result(Constants.INPUTERROR, Constants.getMessage(Constants.INPUTERROR));
			}
			String success = " jQuery(\"body\").append(\"<iframe  id='myIframe'></iframe>\");" + "\n"
					+ " document.getElementById('myIframe').srcdoc=arguments[0];";
			((RemoteWebDriver) driver).executeScript(success, html);
			driver.switchTo().frame("myIframe");
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}

		TaskKit.taskExecutor.execute(new Runnable() {
			@Override
			public void run() {
				Calendar calendar = Calendar.getInstance();
				SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
				for (int i = 0; i < 6; i++) {
					doJob(driver, key);
					if (i < 5) {
						calendar.add(Calendar.MONTH, -1);
						((RemoteWebDriver) driver).executeScript(
								"document.getElementsByName('formtpage')[0].action = \"/zjpr/cdr/getCdrDetail.htm\";");
						((RemoteWebDriver) driver).executeScript(
								"document.getElementsByName('cdrCondition.cdrmonth')[0].value = argument[0];",
								sdf.format(calendar.getTime()));
						driver.findElement(By.name("cdrCondition.cdrmonth")).submit();
					}
				}

			}
		});

		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
	}

	public static void doJob(WebDriver driver, String key) {
		String[] colums = new String[] { "anotherNm", "commType", "startTime", "commTime", "commPlac", "commMode" };
		WebElement body = driver.findElement(By.tagName("tbody"));
		List<WebElement> trs = body.findElements(By.tagName("tr"));
		int i = 0;
		for (WebElement tr : trs) {
			if (i > 1) {
				int j = 0;
				List<WebElement> tds = tr.findElements(By.tagName("td"));
				Mobile model = new Mobile().set("nm", SessionUtils.getPhone(key));
				for (WebElement td : tds) {
					// 序列号 对方号码 呼叫类型 通话日期起始时间 通话时长 通话地 通话类型 本地费或漫游费 长途费
					// 减免 费用小计
					// 备注
					if (j > 1 && j < 7) {
						model.set(colums[j - 1], StringEscapeUtils.escapeHtml4(td.getText()));
					}
					j++;
				}
			}
			i++;
		}
	}
}
