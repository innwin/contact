package china.telecom.v3;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;

import org.apache.commons.lang3.StringEscapeUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.RemoteWebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.beust.jcommander.internal.Nullable;

public class MobileMain2 {
	public static void main(String[] args) throws Exception {
		DesiredCapabilities capabilities = DesiredCapabilities.chrome();
		ChromeOptions options = new ChromeOptions();
		// options.setBinary("/opt/google/chrome/chrome");
		capabilities.setCapability(ChromeOptions.CAPABILITY, options);
		WebDriver driver = new ChromeDriver(capabilities);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get(
				"http://zj.189.cn/wt_uac/auth.html?app=wt&login_goto_url=my%2Fben%2Fzhanghu%2Fxiangdan%2F&module=null&auth=uam_login_auth&template=uam_login_page");
		driver.manage().window().maximize();
		driver.findElement(By.id("u_account")).clear();
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		driver.findElement(By.id("u_account")).sendKeys("15336532612");
		driver.findElement(By.id("u_password")).clear();
		driver.findElement(By.id("u_password")).sendKeys("161616");
		driver.findElement(By.id("product_code")).clear();
		driver.findElement(By.id("product_code")).sendKeys(br.readLine());
		String jsStart = "window.ajaxBack = jQuery.ajax;" + "\n" + "jQuery.ajax = function(setting){" + "\n"
				+ "window.myCb = setting.success;" + "\n" + "window.myContext = setting.context;" + "\n"
				+ "setting.success = function(){" + "\n"
				// +"window.myArguments = arguments;"+"\n"
				+ "window.myData=arguments;" + "\n"
				// if($.isFunction(window.myCb)){window.myCb.apply(setting.context,
				// arguments); }
				+ "}" + "\n" + "window.ajaxBack(setting);" + "\n" + "}";
		String jsEnd = "if(jQuery.isFunction(window.myCb)){window.myCb.apply(window.myContext, window.myData); };";
		String jsClean = "jQuery.ajax=window.ajaxBack;delete window.ajaxBack;delete window.myCb;delete window.myData;";

		String jsEndCustom = "jQuery.ajax=window.ajaxBack;delete window.ajaxBack;"
				+ "if(jQuery.isFunction(window.myCb)){window.myCb.apply(window.myContext, window.myData); };"
				+ "delete window.myCb;delete window.myData;delete window.myContext;";
		
		// String test="$j.ajax({"+"\n"
		// +"async: true,"+"\n"
		// +"url: 'accounttype!gettype.ajax',"+"\n"
		// +"type: 'POST',"+"\n"
		// +"dataType: 'json',"+"\n"
		// +"data: $j('#loginForm').serialize(),"+"\n"
		// +"success: function(reply){"+"\n"
		// +"}"+"\n"
		// +"}"+"\n"
		// +");";

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
			((RemoteWebDriver) driver).executeScript(jsEndCustom );//jsClean
			String result = (String) data.get(0);
			System.out.println(result + "---------");
		} catch (Exception e) {
			e.printStackTrace();
		}
		//
		// driver.get("http://zj.189.cn/shouji/15336532612/zhanghu/xiangdan/");
		//
		// // String form = (String) ((RemoteWebDriver) driver)
		// // .executeScript("return
		// // document.getElementsByName('form1')[0].outerHTML");
		//
		// driver.findElement(By.name("username")).sendKeys("陈有凤");
		// driver.findElement(By.name("idcard")).sendKeys("330523196811275426");
		// driver.findElement(By.id("codekey")).click();
		//
		// driver.findElement(By.name("cdrCondition.randpsw")).sendKeys(br.readLine());
		//
		//// ((RemoteWebDriver) driver).executeScript(
		//// "function cdrSubmit(cdrlevel){
		// document.form1.action='/zjpr/cdr/getCdrDetail.htm';
		// document.form1.submit();}");
		//// driver.findElement(By.name("Submit")).click();
		//
		// String submit = "jQuery.ajax({"+"\n"
		// +" type: \"POST\","+"\n"
		// +" dataType: \"html\","+"\n"
		// +" url: \"/zjpr/cdr/getCdrDetail.htm\","+"\n"
		// +" data: jQuery(\"form[name='form1']\").serialize(),"+"\n"
		// +" success: function (result) {"+"\n"
		// +" re=/(.|\\s|\\S)*(location.href.* error.html)(.|\\s|\\S)*/"+"\n"
		// +" if(re.test(result)){"+"\n"
		// +" window.myData=false;"+"\n"
		// +" return;"+"\n"
		// +" }"+"\n"
		// +" window.myData=true;"+"\n"
		// +" jQuery(\"body\").append(\"<iframe
		// srcdoc='\"+result+\"'></iframe>\");"+"\n"
		// +" },"+"\n"
		// +" error: function(data) {"+"\n"
		// +" console.log(\"error:\"+data.responseText);"+"\n"
		// +" }"+"\n"
		// +" });";
		//
		// WebDriverWait wait = new WebDriverWait(driver, 10);
		// ((RemoteWebDriver) driver).executeScript(submit);
		// boolean success = (boolean)wait.until(new Function<WebDriver,
		// Object>() {
		// public Object apply(@Nullable WebDriver driver) {
		// return ((RemoteWebDriver) driver).executeScript("return
		// window.myData;");
		// }
		// });
		// if(!success){
		// return;
		// }
		// driver.switchTo().frame(0);
		// WebElement body = driver.findElement(By.tagName("tbody"));
		// List<WebElement> trs = body.findElements(By.tagName("tr"));
		// int i = 0;
		// for (WebElement tr : trs) {
		// if (i > 1) {
		// List<WebElement> tds = tr.findElements(By.tagName("td"));
		// for (WebElement td : tds) {
		// // 序列号 对方号码 呼叫类型 通话日期起始时间 通话时长 通话地 通话类型 本地费或漫游费 长途费 减免 费用小计
		// // 备注
		// String str = StringEscapeUtils.escapeHtml4(td.getText());
		// }
		// }
		// i++;
		// }

	}
}
