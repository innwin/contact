package com.contact.common;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.apache.commons.lang3.StringUtils;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.MyPhantomJSDriver;

import com.contact.common.SessionUtils.SessionExpire;

public class MySessionListener implements HttpSessionListener {

	public void sessionCreated(HttpSessionEvent se) {
	}

	public void sessionDestroyed(HttpSessionEvent se) {
		String key = se.getSession().getId();
		SessionUtils.cleanSession(key);
	}
}