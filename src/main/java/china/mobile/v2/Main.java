package china.mobile.v2;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;

import org.apache.commons.io.FileUtils;

public class Main {
	public static void main(String[] args) throws Exception {
		String key = "18868945291";
		File file = ChinaMobileRemoteExecute.getVerifyCode(key);
		try {
			FileUtils.copyFile(file, new File("/Users/mac-hc/test1.jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		ChinaMobileRemoteExecute.login(key, "18868945291", "531234", br.readLine());

		ChinaMobileRemoteExecute.scan(key, br.readLine());

	}
}
