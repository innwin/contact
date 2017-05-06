package com.contact.common;

import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.StringUtils;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.MyPhantomJSDriver;

public class SessionUtils {
	public static class SessionExpire {
		public String sessionId;
		public SessionExpire(String sessionId, long time) {
			this.sessionId = sessionId;
			this.time = time;
		}
		public long time;
	}

	public static void cleanSession(String key) {
		SessionExpire session = SessionUtils.getSessionId(key);
		try {
			if (session != null && !StringUtils.isEmpty(session.sessionId)) {
				WebDriver driver = new MyPhantomJSDriver(session.sessionId, 48105);
				driver.quit();
			}
		} catch (Exception e) {
			e.printStackTrace();
			SessionUtils.removeSessionId(key);
			SessionUtils.removePhone(key);
		}
	}

	static {
		ScheduledExecutorService executor = Executors.newScheduledThreadPool(1);
		executor.scheduleWithFixedDelay(new Runnable() {
			public void run() {
				for (Entry<String, SessionExpire> kv : mapSessionId.entrySet()) {
					if (System.currentTimeMillis() - kv.getValue().time > 1000 * 60 * 10) {
						cleanSession(kv.getKey());
					}
				}
			}
		}, 0, 100, TimeUnit.MILLISECONDS);
	}
	private static Map<String, SessionExpire> mapSessionId = new ConcurrentHashMap<>();

	private static Map<String, String> mapPhone = new ConcurrentHashMap<>();

	public static String getPhone(String key) {
		return mapPhone.get(key);
	}

	public static void putPhone(String key, String val) {
		mapPhone.put(key, val);
	}

	public static SessionExpire getSessionId(String key) {
		return mapSessionId.get(key);
	}

	public static void putSessionId(String key, SessionExpire val) {
		mapSessionId.put(key, val);
	}

	public static void removeSessionId(String key) {
		mapPhone.remove(key);
	}

	public static void removePhone(String key) {
		mapSessionId.remove(key);
	}

}
