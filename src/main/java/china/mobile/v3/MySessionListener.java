package china.mobile.v3;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.MyPhantomJSDriver;

public class MySessionListener implements HttpSessionListener {

	public void sessionCreated(HttpSessionEvent se) {
	}

	public void sessionDestroyed(HttpSessionEvent se) {
		String key = se.getSession().getId();
		try {
			WebDriver driver = new MyPhantomJSDriver(SessionUtils.get(key), 48105);
			driver.quit();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			SessionUtils.remove(key);
			SessionUtils.removeState(key);
		}

	}
}