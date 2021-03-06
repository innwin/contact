package com.contact.controller;

import com.contact.common.Constants;
import com.contact.common.Result;
import com.contact.util.CookieUtils;
import com.jfinal.aop.Before;
import com.jfinal.core.Controller;

import china.telecom.v3.ChinaTelecomRemoteExecute;

public class TelecomControllerV3 extends Controller {

	public void loginForm() {
		String key = CookieUtils.getWebSession(this);
		String sessionId = CookieUtils.getSessionId(this);
		Result rs = ChinaTelecomRemoteExecute.loginForm(key, sessionId);
		CookieUtils.putSessionId(this, (String) rs.getData());
		setAttr("login", CookieUtils.getNm(this));
		render("login.jsp");
	}

	public void getVerifyImage() {
		String sessionId = CookieUtils.getSessionId(this);
		Result rs = ChinaTelecomRemoteExecute.getLoginVerifyImage(sessionId);
		CookieUtils.updateLastTime(this);
		renderJson(rs);
		// render(new MyCaptchaRender((File) rs.data));
	}

	@Before(MyValidator.class)
	public void login() {
		String sessionId = CookieUtils.getSessionId(this);
		String phone = getPara("login");
		String pwd = getPara("pwd");
		String code = getPara("code");
		Result rs = ChinaTelecomRemoteExecute.login(sessionId, phone, pwd, code);
		CookieUtils.putNm(this, phone);
		setAttr("result", rs);
		if (rs.code != Constants.SUCCESS) {
			setAttr("login", phone);
			setAttr("pwd", pwd);
			render("login.jsp");
		} else {
			render("result.jsp");
		}
	}

}
