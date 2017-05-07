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
import com.contact.common.Mobile;
import com.contact.common.Result;
import com.contact.common.SessionUtils;
import com.contact.common.SessionUtils.SessionExpire;
import com.contact.util.ImageUtils;
import com.contact.util.RemotePostUtils;
import com.jfinal.plugin.task.TaskKit;

public class ChinaTelecomRemoteExecute {

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
			driver.get(
					"http://zj.189.cn/wt_uac/auth.html?app=wt&login_goto_url=my%2Fben%2Fzhanghu%2Fxiangdan%2F&module=null&auth=uam_login_auth&template=uam_login_page");// https://login.10086.cn?backUrl=about:blank
			driver.manage().window().maximize();
			SessionUtils.putSessionId(key, new SessionExpire(((RemoteWebDriver) driver).getSessionId().toString(),System.currentTimeMillis()));
			return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}

	}

	public static Result getVerifyImage(String key) {
		SessionExpire session = SessionUtils.getSessionId(key);
		if (session == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		session.time = System.currentTimeMillis();
		WebDriver driver = new MyPhantomJSDriver(session.sessionId, 48105);
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
		SessionExpire session = SessionUtils.getSessionId(key);
		if (session == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		session.time = System.currentTimeMillis();
		WebDriver driver = new MyPhantomJSDriver(session.sessionId, 48105);
		WebElement account = driver.findElement(By.id("u_account"));
		account.clear();
		account.sendKeys(login);
		WebElement password = driver.findElement(By.id("u_password"));
		password.clear();
		password.sendKeys(pwd);
		WebElement productCode = driver.findElement(By.id("product_code"));
		productCode.clear();
		productCode.sendKeys(code);
		String jsStart = "window.ajaxBack = jQuery.ajax;" + "\n" //
				+ "jQuery.ajax = function(setting){" + "\n"//
				+ "window.myCb = setting.success;" + "\n" //
				+ "window.myContext = setting.context;" + "\n"//
				+ "setting.success = function(){" + "\n"//
				// +"window.myArguments = arguments;"+"\n"
				+ "		window.myData=arguments; " + "\n"//
				// if($.isFunction(window.myCb)){window.myCb.apply(setting.context,
				// arguments); }
				+ "}" + "\n" //
				+ "window.ajaxBack(setting);" + "\n" //
				+ "}";
		String jsEndCustom = "jQuery.ajax=window.ajaxBack;delete window.ajaxBack;"
				+ "if(jQuery.isFunction(window.myCb)){window.myCb.apply(window.myContext, window.myData); };"
				+ "delete window.myCb;delete window.myData;delete window.myContext;";

		try {
			((RemoteWebDriver) driver).executeScript(jsStart);
			driver.findElement(By.className("paySub")).click();
			WebDriverWait wait = new WebDriverWait(driver, 10);
			ArrayList<?> data = (ArrayList<?>) wait.until(new Function<WebDriver, Object>() {
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
		SessionExpire session = SessionUtils.getSessionId(key);
		if (session == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		session.time = System.currentTimeMillis();
		WebDriver driver = new MyPhantomJSDriver(session.sessionId, 48105);
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
		SessionExpire session = SessionUtils.getSessionId(key);
		if (session == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		session.time = System.currentTimeMillis();
		WebDriver driver = new MyPhantomJSDriver(session.sessionId, 48105);
		try {
			new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.id("codekey")));
			((RemoteWebDriver) driver).executeScript(
					"document.getElementsByName('username')[0].value=decodeURI(arguments[0]);",
					URLEncoder.encode(name));
			((RemoteWebDriver) driver).executeScript("document.getElementsByName('idcard')[0].value=arguments[0];",
					idCard);
			((RemoteWebDriver) driver)
					.executeScript("document.getElementsByName('cdrCondition.randpsw')[0].value=arguments[0];", code);
			Result res = submit(driver);
			if (res.code != Constants.SUCCESS) {
				return res;
			}
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
					session.time = System.currentTimeMillis();
					if (i > 0) {
						calendar.add(Calendar.MONTH, -1);
						driver.switchTo().defaultContent();
						((RemoteWebDriver) driver).executeScript(
								"document.getElementsByName('cdrCondition.cdrmonth')[0].value=arguments[0];",
								sdf.format(calendar.getTime()));
						Result res = submit(driver);
						if (res.code != Constants.SUCCESS) {
							continue;
						}
					}
					doJob(driver, key);
				}
				RemotePostUtils.postData(SessionUtils.getPhone(key));
				SessionUtils.cleanSession(key);
			}
		});

		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
	}

	private static Result submit(WebDriver driver) {
		try {
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
			WebDriverWait wait = new WebDriverWait(driver, 60);
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
			((RemoteWebDriver) driver).executeScript("delete window.myData;");
			driver.switchTo().frame("myIframe");
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
	}

	@SuppressWarnings("unchecked")
	private static void doJob(WebDriver driver, String key) {

		try {
			String js = " var data=[];" + "\n"//
					+ " jQuery('.cdrtable:first tbody').find('tr').each(function(index,val){ " + "\n"//
					+ " 	 if(index>2){" + "\n"//
					+ " 	 	var myTr=[];" + "\n"//
					+ " 		jQuery(val).find('td').each(function(i,v){ " + "\n"//
					+ " 			 if(i>0){ " + "\n"//
					+ " 			 	myTr.push(v.innerHTML.replace(/<.*?\\/.*?>/g,''));" + "\n"//
					+ " 			 } " + "\n"//
					+ " 		 }" + "\n"//
					+ " 		);" + "\n"//
					+ " 		if(myTr.length>0){" + "\n"//
					+ " 		  	data.push(myTr);" + "\n"//
					+ " 		} " + "\n"//
					+ " 	} " + "\n"//
					+ " });" + "\n"//
					+ " window.myData = data;" + "\n";

			String[] colums = new String[] { "anotherNm", "commType", "startTime", "commTime", "commPlac", "commMode" };
			WebDriverWait wait = new WebDriverWait(driver, 10);
			wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return "complete".equals(((RemoteWebDriver) driver).executeScript("return document.readyState;"));
				}
			});
			((RemoteWebDriver) driver).executeScript(js);
			List<List<String>> list = (List<List<String>>) wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			((RemoteWebDriver) driver).executeScript("delete window.myData;");
			for (List<String> tr : list) {
				int j = 0;
				Mobile model = new Mobile().set("nm", SessionUtils.getPhone(key));
				for (String td : tr) {
					// 序列号 对方号码 呼叫类型 通话日期起始时间 通话时长 通话地 通话类型 本地费或漫游费 长途费
					// 减免 费用小计
					// 备注
					if (j < 6) {
						model.set(colums[j], td);
					}
					j++;
				}

				model.save();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}
