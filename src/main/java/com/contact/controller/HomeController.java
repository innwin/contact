package com.contact.controller;

import com.contact.common.Mobile;
import com.contact.util.CookieUtils;
import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Page;

public class HomeController extends Controller {

	public void index() {
		render("index.jsp");
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
