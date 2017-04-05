package china.mobile.v2;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class SessionUtils {
	private static Map<String, String> map = new ConcurrentHashMap<>();
	
	public static String get(String key){
		return map.get(key);
	}
	
	public static void put(String key,String val){
		map.put(key, val);
	}
	public static void remove(String key){
		map.remove(key);
	}
	
}
