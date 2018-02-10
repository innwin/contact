package com.contact.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.eclipse.jetty.util.ajax.JSON;

import com.contact.common.Mobile;
import com.jfinal.kit.PropKit;
import com.jfinal.plugin.activerecord.Db;

class Filter {
	List<Map<String, String>> data = new ArrayList<>();

	public Filter(List<Map<String, String>> data) {
		this.data = data;
	}

	public Filter least(int month) {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.MONTH, -month);
		List<Map<String, String>> outData = new ArrayList<>();
		for (Map<String, String> ele : data) {
			try {
				Date date = simpleDateFormat.parse(ele.get("startTime"));
				boolean isBefore = calendar.getTime().before(date);
				if (isBefore) {
					outData.add(ele);
				}
			} catch (ParseException e) {
				e.printStackTrace();
			}
		}
		return new Filter(outData);
	}

	public Set<String> commPlac() {
		Set<String> outData = new HashSet<>();
		for (Map<String, String> ele : data) {
			try {
				outData.add(ele.get("commPlac"));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return outData;
	}

	public Set<String> leastTen() {
		Map<String, Integer> tmp = new HashMap<>();
		Set<String> outData = new HashSet<>();
		for (Map<String, String> ele : data) {
			try {
				Integer i = tmp.get(ele.get("anotherNm"));
				if (i == null) {
					tmp.put(ele.get("anotherNm"), 1);
				} else {
					tmp.put(ele.get("anotherNm"), i + 1);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		for (Entry<String, Integer> kv : tmp.entrySet()) {
			if (kv.getValue() >= 10) {
				outData.add(kv.getKey());
			}
		}
		return outData;
	}

	public Integer eachOther() {
		Map<String, Set<String>> tmp = new HashMap<>();
		Set<String> outData = new HashSet<>();
		for (Map<String, String> ele : data) {
			try {
				Set<String> s = tmp.get(ele.get("anotherNm"));
				if (s == null) {
					s = new HashSet<>();
					s.add(ele.get("commType"));
					tmp.put(ele.get("anotherNm"), s);
				} else {
					s.add(ele.get("commType"));
					tmp.put(ele.get("anotherNm"), s);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		for (Entry<String, Set<String>> kv : tmp.entrySet()) {
			if (kv.getValue().size() > 1) {
				outData.add(kv.getKey());
			}
		}
		return outData.size();
	}

	public Integer sameCommPlac() {
		Integer i = 0;
		if (data.size() > 0) {
			String city = PhoneSearchUtils.search(data.get(0).get("nm")).get("city");
			for (Map<String, String> ele : data) {
				if (StringUtils.isNotEmpty(city) && city.equals(ele.get("commPlac"))) {
					i++;
				}
			}
		}
		return i;
	}

}

public class SaveDataUtils {

	public static void saveData(Map<String, ?> userInfo, List<Map<String, String>> data) {
		List<Mobile> mobiles = new ArrayList<>();
		for (Map<String, String> m : data) {
			Mobile mobile = new Mobile().set("nm", m.get("nm"))// .set("commMode", m.get(commMode))
					.set("commPlac", m.get("commPlac")).set("commType", m.get("commType"))
					.set("commTime", m.get("commTime"))
					// .set("remark", remark)
					.set("startTime", m.get("startTime")).set("anotherNm", m.get("anotherNm"));
			mobiles.add(mobile);
		}

		Db.batch("insert into mobile(nm,commType,commPlac,commTime,startTime,anotherNm) values(?,?,?,?,?,?)",
				"nm,commType,commPlac,commTime,startTime,anotherNm", mobiles, data.size());

		// save DB
		Map<String, Object> dbData = new HashMap<>();
		dbData.put("userInfo", userInfo);
		for (int i : Arrays.asList(3, 6)) {
			Filter filter = new Filter(data).least(i);
			dbData.put("least" + i + "CommPlac", filter.commPlac());
			dbData.put("least" + i + "LeastTen", filter.leastTen());
			dbData.put("least" + i + "EachOther", filter.eachOther());
			dbData.put("least" + i + "SameCommPlac", filter.sameCommPlac());
		}
		if (dbData.size() > 0) {
			Db.update("insert into `mobile_detail`(phoneNumber,detailReportSrc,reportTime) values(?,?,?)",
					data.get(0).get("nm"), JSON.toString(dbData), Calendar.getInstance().getTime());
		}
		System.out.printf("%s data: %s ", JSON.toString(dbData),
				new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
	}

	public static void saveData(List<Map<String, String>> data) {
		// Pattern pattern = Pattern
		// .compile("^([hH][tT]{2}[pP]://|[hH][tT]{2}[pP][sS]://)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\\/])+$");
		// String url = PropKit.get("post.url");
		// if (pattern.matcher(url).matches()) {
		// try {
		// HttpRequestUtils.httpPost(url, datas);
		// } catch (Exception e) {
		// e.printStackTrace();
		// }
		// } else {
		// System.out.printf("%s data: %s ", JSON.toString(datas),
		// new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		// }

		List<Mobile> mobiles = new ArrayList<>();
		for (Map<String, String> m : data) {
			Mobile mobile = new Mobile().set("nm", m.get("nm"))// .set("commMode", m.get(commMode))
					.set("commPlac", m.get("commPlac")).set("commType", m.get("commType"))
					.set("commTime", m.get("commTime"))
					// .set("remark", remark)
					.set("startTime", m.get("startTime")).set("anotherNm", m.get("anotherNm"));
			mobiles.add(mobile);
		}

		Db.batch("insert into mobile(nm,commType,commPlac,commTime,startTime,anotherNm) values(?,?,?,?,?,?)",
				"nm,commType,commPlac,commTime,startTime,anotherNm", mobiles, data.size());

		// save DB
		Map<String, Object> dbData = new HashMap<>();
		for (int i : Arrays.asList(3, 6)) {
			Filter filter = new Filter(data).least(i);
			dbData.put("least" + i + "CommPlac", filter.commPlac());
			dbData.put("least" + i + "LeastTen", filter.leastTen());
			dbData.put("least" + i + "EachOther", filter.eachOther());
			dbData.put("least" + i + "SameCommPlac", filter.sameCommPlac());
		}
		if (dbData.size() > 0) {
			Db.update("insert into `mobile_detail`(phoneNumber,detailReportSrc,reportTime) values(?,?,?)",
					data.get(0).get("nm"), JSON.toString(dbData), Calendar.getInstance().getTime());
		}
		System.out.printf("%s data: %s ", JSON.toString(dbData),
				new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
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