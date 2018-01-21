package com.contact.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.StringUtils;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.MyPhantomJSDriver;

import com.jfinal.core.Controller;

public class CookieUtils {
	public static class SessionExpire {
		public String sessionId = "";
		public long time = 0;

		public SessionExpire(String sessionId, long time) {
			this.sessionId = sessionId;
			this.time = time;
		}

	}

	private static Map<String, SessionExpire> mapSessionId = new ConcurrentHashMap<>();

	public static void cleanSession(String key) {
		SessionExpire session = CookieUtils.mapSessionId.get(key);
		try {
			if (session != null && !StringUtils.isEmpty(session.sessionId)) {
				WebDriver driver = new MyPhantomJSDriver(session.sessionId, ToolUtils.getPort(key));
				driver.quit();
			}
		} catch (Exception e) {
			e.printStackTrace();
			CookieUtils.mapSessionId.remove(key);
		}
	}

	static {

		for (int port : ToolUtils.portAll()) {
			MyPhantomJSDriver driver = new MyPhantomJSDriver("", port);
			List<Map<String, ?>> sessions = driver.getAllSessions();
			for (Map<String, ?> map : sessions) {
				String sessionId = (String) map.get("id");
				new MyPhantomJSDriver(sessionId, port).quit();
			}
		}

		ScheduledExecutorService executor = Executors.newScheduledThreadPool(1);
		executor.scheduleWithFixedDelay(new Runnable() {
			public void run() {
				for (Entry<String, SessionExpire> kv : mapSessionId.entrySet()) {
					if (System.currentTimeMillis() - kv.getValue().time > 1000 * 60 * 3) {
						cleanSession(kv.getKey());
					}
				}
			}
		}, 0, 1, TimeUnit.SECONDS);

	}

	public static void putSessionId(Controller c, String sessionId) {
		put(c, sessionId, "");
	}

	public static void putNm(Controller c, String nm) {
		put(c, "", nm);
	}

	public static void updateLastTime(Controller c) {
		put(c, "", "");
	}

	public static void put(Controller c, String sessionId, String nm) {
		int expire = 24 * 60 * 60;
		if (StringUtils.isNotEmpty(sessionId)) {
			c.setCookie("sessionId", sessionId, expire, "/");
		}
		long now = System.currentTimeMillis();
		c.setCookie("lastTime", String.valueOf(now), expire, "/");
		SessionExpire sessionExpire = mapSessionId.get(nm);
		if (sessionExpire != null) {
			sessionExpire.time = now;
		}
		if (StringUtils.isNotEmpty(nm)) {
			c.setCookie("nm", nm, expire, "/");
			if (StringUtils.isEmpty(sessionId)) {
				sessionId = getSessionId(c);
			}
			mapSessionId.put(nm, new SessionExpire(sessionId, Long.valueOf(nm)));
		}
	}

	public static Map<String, String> get(Controller c) {
		String sessionId = c.getCookie("sessionId");
		String nm = c.getCookie("nm");
		String lastTime = c.getCookie("lastTime");
		Map<String, String> map = new HashMap<>();
		map.put("sessionId", sessionId);
		map.put("nm", nm);
		map.put("lastTime", lastTime);
		return map;
	}

	public static String getSessionId(Controller c) {
		return get(c).get("sessionId");
	}

	public static String getNm(Controller c) {
		return get(c).get("nm");
	}

	public static Long getLastTime(Controller c) {
		String lastTime = get(c).get("nm");
		if (StringUtils.isNotEmpty(lastTime)) {
			return Long.valueOf(lastTime);
		}
		return 0l;
	}

}
