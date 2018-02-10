package com.contact.util;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import org.eclipse.jetty.util.ajax.JSON;

public class PhoneSearchUtils {

	public static Map<String, String> search(String phone) {
		Scanner scan = new Scanner(PhoneSearchUtils.class.getResourceAsStream("/phone.dat"), "UTF-8");
		String mob = phone.substring(0, 7);
		while (true) {
			if (scan.hasNext() == false)
				break;
			String s = scan.nextLine();
			int start = s.indexOf(mob);
			if (start >= 0) {
				String str = s.substring(start);
				String[] arr = str.split(",");
				Map<String, String> map = new HashMap<>();
				map.put("prefix", arr[0].substring(0, 3));
				map.put("mobile", phone);
				map.put("province", arr[1]);
				map.put("city", arr[2]);
				map.put("isp", arr[3]);
				map.put("code", arr[4]);
				map.put("zipcode", arr[5]);
				map.put("types", arr[6]);
				return map;
			}
		}
		return Collections.EMPTY_MAP;
	}

	public static void main(String[] args) {
		System.out.println(JSON.toString(PhoneSearchUtils.search("18868945291")));
		System.out.println(JSON.toString(PhoneSearchUtils.search("18868945291")));
	}
}