package org.openqa.selenium.remote;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import org.openqa.selenium.NoSuchSessionException;
import org.openqa.selenium.SessionNotCreatedException;
import org.openqa.selenium.UnsupportedCommandException;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.logging.LocalLogs;
import org.openqa.selenium.logging.LogEntry;
import org.openqa.selenium.logging.NeedsLocalLogs;
import org.openqa.selenium.logging.profiler.HttpProfilerLogEntry;
import org.openqa.selenium.remote.http.HttpClient;
import org.openqa.selenium.remote.http.HttpRequest;
import org.openqa.selenium.remote.http.HttpResponse;
import org.openqa.selenium.remote.http.JsonHttpCommandCodec;
import org.openqa.selenium.remote.http.JsonHttpResponseCodec;
import org.openqa.selenium.remote.internal.ApacheHttpClient;

import com.google.common.base.Preconditions;
import com.google.common.collect.ImmutableMap;

public class MyHttpCommandExecutor implements CommandExecutor, NeedsLocalLogs {
	private static HttpClient.Factory defaultClientFactory;
	private final URL remoteServer;
	private final HttpClient client;
	private final Map<String, CommandInfo> additionalCommands;
	private CommandCodec<HttpRequest> commandCodec;
	private ResponseCodec<HttpResponse> responseCodec;
	private LocalLogs logs = LocalLogs.getNullLogger();

	public MyHttpCommandExecutor(URL addressOfRemoteServer) {
		this( ImmutableMap.of(), addressOfRemoteServer);
	}

	public MyHttpCommandExecutor(Map<String, CommandInfo> additionalCommands, URL addressOfRemoteServer) {
		this(additionalCommands, addressOfRemoteServer, getDefaultClientFactory());
	}

	public MyHttpCommandExecutor(Map<String, CommandInfo> additionalCommands, URL addressOfRemoteServer,
			HttpClient.Factory httpClientFactory) {
		try {
			this.remoteServer = (addressOfRemoteServer == null
					? new URL(System.getProperty("webdriver.remote.server", "http://localhost:4444/wd/hub"))
					: addressOfRemoteServer);
		} catch (MalformedURLException e) {
			throw new WebDriverException(e);
		}
		this.additionalCommands = additionalCommands;
		this.client = httpClientFactory.createClient(this.remoteServer);
	}

	private static synchronized HttpClient.Factory getDefaultClientFactory() {
		if (defaultClientFactory == null) {
			defaultClientFactory = new ApacheHttpClient.Factory();
		}
		return defaultClientFactory;
	}

	protected void defineCommand(String commandName, CommandInfo info) {
		Preconditions.checkNotNull(commandName);
		Preconditions.checkNotNull(info);
		this.commandCodec.defineCommand(commandName, info.getMethod(), info.getUrl());
	}

	public void setLocalLogs(LocalLogs logs) {
		this.logs = logs;
	}

	private void log(String logType, LogEntry entry) {
		this.logs.addEntry(logType, entry);
	}

	public URL getAddressOfRemoteServer() {
		return this.remoteServer;
	}

	public Response execute(Command command) throws IOException {
		if (command.getSessionId() == null) {
			if ("quit".equals(command.getName())) {
				return new Response();
			}
			if ((!"getAllSessions".equals(command.getName())) && (!"newSession".equals(command.getName()))) {
				throw new NoSuchSessionException("Session ID is null. Using WebDriver after calling quit()?");
			}
		}
		if ("newSession".equals(command.getName())) {
			if (this.commandCodec != null) {
				throw new SessionNotCreatedException("Session already exists");
			}
			MyProtocolHandshake handshake = new MyProtocolHandshake();
			log("profiler", new HttpProfilerLogEntry(command.getName(), true));
			MyProtocolHandshake.Result result = handshake.createSession(this.client, command);
			Dialect dialect = result.getDialect();

			this.commandCodec = dialect.getCommandCodec();
			for (Map.Entry<String, CommandInfo> entry : this.additionalCommands.entrySet()) {
				defineCommand((String) entry.getKey(), (CommandInfo) entry.getValue());
			}
			this.responseCodec = dialect.getResponseCodec();
			log("profiler", new HttpProfilerLogEntry(command.getName(), false));
			return result.createResponse();
		}
		if (command.getSessionId() != null && (this.commandCodec == null) || (this.responseCodec == null)) {
			MyProtocolHandshake handshake = new MyProtocolHandshake();
			MyProtocolHandshake.Result result = handshake.connSession(this.client, command.getSessionId());
			Dialect dialect = result.getDialect();
			this.commandCodec = dialect.getCommandCodec();
			this.responseCodec = dialect.getResponseCodec();
			// throw new WebDriverException("No command or response codec has
			// been defined. Unable to proceed");
		}
		HttpRequest httpRequest = (HttpRequest) this.commandCodec.encode(command);
		try {
			log("profiler", new HttpProfilerLogEntry(command.getName(), true));
			HttpResponse httpResponse = this.client.execute(httpRequest, true);
			log("profiler", new HttpProfilerLogEntry(command.getName(), false));

			Response response = this.responseCodec.decode(httpResponse);
			if (response.getSessionId() == null) {
				if (httpResponse.getTargetHost() != null) {
					response.setSessionId(HttpSessionId.getSessionId(httpResponse.getTargetHost()));
				} else {
					response.setSessionId(command.getSessionId().toString());
				}
			}
			if ("quit".equals(command.getName())) {
				this.client.close();
			}
			return response;
		} catch (UnsupportedCommandException e) {
			if ((e.getMessage() == null) || ("".equals(e.getMessage()))) {
				throw new UnsupportedOperationException(
						"No information from server. Command name was: " + command.getName(), e.getCause());
			}
			throw e;
		}
	}
}
