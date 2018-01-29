package china.mobile.v3;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.MyPhantomJSDriver;

import com.contact.util.ToolUtils;

public class Main {
	public static void main(String [] args) {
		WebDriver driver = new MyPhantomJSDriver("", 20880);
		driver.get("http://login.189.cn/web/login");
		System.out.println(driver.getPageSource());
	}

}
