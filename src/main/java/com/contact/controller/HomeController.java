package com.contact.controller;

import java.net.URLEncoder;

import com.contact.common.Mobile;
import com.contact.util.CookieUtils;
import com.contact.util.PhoneSearchUtils;
import com.jfinal.core.Controller;
import com.jfinal.kit.PropKit;
import com.jfinal.plugin.activerecord.Page;

public class HomeController extends Controller {

	public void index() {
		setAttr("login", CookieUtils.getNm(this));
		render("index.jsp");
	}

	public void home() {
		String phone = getPara("login");
		CookieUtils.putNm(this, phone);
		String isp = PhoneSearchUtils.search(phone).get("isp");
		;
		if (PropKit.get("mobile.type").equals(isp)) {
			redirect("/mobile/loginForm");
		} else if (PropKit.get("telecom.type").equals(isp)) {
			redirect("/telecom/loginForm");
		} else if (PropKit.get("unicom.type").equals(isp)) {
			redirect("/unicom/loginForm");
		} else {
			renderJson("{ code: 500 , data: \" phone number is error \" }");
		}
	}

	public void logs() {
		String phone = getPara("phone");
		String where = "";
		if (phone != null) {
			where = " where nm=" + phone;
		}
		Page<Mobile> list = Mobile.me.paginate(getParaToInt(0, 1), 10, " select * ",
				"from mobile " + where + " order by id asc");
		setAttr("list", list);
		render("logs.jsp");
	}

	public void close() {
		CookieUtils.cleanSession(CookieUtils.getSessionId(this));
		renderJson();
	}
}
