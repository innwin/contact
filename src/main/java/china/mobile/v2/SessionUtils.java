package china.mobile.v2;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import com.contact.common.Result;

public class SessionUtils {
	private static Map<String, String> map = new ConcurrentHashMap<>();
	
	private static Map<String, Integer> mapNext = new ConcurrentHashMap<>();
	
	public static Map<String, Result> data = new ConcurrentHashMap<>();
	
	public static String get(String key){
		return map.get(key);
	}
	
	public static void put(String key,String val){
		map.put(key, val);
	}
	public static Integer getState(String key){
		return mapNext.get(key);
	}
	public static void putState(String key,Integer val){
		mapNext.put(key, val);
	}
	public static void remove(String key){
		map.remove(key);
	}
	
	public static void removeState(String key){
		mapNext.remove(key);
	}
	
}
