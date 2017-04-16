package china.telecom.v3;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;

import org.apache.commons.lang3.StringEscapeUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.phantomjs.MyPhantomJSDriver;
import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.beust.jcommander.internal.Nullable;
import com.contact.common.Constants;
import com.contact.common.Result;
import com.contact.common.SessionUtils;
import com.contact.util.ImageUtils;

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
			e0.click();
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
		driver.findElement(By.id("u_account")).sendKeys(login);
		driver.findElement(By.id("u_password")).sendKeys(pwd);
		driver.findElement(By.id("product_code")).sendKeys(code);
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

		try {
			((RemoteWebDriver) driver).executeScript(jsStart);
			driver.findElement(By.className("paySub")).click();
			WebDriverWait wait = new WebDriverWait(driver, 5);
			ArrayList<?> data = (ArrayList<?>) wait.until(new Function<WebDriver, Object>() {// 531234
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			((RemoteWebDriver) driver).executeScript(jsEnd + jsClean);
			Map<String, ?> map = (Map<String, ?>) data.get(0);
			System.out.println(map);
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));

	}
	
	public static Result sendCode(String key){
		String sessionId = SessionUtils.getSessionId(key);
		if (sessionId == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
		try{
			driver.findElement(By.id("codekey")).click();
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
	}
	
	public static Result auth(String key, String name, String idCard, String code){
		String sessionId = SessionUtils.getSessionId(key);
		if (sessionId == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
		driver.findElement(By.name("username")).sendKeys(name);
		driver.findElement(By.name("idcard")).sendKeys(idCard);
		driver.findElement(By.name("cdrCondition.randpsw")).sendKeys(code);

		String submit = "jQuery.ajax({"+"\n"
           +" type: \"POST\","+"\n"
           +" dataType: \"html\","+"\n"
           +" url: \"/zjpr/cdr/getCdrDetail.htm\","+"\n"
           +" data: jQuery(\"form[name='form1']\").serialize(),"+"\n"
           +" success: function (result) {"+"\n"
           +"     re=/(.|\\s|\\S)*(location.href.* error.html)(.|\\s|\\S)*/"+"\n"
           +"     if(re.test(result)){"+"\n"
           +"         window.myData=false;"+"\n"
           +"         return;"+"\n"
           +"     }"+"\n"
           +"     window.myData=true;"+"\n"
           +"     jQuery(\"body\").append(\"<iframe srcdoc='\"+result+\"'></iframe>\");"+"\n"
           +" },"+"\n"
           +" error: function(data) {"+"\n"
           +"     console.log(\"error:\"+data.responseText);"+"\n"
           +"  }"+"\n"
           +" });";
		
		WebDriverWait wait = new WebDriverWait(driver, 10);
		((RemoteWebDriver) driver).executeScript(submit);
		boolean success = (boolean)wait.until(new Function<WebDriver, Object>() {
			public Object apply(@Nullable WebDriver driver) {
				return ((RemoteWebDriver) driver).executeScript("return window.myData;");
			}
		});
		if(!success){
			return new Result(Constants.INPUTERROR, Constants.getMessage(Constants.INPUTERROR));
		}
		driver.switchTo().frame(0);
		WebElement body = driver.findElement(By.tagName("tbody"));
		List<WebElement> trs = body.findElements(By.tagName("tr"));
		int i = 0;
		for (WebElement tr : trs) {
			if (i > 1) {
				List<WebElement> tds = tr.findElements(By.tagName("td"));
				for (WebElement td : tds) {
					// 序列号 对方号码 呼叫类型 通话日期起始时间 通话时长 通话地 通话类型 本地费或漫游费 长途费 减免 费用小计
					// 备注
					String str = StringEscapeUtils.escapeHtml4(td.getText());
				}
			}
			i++;
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
	}
}
