package com.contact.util;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class PhoneSearch {
	private Scanner scan;

	public PhoneSearch() {
		scan = new Scanner(PhoneSearch.class.getResourceAsStream("/phone.dat"), "UTF-8");
	}

	public Map<String, String> search(String phone) {
		scan.reset();
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
}