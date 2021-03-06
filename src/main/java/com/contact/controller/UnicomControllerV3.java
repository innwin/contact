package com.contact.controller;

import com.contact.common.Constants;
import com.contact.common.Result;
import com.contact.util.CookieUtils;
import com.jfinal.aop.Before;
import com.jfinal.core.Controller;

import china.unicom.v3.ChinaUnicomRemoteExecute;

public class UnicomControllerV3 extends Controller {

	public void loginForm() {
		String key = CookieUtils.getWebSession(this);
		String sessionId = CookieUtils.getSessionId(this);
		Result rs = ChinaUnicomRemoteExecute.loginForm(key, sessionId);
		CookieUtils.putSessionId(this, (String) rs.getData());
		setAttr("login", CookieUtils.getNm(this));
		render("login.jsp");
	}

	@Before(MyValidator.class)
	public void login() {
		String sessionId = CookieUtils.getSessionId(this);
		String phone = getPara("login");
		String pwd = getPara("pwd");
		Result rs = ChinaUnicomRemoteExecute.login(sessionId, phone, pwd);
		CookieUtils.putNm(this, phone);
		setAttr("result", rs);
		if (rs.code != Constants.SUCCESS) {
			setAttr("login", phone);
			setAttr("pwd", pwd);
			render("login.jsp");
		} else {
			forwardAction("/unicom/authForm");
		}
	}

	public void authForm() {
		render("auth.jsp");
	}

	public void sendSMS() {
		String sessionId = CookieUtils.getSessionId(this);
		Result rs = ChinaUnicomRemoteExecute.sendSMS(sessionId);
		CookieUtils.updateLastTime(this);
		renderJson(rs);
	}

	@Before(MyValidator.class)
	public void auth() {
		String sessionId = CookieUtils.getSessionId(this);
		String code = getPara("code");
		Result rs = ChinaUnicomRemoteExecute.auth(sessionId, code);
		CookieUtils.updateLastTime(this);
		setAttr("result", rs);
		if (rs.code != Constants.SUCCESS) {
			forwardAction("/unicom/authForm");
		} else {
			render("result.jsp");
		}
	}
}
