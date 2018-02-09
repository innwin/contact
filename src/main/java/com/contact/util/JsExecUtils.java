package com.contact.util;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.function.Function;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.beust.jcommander.internal.Nullable;
import com.contact.common.Constants;
import com.contact.common.Result;

import china.mobile.v3.ChinaMobileRemoteExecute;

public class JsExecUtils {

	private static String readStream(InputStream is) {
		int i;
		try {
			ByteArrayOutputStream os = new ByteArrayOutputStream();
			while ((i = is.read()) != -1) {
				os.write(i);
			}
			return os.toString();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return "";

	}

	public static Object exec(WebDriver driver, String jsFile, boolean withMyData,Object ... args) {
		try {
			String js = JsExecUtils.readStream(JsExecUtils.class.getResourceAsStream(jsFile));
			((RemoteWebDriver) driver).executeScript(js,args);
			if (withMyData) {
				WebDriverWait wait = new WebDriverWait(driver, 10);
				@SuppressWarnings("unchecked")
				Object data = wait.until(new Function<WebDriver, Object>() {
					public Object apply(@Nullable WebDriver driver) {
						return ((RemoteWebDriver) driver).executeScript("return window.myData;");
					}
				});
				((RemoteWebDriver) driver).executeScript("delete window.myData;");
				return data;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}
