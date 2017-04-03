package china.mobile.v2;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.MyPhantomJSDriver;
import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.contact.util.ImageUtils;

public class ChinaMobileRemoteExecute {

	public long timestamp;

	// String hub = "http://127.0.0.1:4444/wd/hub";
	public static File getVerifyCode(String key) {
		long start = System.currentTimeMillis();
		System.setProperty("phantomjs.binary.path", "/usr/local/phantomjs");
		WebDriver driver = new MyPhantomJSDriver("", 48105);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get(
				"http://www.zj.10086.cn/my/login/login.jsp?jumpurl=http://service.zj.10086.cn/yw/detail/queryHisDetailBill.do?menuId=13009&AISSO_LOGIN=true");
		driver.manage().window().maximize();
		WebDriver augmentedDriver = new Augmenter().augment(driver);
		org.openqa.selenium.WebElement e0 = driver.findElement(By.id("ssoImg"));
		File screenshot = ((TakesScreenshot) augmentedDriver).getScreenshotAs(OutputType.FILE);
		ImageUtils.fixImageSize(screenshot, e0.getLocation(), e0.getSize());
		SessionUtils.put(key, ((RemoteWebDriver)driver).getSessionId().toString());
		System.out.println((System.currentTimeMillis() - start)/1000);
		return screenshot;
	}

	public static void login(String key,String loginName, String password, String code) {
		String sessionId = SessionUtils.get(key);
		WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
		driver.findElement(By.id("s_logonName")).sendKeys(loginName); // "18868945291"
		driver.findElement(By.id("s_password")).sendKeys(password);// "531234"
		org.openqa.selenium.WebElement e1 = driver.findElement(By.id("validateKey"));
		e1.sendKeys(code); // br.readLine()
		e1.submit();
		driver.get("http://service.zj.10086.cn/yw/detail/queryHisDetailBill.do?menuId=13009");
		driver.findElement(By.className("search-js")).click();
	}

	public static void scan(String key,String code) {
		String sessionId = SessionUtils.get(key);
		WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
		driver.findElement(By.id("validateCode")).sendKeys(code); // br.readLine()
		// driver.findElements(arg0)
		driver.findElement(By.className("tiji")).click();

		driver.quit();
	}

}
