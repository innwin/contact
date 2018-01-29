package china.telecom.v3;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;

import org.apache.commons.lang3.StringUtils;
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
import com.contact.util.Base64Image;
import com.contact.util.CookieUtils;
import com.contact.util.CookieUtils.SessionExpire;
import com.contact.util.ImageUtils;
import com.contact.util.RemotePostUtils;
import com.contact.util.ToolUtils;
import com.jfinal.plugin.task.TaskKit;

public class ChinaTelecomRemoteExecute0 {

	static {
		System.setProperty("phantomjs.binary.path", "/usr/bin/phantomjs");
	}

	public static Result loginForm(String key,String sessionId) {
		CookieUtils.cleanSession(sessionId);
		try {
			WebDriver driver = new MyPhantomJSDriver("", ToolUtils.getPort(key));
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.get("http://login.189.cn/web/login");
			driver.manage().window().maximize();
			return new Result(Constants.SUCCESS, ((RemoteWebDriver) driver).getSessionId().toString());
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
	}

	public static Result sendLoginCode(String sessionId) {
		SessionExpire sessionExpire = CookieUtils.getSessionExpire(sessionId);
		if (StringUtils.isEmpty(sessionId) || sessionExpire == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, ToolUtils.getPort(sessionExpire.key));
		try {
			new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.id("divGetRandomPwd")))
					.click();// 120s
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));
	}

	public static Result login(String sessionId, String login, String pwd, String code) {
		SessionExpire sessionExpire = CookieUtils.getSessionExpire(sessionId);
		if (StringUtils.isEmpty(sessionId) || sessionExpire == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, ToolUtils.getPort(sessionExpire.key));
		driver.manage().window().maximize();
		WebElement account = driver.findElement(By.id("txtAccount"));
		account.clear();
		account.sendKeys(login);
		WebElement password = driver.findElement(By.id("txtShowPwd"));
		password.clear();
		password.sendKeys(pwd);
		WebElement captcha = driver.findElement(By.id("txtCaptcha"));
		captcha.clear();
		captcha.sendKeys(code);
		// driver.findElement(By.id("loginbtn")).click();

		String data = (String) ((RemoteWebDriver) driver).executeScript(
				"$(\"#txtPassword\").valAesEncryptSet() ;return decodeURIComponent(jQuery(\"#loginForm\").serialize());");

		String submit = "jQuery.ajax({" + "\n" //
				+ " type: \"POST\"," + "\n" //
				+ " dataType: \"html\"," + "\n"//
				+ " url: \"/web/login\"," + "\n" //
				+ " data: arguments[0]," + "\n" //
				+ " success: function (result) {" + "\n" //
				+ "		window.myData={};" + "\n" //
				+ " 	window.myData.success=$(result).find(\"#divErr\").text() == \"\";" + "\n" //
				+ " 		if(!window.myData.success) { window.myData.msg = $(result).find(\"#divErr\").text(); }"
				+ " }," //
				+ " error: function(data) {" + "\n" //
				+ "     console.log(\"error:\"+data.responseText);" + "\n" //
				+ "  }" + "\n" //
				+ " });";

		((RemoteWebDriver) driver).executeScript(submit, data);

		try {
			WebDriverWait wait = new WebDriverWait(driver, 10);
			Map<String, String> rs = (Map<String, String>) wait.until(new Function<WebDriver, Object>() {
				public Object apply(@Nullable WebDriver driver) {
					return ((RemoteWebDriver) driver).executeScript("return window.myData;");
				}
			});
			if (!"true".equals(rs.get("success"))) {
				return new Result(Constants.SYSTEMERROR, rs.get("msg"));
			}
			doJob(sessionId);
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));

	}

	public static Result getLoginVerifyImage(String sessionId,boolean refresh) {
		SessionExpire sessionExpire = CookieUtils.getSessionExpire(sessionId);
		if (StringUtils.isEmpty(sessionId) || sessionExpire == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, ToolUtils.getPort(sessionExpire.key));
		driver.manage().window().maximize();
		try {

			if (refresh) {
				((RemoteWebDriver) driver).executeScript("window.myOnload=document.getElementById('imgCaptcha').onload;"//
						+ "document.getElementById('imgCaptcha').onload=function(){ window.myData=true; };"//
						+ "jQuery(\"#imgCaptcha\").click();");
				WebDriverWait wait = new WebDriverWait(driver, 5);
				wait.until(new Function<WebDriver, Object>() {
					public Object apply(@Nullable WebDriver driver) {
						return ((RemoteWebDriver) driver).executeScript("return window.myData;");
					}
				});
				((RemoteWebDriver) driver).executeScript(
						"delete window.myData;document.getElementById('imgCaptcha').onload=window.myOnload");
			}
			String js = "window.getBase64Image=function(img) {" + "\n"//
					+ " var canvas = document.createElement(\"canvas\"); " + "\n"//
					+ " canvas.width = img.width; " + "\n"//
					+ " canvas.height = img.height; " + "\n"//
					+ " var ctx = canvas.getContext(\"2d\"); " + "\n"//
					+ " ctx.drawImage(img, 0, 0, img.width, img.height); " + "\n"//
					+ " var dataURL = canvas.toDataURL(\"image/png\"); " + "\n"//
					+ " return dataURL; " + "\n"//
					+ " }; " + "\n";//
			String base64 = (String) ((RemoteWebDriver) driver)
					.executeScript(js + " return window.getBase64Image(document.getElementById('imgCaptcha')); ");
			base64 = base64.replace("data:image/png;base64,", "");
			File file = Base64Image.generateImage(base64);
			return new Result(Constants.SUCCESS, file);
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
	}

	public static Result doJob(String sessionId) {
		SessionExpire sessionExpire = CookieUtils.getSessionExpire(sessionId);
		if (StringUtils.isEmpty(sessionId) || sessionExpire == null) {
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		WebDriver driver = new MyPhantomJSDriver(sessionId, ToolUtils.getPort(sessionExpire.key));
		try {
			TaskKit.taskExecutor.execute(new Runnable() {
				@Override
				public void run() {
					driver.get("http://www.189.cn/dqmh/my189/initMy189home.do?fastcode=01420651");
					String domain = (String) ((RemoteWebDriver) driver).executeScript(
							"return document.getElementById(\"bodyIframe\").src.match(/toStUrl=(http:\\/\\/.*\\.189\\.cn).*&/)[1]");
					
					String[] colums = new String[] { "startTime", "commTime", "commMode", "commPlac", "anotherNm" };
					Calendar calendar = Calendar.getInstance();
					SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
					List<Map<String, String>> datas = new ArrayList<>();
					for (int i = 0; i < 6; i++) {
						if (i > 0) {
							calendar.add(Calendar.MONTH, -1);
							List<List<String>> rs = submit(driver, domain, sdf.format(calendar.getTime()));
							for (List<String> data : rs) {
								Map<String, String> ele = new HashMap<String, String>();
								for (int j = 0; j < data.size(); j++) {
									if (j != 0)
										ele.put(colums[j - 1], data.get(i));
								}
								datas.add(ele);
							}
						}
					}
					RemotePostUtils.postData(datas);
					CookieUtils.cleanSession(sessionId);
				}
			});

		} catch (Exception e) {
			e.printStackTrace();
			return new Result(Constants.SYSTEMERROR, Constants.getMessage(Constants.SYSTEMERROR));
		}
		return new Result(Constants.SUCCESS, Constants.getMessage(Constants.SUCCESS));

	}

	private static List<List<String>> submit(WebDriver driver, String domain, String month) {
		Integer pageNo = 1;
		String url = domain + "/service/bill/result/mobile/mobile_call_result.jsp?"
				+ "SDAY=1&v_choosetype=0&EDAY=31&MONTH=" + month + "&PRODTYPE=50&PRODNO=MTgwNjUyMDkyODU=&PAGENO="
				+ pageNo + "&INTERPAGE=100";

		driver.get(url);// 201710

		pageNo = Integer.valueOf((String) ((RemoteWebDriver) driver)
				.executeScript("return document.getElementById(\"wpage\").getAttribute(\"maxlength\");"));

		List<List<String>> datas = new ArrayList<>();
		for (int i = 1; i <= Integer.valueOf(pageNo); i++) {
			pageNo = i;
			driver.get(url);
			String js = "window.data=[];" + //
					"$(\"table tr\").each(function(index,eles){ \n" + //
					"	if(index!=0){ \n" + //
					"		e = []; \n" + //
					"		$(eles).find(\"td\").each(function(index,ele){\n" + //
					"			console.log(ele);\n" + //
					"			e.push($(ele).text())\n" + //
					"		});\n" + //
					"		data.push(e); \n" + //
					" }); \n" + //
					" return window.data;";
			List<List<String>> ele = (List<List<String>>) ((RemoteWebDriver) driver).executeScript(js);
			datas.addAll(ele);
		}

		try {
			return datas;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
