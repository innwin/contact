package com.contact.util;

import com.jfinal.kit.PropKit;

public class ToolUtils {

	private static int length = PropKit.getInt("max.port.count");
	private static int[] ports = new int[length];

	private static void init() {
		int port = 48105;
		for (int i = 0; i < length; i++) {
			ports[i] = port++;
		}
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
		init();
		return ports[index_for(key, length)];
	}

	public static void postData(String nm) {

	}
}