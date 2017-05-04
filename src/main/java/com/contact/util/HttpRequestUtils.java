package com.contact.util;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;
import org.eclipse.jetty.util.ajax.JSON;

public class HttpRequestUtils {

	public static String httpPost(String url, Map<String, Object> map) {
		DefaultHttpClient httpClient = new DefaultHttpClient();
		HttpPost method = new HttpPost(url);
		try {
			if (null != map) {
				 StringEntity entity = new  StringEntity(JSON.toString(map), "utf-8");
				 entity.setContentEncoding("UTF-8");
				 entity.setContentType("application/json");
				 method.setEntity(entity);
//				List<NameValuePair> params = new ArrayList<NameValuePair>();
//				for (Entry<String, String> kv : map.entrySet()) {
//					params.add(new BasicNameValuePair(kv.getKey(), kv.getValue()));
//				}
//				method.setEntity(new UrlEncodedFormEntity(params, HTTP.UTF_8));

			}
			HttpResponse result = httpClient.execute(method);
			// url = URLDecoder.decode(url, "UTF-8");
			if (result.getStatusLine().getStatusCode() == 200) {
				String str = "";
				try {
					str = EntityUtils.toString(result.getEntity());
					return str;
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

	public static String httpGet(String url) {
		try {
			DefaultHttpClient client = new DefaultHttpClient();
			HttpGet request = new HttpGet(url);
			HttpResponse response = client.execute(request);

			if (response.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
				String strResult = EntityUtils.toString(response.getEntity());
				return strResult;
			}

		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

	public static String httpPut(String url, Map<String, String> map) {
		DefaultHttpClient httpClient = new DefaultHttpClient();
		HttpPut method = new HttpPut(url);
		try {
			if (null != map) {
				List<NameValuePair> params = new ArrayList<NameValuePair>();
				for (Entry<String, String> kv : map.entrySet()) {
					params.add(new BasicNameValuePair(kv.getKey(), kv.getValue()));
				}
				method.setEntity(new UrlEncodedFormEntity(params, HTTP.UTF_8));

			}
			HttpResponse result = httpClient.execute(method);
			if (result.getStatusLine().getStatusCode() == 200) {
				try {
					return EntityUtils.toString(result.getEntity());
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

	public static String httpDelete(String url) {
		DefaultHttpClient httpClient = new DefaultHttpClient();
		HttpDelete method = new HttpDelete(url);
		try {

			HttpResponse result = httpClient.execute(method);
			if (result.getStatusLine().getStatusCode() == 200) {
				try {
					return EntityUtils.toString(result.getEntity());
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

}