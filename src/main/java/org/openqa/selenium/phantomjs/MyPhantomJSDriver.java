package org.openqa.selenium.phantomjs;

import java.io.IOException;
import java.lang.reflect.Field;
import java.util.Map;

import org.openqa.selenium.Capabilities;
import org.openqa.selenium.Platform;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.DriverCommand;
import org.openqa.selenium.remote.MyHttpCommandExecutor;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.Response;

import com.google.common.collect.ImmutableMap;

public class MyPhantomJSDriver extends PhantomJSDriver {
	private String mySessionId;

	private Capabilities desiredCapabilities;
	private Capabilities requiredCapabilities;

	private int port;

	public MyPhantomJSDriver(String mySessionId, int port) {
		super(port);
		this.mySessionId = mySessionId;
		this.port = port;
		try {
			startSession();
		} catch (RuntimeException e) {
			try {
				quit();
			} catch (Exception localException1) {
			}
			throw e;
		}
	}

	
	protected void startSession() {
		if (this.mySessionId != null && !this.mySessionId.isEmpty()) {

//			// URL driverserver = new URL(localServer);
//			 MyHttpCommandExecutor delegate = new PhantomJSCommandExecutor(
//					PhantomJSDriverService.createDefaultServiceWithPort(desiredCapabilities, this.port));
//			// HttpCommandExecutor(driverserver);
//
//			try {
//				// TODO: use a more intelligent way of testing if the server is
//				// ready.
//				delegate.getAddressOfRemoteServer().openConnection().connect();
//				super.setCommandExecutor(delegate);
//
//			} catch (IOException e) {
//				e.printStackTrace();
//			}

			super.setSessionId(this.mySessionId);
			// Command command = new Command(super.getSessionId(),
			// DriverCommand.GET_CAPABILITIES);

			ImmutableMap.Builder<String, Capabilities> paramBuilder = new ImmutableMap.Builder();
			paramBuilder.put("desiredCapabilities", desiredCapabilities);
			if (requiredCapabilities != null) {
				paramBuilder.put("requiredCapabilities", requiredCapabilities);
			}
			Map<String, ?> parameters = paramBuilder.build();

			Response response = execute(DriverCommand.GET_CAPABILITIES, parameters);

			Map<String, Object> rawCapabilities = (Map<String, Object>) response.getValue();
			DesiredCapabilities returnedCapabilities = (DesiredCapabilities) super.getCapabilities();
			if (returnedCapabilities == null) {
				returnedCapabilities = new DesiredCapabilities();
			}
			for (Map.Entry<String, Object> entry : rawCapabilities.entrySet()) {
				// Handle the platform later
				if (CapabilityType.PLATFORM.equals(entry.getKey())) {
					continue;
				}
				returnedCapabilities.setCapability(entry.getKey(), entry.getValue());
			}
			String platformString = (String) rawCapabilities.get(CapabilityType.PLATFORM);
			Platform platform;
			try {
				if (platformString == null || "".equals(platformString)) {
					platform = Platform.ANY;
				} else {
					platform = Platform.valueOf(platformString);
				}
			} catch (IllegalArgumentException e) {
				// The server probably responded with a name matching the
				// os.name
				// system property. Try to recover and parse this.
				platform = Platform.extractFromSysProperty(platformString);
			}
			returnedCapabilities.setPlatform(platform);

			// this.myCapabilities = returnedCapabilities;
			try {
				Field f = RemoteWebDriver.class.getDeclaredField("capabilities");
				f.setAccessible(true);
				f.set(this, returnedCapabilities);
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else {
			super.startSession(desiredCapabilities, requiredCapabilities);
		}
	}

	@Override
	protected void startSession(Capabilities desiredCapabilities, Capabilities requiredCapabilities) {
		this.desiredCapabilities = desiredCapabilities;
		this.requiredCapabilities = requiredCapabilities;
	}
}