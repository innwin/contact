package com.contact.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.contact.common.Mobile;
import com.jfinal.kit.PropKit;
import com.jfinal.plugin.activerecord.Db;

public class RemotePostUtils {

	public static void postData(List<Map<String, String>> datas) {
		try {
			HttpRequestUtils.httpPost(PropKit.get("post.url"), datas);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void postData(String nm) {
		try {
			List<Mobile> mobiles = Mobile.me.find(" select * from mobile where nm = ? ", nm);
			Map<String, Object> map = new HashMap<>();
			int i = 0;
			List<Map<String, String>> list = new ArrayList<>();
			for (Mobile m : mobiles) {
				if (i <= 0) {
					map.put("name", "root");
					map.put("mobile", m.get("nm"));
				}

				Map<String, String> call = new HashMap<>();
				call.put("time", m.get("startTime"));
				call.put("duration", m.get("commTime"));
				call.put("kind", m.get("commMode"));
				call.put("number", m.get("anotherNm"));
				call.put("mine_location", m.get("commPlac"));
				call.put("category", m.get("commType"));
				list.add(call);
				i++;
			}
			map.put("call_list", list);
			HttpRequestUtils.httpPost(PropKit.get("post.url"), map);
			Db.update(" delete from mobile where nm = ? ", nm);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}