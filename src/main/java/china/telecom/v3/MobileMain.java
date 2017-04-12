package china.telecom.v3;

import java.util.ArrayList;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;

import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.beust.jcommander.internal.Nullable;

public class MobileMain {
	public static void main(String[] args) throws Exception {
		DesiredCapabilities capabilities = DesiredCapabilities.chrome();
		ChromeOptions options = new ChromeOptions();
//		options.setBinary("/opt/google/chrome/chrome");
		capabilities.setCapability(ChromeOptions.CAPABILITY, options);
		WebDriver driver = new ChromeDriver(capabilities);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("http://login.189.cn/login");
		driver.manage().window().maximize();
		driver.findElement(By.id("txtAccount")).sendKeys("18066289959");
//		driver.findElement(By.id("txtPassword"))..sendKeys("331566");
		((RemoteWebDriver) driver).executeScript("document.getElementById('txtPassword').value=arguments[0]","331566");
		driver.findElement(By.id("loginbtn")).click();
		WebDriverWait wait = new WebDriverWait(driver, 3);
		Cookie data = (Cookie)wait.until(new Function<WebDriver, Object>() {
			public Object apply(@Nullable WebDriver driver) {
				return driver.manage().getCookieNamed("loginStatus");
			}
		});
		if("logined".equals(data.getValue())){
			//success
		}else{
			//faild
		}
		
		
	}
}
