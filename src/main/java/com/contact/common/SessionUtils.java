package com.contact.common;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class SessionUtils {
	private static Map<String, String> mapSessionId = new ConcurrentHashMap<>();
	
	private static Map<String, Integer> mapNext = new ConcurrentHashMap<>();
	
	private static Map<String, String> mapPhone = new ConcurrentHashMap<>();
	
	public static Map<String, Result> data = new ConcurrentHashMap<>();
	
	public static String getPhone(String key){
		return mapPhone.get(key);
	}
	
	public static void putPhone(String key,String val){
		mapPhone.put(key, val);
	}
	
	public static String getSessionId(String key){
		return mapSessionId.get(key);
	}
	
	public static void putSessionId(String key,String val){
		mapSessionId.put(key, val);
	}
	public static Integer getState(String key){
		return mapNext.get(key);
	}
	public static void putState(String key,Integer val){
		mapNext.put(key, val);
	}
	public static void removeSessionId(String key){
		mapSessionId.remove(key);
	}
	
	public static void removeState(String key){
		mapNext.remove(key);
	}
	
}
