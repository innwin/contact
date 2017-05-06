package com.contact.common;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.apache.commons.lang3.StringUtils;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.MyPhantomJSDriver;

public class MySessionListener implements HttpSessionListener {

	public void sessionCreated(HttpSessionEvent se) {
	}

	public void sessionDestroyed(HttpSessionEvent se) {
		String key = se.getSession().getId();
		try {
			String sessionId = SessionUtils.getSessionId(key);
			if (!StringUtils.isEmpty(sessionId)) {
				WebDriver driver = new MyPhantomJSDriver(sessionId, 48105);
				driver.quit();
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			SessionUtils.removeSessionId(key);
			SessionUtils.removePhone(key);
		}

	}
}