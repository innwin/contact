package com.contact.util;

import java.io.FileInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Properties;

public class MyPropKit {

	private static Properties properties;

	public static void use(String fileName) {
		try {
			InputStream inputStream = Thread.currentThread().getContextClassLoader().getResourceAsStream(fileName);
			properties = new Properties();
			properties.load(new InputStreamReader(inputStream, "UTF-8"));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static String get(String key) {
		if (properties == null) {
			throw new IllegalArgumentException("File can not be null.");
		}
		return properties.getProperty(key);
	}
}
