package com.contact.util;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.eclipse.jetty.util.ajax.JSON;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

public class DebugUtils {

	public static void saveImg(WebDriver driver, String tmp) {
		try {
			File file = ((RemoteWebDriver) driver).getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(file, new File(tmp));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void OutputMsg(Object o) {
		if (o instanceof String) {
			System.out.println(o);
		} else {
			System.out.println(JSON.toString(o));
		}
	}

}
