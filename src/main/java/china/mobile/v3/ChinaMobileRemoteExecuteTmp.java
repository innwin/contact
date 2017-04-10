package china.mobile.v3;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;
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

import com.contact.util.ImageUtils;
import com.jfinal.plugin.task.TaskKit;

public class ChinaMobileRemoteExecuteTmp {

	public long timestamp;

	static {
		System.setProperty("phantomjs.binary.path", "/usr/local/phantomjs");
	}

	// String hub = "http://127.0.0.1:4444/wd/hub";
	public static File getVerifyCode(String key) {
		if (SessionUtils.get(key) != null) {
			try {
				new MyPhantomJSDriver(SessionUtils.get(key), 48105).quit();
			} catch (Exception e) {
				e.printStackTrace();
			}

		}
		WebDriver driver = new MyPhantomJSDriver("", 48105);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("http://www.zj.10086.cn/my/login/login.jsp?jumpurl=about:blank&AISSO_LOGIN=true");
		driver.manage().window().maximize();
		WebDriver augmentedDriver = new Augmenter().augment(driver);
		org.openqa.selenium.WebElement e0 = driver.findElement(By.id("ssoImg"));
		File screenshot = ((TakesScreenshot) augmentedDriver).getScreenshotAs(OutputType.FILE);
		ImageUtils.fixImageSize(screenshot, e0.getLocation(), e0.getSize());
		SessionUtils.put(key, ((RemoteWebDriver) driver).getSessionId().toString());
		return screenshot;
	}

	public static Result login(String key, String loginName, String password, String code) {
		String sessionId = SessionUtils.get(key);
		if (sessionId == null) {
			return new Result(Constants.NEEDCODE, Constants.getMessage(Constants.NEEDCODE));
		}
		try {
			WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			if (driver.manage().getCookieNamed("CmWebtokenid") != null) {
				return new Result(Constants.AREADYLOGIN, Constants.getMessage(Constants.AREADYLOGIN));
			}
			Pattern pattern = Pattern.compile(".*login.*");
			Matcher matcher = pattern.matcher(driver.getCurrentUrl());
			if (!matcher.matches()) {
				return new Result(Constants.NEEDLOGIN, Constants.getMessage(Constants.NEEDCODE));
			}
			driver.findElement(By.id("s_logonName")).sendKeys(loginName); // "18868945291"
			driver.findElement(By.id("s_password")).sendKeys(password);// "531234"
			org.openqa.selenium.WebElement e1 = driver.findElement(By.id("validateKey"));
			e1.sendKeys(code); // br.readLine()
			e1.submit();
			if (driver.manage().getCookieNamed("CmWebtokenid") == null) {
				return new Result(Constants.NEEDLOGIN, Constants.getMessage(Constants.NEEDCODE));
			}
			Pattern pattern2 = Pattern.compile(".*queryHisDetailBill.*");
			Matcher matcher2 = pattern2.matcher(driver.getCurrentUrl());
			if (!matcher2.matches()) {

				TaskKit.taskExecutor.execute(new Runnable() {
					@Override
					public void run() {
						driver.get("http://service.zj.10086.cn/yw/detail/queryHisDetailBill.do?menuId=13009");
						driver.findElement(By.className("search-js")).click();
					}
				});
			} else {
				driver.findElement(By.className("search-js")).click();
			}
			return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.NEEDCODE, Constants.getMessage(Constants.NEEDCODE));
		}

		// WebElement sj = driver.findElement(By.className("search-js"));
		// if (sj != null) {
		// driver.get("http://service.zj.10086.cn/yw/detail/queryHisDetailBill.do?menuId=13009");
		// driver.findElement(By.className("search-js")).click();
		// }
	}

	// http://service.zj.10086.cn/yw/detail/queryHisDetailBill.do?bid=&menuId=13009&listtype=1&month=04-2017

	public static Result scan(String key, String code) {
		String sessionId = SessionUtils.get(key);
		if (sessionId == null) {
			return new Result(Constants.NEEDLOGIN, Constants.getMessage(Constants.NEEDCODE));
		}
		try {
			WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			if (driver.manage().getCookieNamed("CmWebtokenid") == null) {
				return new Result(Constants.NEEDLOGIN, Constants.getMessage(Constants.NEEDCODE));
			}

			try {
				new WebDriverWait(driver, 2).until(ExpectedConditions.urlMatches(".*queryHisDetailBill.*"));
				// Pattern pattern = Pattern.compile(".*queryHisDetailBill.*");
				// Matcher matcher = pattern.matcher(driver.getCurrentUrl());
				// if (!matcher.matches()) {
				// return new Result(Constants.INPROCESS,
				// Constants.getMessage(Constants.INPROCESS));
				// //
				// driver.get("http://service.zj.10086.cn/yw/detail/queryHisDetailBill.do?menuId=13009&AISSO_LOGIN=true");
				// // driver.findElement(By.className("search-js")).click();
				// }
			} catch (Exception e) {
				e.printStackTrace();
				return new Result(Constants.INPROCESS, Constants.getMessage(Constants.INPROCESS));
			}
			
			try {
				driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
				WebElement vc = driver.findElement(By.id("validateCode"));
				vc.sendKeys(code); // br.readLine()
				driver.findElement(By.className("tiji")).click();
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			try {
				new WebDriverWait(driver, 2).until(ExpectedConditions.urlMatches(".*month.*"));
			} catch (Exception e) {
				e.printStackTrace();
				return new Result(Constants.CODEERROR,  Constants.getMessage(Constants.CODEERROR));
			}
			// driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

			// WebElement e = (new WebDriverWait(driver, 2)).until(new
			// ExpectedCondition<WebElement>() {
			// @Override
			// public WebElement apply(WebDriver d) {
			// return d.findElement(By.id("id locator"));
			// }
			// });
			// try {
			// WebElement vc = driver.findElement(By.id("validateCode"));
			// vc.sendKeys(code); // br.readLine()
			// driver.findElement(By.className("tiji")).click();
			// } catch (Exception e) {
			// e.printStackTrace();
			// }

			// Pattern pattern2 = Pattern.compile(".*month.*");
			// System.out.println(driver.getCurrentUrl());
			// Matcher matcher2 = pattern2.matcher(driver.getCurrentUrl());
			// if(!matcher2.matches()){
			// return new Result(Constants.CODEERROR,
			// Constants.getMessage(Constants.CODEERROR));
			// }

			// List<WebElement> titles =
			// driver.findElements(By.className("titlecol"));
			// List<String> titleStr = new ArrayList<>();
			// for(WebElement title:titles){
			// titleStr.add(StringEscapeUtils.escapeHtml4(title.getText()));
			// }
			List<List<String>> data = new ArrayList<>();
			try {
				List<WebElement> rows = driver.findElements(By.className("content2"));
				for (WebElement row : rows) {
					List<WebElement> tds = row.findElements(By.className("talbecontent1"));
					List<String> tdStrs = new ArrayList<>();
					for (WebElement td : tds) {
						tdStrs.add(StringEscapeUtils.escapeHtml4(td.getText()));
					}
					data.add(tdStrs);
				}
			} catch (Exception e) {
				e.printStackTrace();
				return new Result(Constants.CODEERROR, Constants.getMessage(Constants.CODEERROR));
			}

			driver.quit();
			SessionUtils.remove(key);
			return new Result(Constants.SUCCESS, data);
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.NEEDCODE, Constants.getMessage(Constants.NEEDCODE));
		}

	}

}
