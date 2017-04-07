package china.mobile.v2;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.net.SocketAddress;
import java.util.Calendar;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.remote.DriverCommand;

public class Main {
	public static void main(String[] args) throws Exception {
//		String key = "18868945291";
//		File file = ChinaMobileRemoteExecute.getVerifyCode(key);
//		try {
//			FileUtils.copyFile(file, new File("/Users/mac-hc/test1.jpg"));
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//
//		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//		ChinaMobileRemoteExecute.login(key, "18868945291", "531234", br.readLine());
//
//		ChinaMobileRemoteExecute.scan(key, br.readLine());
//		 var ajaxBack = $.ajax;
//		 $.ajax = function(setting){
//		     var cb = setting.complete;
//		     setting.complete = function(){
//		         if($.isFunction(cb)){cb.apply(setting.context, arguments);}
//		         if(ajaxCount==0 && $.isFunction(allAjaxDone)){
//		             allAjaxDone();
//		         }
//		     }
//		     ajaxBack(setting);
//		 }
		Socket socket = new Socket();
		try {

			SocketAddress remoteAddr = new InetSocketAddress("127.0.0.1", 48105);
			socket.connect(remoteAddr, 3000);
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				socket.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		
	}
}
