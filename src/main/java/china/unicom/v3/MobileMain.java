package china.unicom.v3;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;

import org.openqa.selenium.By;
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
		options.setBinary("/opt/google/chrome/chrome");
		capabilities.setCapability(ChromeOptions.CAPABILITY, options);
		WebDriver driver = new ChromeDriver(capabilities);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("http://iservice.10010.com/e4/query/bill/call_dan-iframe.html?menuCode=000100030001");
		driver.manage().window().maximize();
		driver.switchTo().frame(1);
		WebElement userName = new WebDriverWait(driver, 10)
				.until(ExpectedConditions.visibilityOfElementLocated(By.id("userName")));
		userName.sendKeys("13017830621");
		driver.findElement(By.id("userPwd")).sendKeys("720628");
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
		try{
			((RemoteWebDriver) driver).executeScript(jsStart);
			driver.findElement(By.id("login1")).click();
			WebDriverWait wait = new WebDriverWait(driver, 5);
			ArrayList<?> data = (ArrayList<?>)wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			((RemoteWebDriver) driver).executeScript(jsEnd + jsClean);
			Map<String, ?> map = (Map<String, ?>) data.get(0);
			System.out.println("false".equals(map.get("resultCode")));
		}catch(Exception e){
			e.printStackTrace();
		}
		

		driver.switchTo().defaultContent();
		
		WebElement button = new WebDriverWait(driver, 10)
				.until(ExpectedConditions.visibilityOfElementLocated(By.id("huoqu_buttons")));
		button.click();
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		driver.findElement(By.id("input")).sendKeys(br.readLine());
		
		try{
			((RemoteWebDriver) driver).executeScript(jsStart);
			driver.findElement(By.id("sign_in")).click();
			WebDriverWait wait = new WebDriverWait(driver, 5);
			ArrayList<?> data = (ArrayList<?>)wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			((RemoteWebDriver) driver).executeScript(jsEnd + jsClean);
			Map<String, ?> map = (Map<String, ?>) data.get(0);
			System.out.println(data);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
}
