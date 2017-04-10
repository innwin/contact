package china.mobile.v3;

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
		driver.get("https://login.10086.cn/login.html?channelID=12003&backUrl=http://shop.10086.cn/i/");// https://login.10086.cn?backUrl=about:blank
		driver.manage().window().maximize();
		driver.findElement(By.id("radiobuttonSMS")).click();
		driver.findElement(By.id("p_name")).sendKeys("15058055230");// 18868945291
		driver.findElement(By.id("getSMSpwd")).click();
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		driver.findElement(By.id("p_pwd")).sendKeys(br.readLine());//
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
			// {artifact=caf39dab40a74f47b63a22670f55850a, islocal=false,
			// result=0, uid=923c500d001445118a10494e10d545c0, code=0000,
			// assertAcceptURL=http://shop.10086.cn/i/v1/auth/getArtifact,
			// desc=认证成功}
			System.out.println(data);
			// if(!"0".equals(data.get("code"))){
			// System.out.println("error");
			// return;
			// }else{
			// System.out.println("success");
			// }
			((RemoteWebDriver) driver)
					.executeScript("window.funObj(window.myData);delete window.myData;$.getJSON=window.getJSON;");

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("error");
			return;
		}

		// driver.get("https://login.10086.cn/SSOCheck.action?channelID=12003&backUrl=http://shop.10086.cn/i/");

		try {
			new WebDriverWait(driver, 10)
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@code='020700']"))).click();
			new WebDriverWait(driver, 10)
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@class='meal-5']/.."))).click();// By.className("meal-5")
			new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.id("month1"))).click();
			new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.id("imageVec")));
		} catch (Exception e) {
			e.printStackTrace();
		}

		String js = "window.ajaxBack = $.ajax;" + "\n" + "$.ajax = function(setting){" + "\n"
				+ "window.myCb = setting.success;" + "\n" + "window.myContext = setting.context;" + "\n"
				+ "setting.success = function(){" + "\n"
				// +"window.myArguments = arguments;"+"\n"
				+ "window.myData=arguments;" + "\n"
				// if($.isFunction(window.myCb)){window.myCb.apply(setting.context,
				// arguments); }
				+ "}" + "\n" + "window.ajaxBack(setting);" + "\n" + "}" + "\n";

		((RemoteWebDriver) driver).executeScript(js);

		driver.findElement(By.id("stc-send-sms")).click();
		try {
			driver.findElement(By.id("vec_servpasswd")).sendKeys(br.readLine());
			driver.findElement(By.id("vec_smspasswd")).sendKeys(br.readLine());// 419106
			driver.findElement(By.id("vec_imgcode")).sendKeys(br.readLine());
			WebDriverWait wait = new WebDriverWait(driver, 1);
			Object o = (ArrayList<?>) wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			// [{sOperTime=null, data=null, retCode=000000, retMsg=success},
			// success, {always={}, getAllResponseHeaders={},
			// setRequestHeader={}, promise={}, then={}, error={}, done={},
			// overrideMimeType={}, fail={}, abort={}, success={},
			// statusText=success, progress={}, readyState=4,
			// getResponseHeader={}, pipe={}, state={}, complete={}, status=200,
			// statusCode={}}]
			
			
//			[{sOperTime=null, data=null, retCode=555002, retMsg=尊敬的用户,今天下发短信次数过多，请明天再使用！}, success, {always={}, getAllResponseHeaders={}, setRequestHeader={}, promise={}, then={}, error={}, done={}, overrideMimeType={}, fail={}, abort={}, success={}, statusText=success, progress={}, readyState=4, getResponseHeader={}, pipe={}, state={}, complete={}, status=200, statusCode={}}]
			System.out.println(o);
			// 正确click
			((RemoteWebDriver) driver).executeScript(
					"if($.isFunction(window.myCb)){window.myCb.apply(window.myContext, window.myData); }");
		} catch (Exception e) {
			e.printStackTrace();
		}

		try {
			driver.findElement(By.id("vecbtn")).click();
			WebDriverWait wait = new WebDriverWait(driver, 1);
			Object o = (ArrayList<?>) wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
//					[{sOperTime=null, data=null, retCode=000000, retMsg=输入正确，校验成功}, success, {always={}, getAllResponseHeaders={}, responseText={"data":null,"retCode":"000000","retMsg":"输入正确，校验成功","sOperTime":null}, setRequestHeader={}, promise={}, then={}, error={}, done={}, overrideMimeType={}, fail={}, abort={}, success={}, statusText=OK, progress={}, readyState=4, getResponseHeader={}, pipe={}, state={}, complete={}, status=200, statusCode={}}]

			// [{sOperTime=null, data=null, retCode=999999, retMsg=输入错误，校验失败},
			// success, {always={}, getAllResponseHeaders={},
			// responseText={"data":null,"retCode":"999999","retMsg":"输入错误，校验失败","sOperTime":null},
			// setRequestHeader={}, promise={}, then={}, error={}, done={},
			// overrideMimeType={}, fail={}, abort={}, success={},
			// statusText=OK, progress={}, readyState=4, getResponseHeader={},
			// pipe={}, state={}, complete={}, status=200, statusCode={}}]
			System.out.println(o);
			((RemoteWebDriver) driver).executeScript(
					"if($.isFunction(window.myCb)){window.myCb.apply(window.myContext, window.myData); }");
		} catch (Exception e) {
			e.printStackTrace();
		}

		// for (int i = 1; i <= 6; i++) {
		// try {
		// WebDriverWait wait = new WebDriverWait(driver, 1);
		// @SuppressWarnings("unchecked")
		// Object o = (ArrayList<?>) wait.until(new Function<WebDriver,
		// Object>() {
		// public Object apply(@Nullable WebDriver driver) {
		// return ((RemoteWebDriver) driver).executeScript("return
		// window.myData;");
		// }
		// });
		// System.out.println(o);
		// ((RemoteWebDriver) driver).executeScript(
		// "if($.isFunction(window.myCb)){window.myCb.apply(window.myContext,
		// window.myData); }");
		// if (i != 1) {
		// driver.findElement(By.id("month" + i)).click();
		// }
		//
		// } catch (Exception e) {
		// e.printStackTrace();
		// System.out.println("error");
		// return;
		// }
		// break;
		// }

	}
}
