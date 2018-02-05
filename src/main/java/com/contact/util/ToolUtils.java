package com.contact.util;

import java.util.Calendar;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.jfinal.kit.PropKit;

public class ToolUtils {

	public static String filterTime(String content) {
		String pattern0 = "\\d*-\\d*-\\d* \\d*:\\d*:\\d*";
		String pattern1 = "(\\d*)-\\d* \\d*:\\d*:\\d*";

		boolean isMatch0 = Pattern.matches(pattern0, content);
		boolean isMatch1 = Pattern.matches(pattern1, content);
		if (isMatch0) {
			return content;
		} else if (isMatch1) {
			Matcher matcher = Pattern.compile(pattern1).matcher(content);
			if (matcher.find()) {
				String monthGive = matcher.group(1);
				Calendar calendar = Calendar.getInstance();
				int monthCurrent = calendar.get(Calendar.MONTH) + 1;
				if (monthCurrent < Integer.valueOf(monthGive)) {
					return (calendar.get(Calendar.YEAR) - 1) + "-" + content;
				} else {
					return calendar.get(Calendar.YEAR) + content;
				}
			}
		}
		return content;
	}

	private static int length = PropKit.getInt("max.port.count");
	private static int[] ports = new int[length];

	static {
		init();
	}

	private static void init() {
		int port = 48105;
		for (int i = 0; i < length; i++) {
			ports[i] = port++;
		}
	}

	public static int[] portAll() {
		return ports;
	}

	private static int hash(String s) {
		int h = 0;
		for (int i = 0; i < s.length(); i++) {
			h = 31 * h + s.charAt(i);
		}
		return h;
	}

	private static int hash_code(String s) {
		int h = hash(s);
		return h ^ (h >> 16);

	}

	private static int index_for(String s, int l) {
		return hash_code(s) & (l - 1);
	}

	public static int getPort(String key) {
		return ports[index_for(key, length)];
	}

}