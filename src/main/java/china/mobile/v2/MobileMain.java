package china.mobile.v2;

import java.io.BufferedReader;
import java.io.InputStreamReader;
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
		driver.get("https://login.10086.cn/login.html");
		driver.manage().window().maximize();
		driver.findElement(By.id("radiobuttonSMS")).click();
		driver.findElement(By.id("p_name")).sendKeys("18868945291");
		driver.findElement(By.id("getSMSpwd")).click();
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		
		driver.findElement(By.id("p_pwd")).sendKeys(br.readLine());
		((RemoteWebDriver) driver).executeScript(
				"window.getJSON=$.getJSON;$.getJSON=function(){ var funObj=arguments[2]; var myFun=function(data){  window.myData=data;  funObj(data); } ; window.getJSON(arguments[0],arguments[1],myFun) }");
		driver.findElement(By.id("submit_bt")).click();
		try {
			WebDriverWait wait = new WebDriverWait(driver, 1);
			@SuppressWarnings("unchecked")
			Map<String, ?> data = (Map<String, ?>)wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return  ((RemoteWebDriver) driver)
							.executeScript("return window.myData;");
				}
			});
			if(!"0".equals(data.get("code"))){
				System.out.println("error");
				return;
			}else{
				System.out.println("success");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		try{
			WebElement we = new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@code='020700']")));
			we.click();
		}catch (Exception e) {
			e.printStackTrace();
		}
	}
}
