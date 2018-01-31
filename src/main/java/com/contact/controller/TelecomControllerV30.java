package com.contact.controller;

import java.io.File;

import com.contact.common.Constants;
import com.contact.common.Result;
import com.contact.util.CookieUtils;
import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.ext.render.MyCaptchaRender;

import china.telecom.v3.ChinaTelecomRemoteExecute0;

public class TelecomControllerV30 extends Controller {

	public void loginForm() {
		String key = CookieUtils.getWebSession(this);
		String sessionId = CookieUtils.getSessionId(this);
		Result rs = ChinaTelecomRemoteExecute0.loginForm(key, sessionId);
		CookieUtils.putSessionId(this, (String) rs.getData());
		render("login.jsp");
	}

	public void getVerifyCode() {
		String sessionId = CookieUtils.getSessionId(this);
		Result rs = ChinaTelecomRemoteExecute0.getVerifyImage(sessionId);
		CookieUtils.updateLastTime(this);
		render(new MyCaptchaRender((File) rs.data));
	}

	public void sendSMS() {
		String sessionId = CookieUtils.getSessionId(this);
		Result rs = ChinaTelecomRemoteExecute0.sendCode(sessionId);
		CookieUtils.updateLastTime(this);
		renderJson(rs);
	}

	@Before(MyValidator.class)
	public void login() {
		String sessionId = CookieUtils.getSessionId(this);
		String phone = getPara("login");
		String pwd = getPara("pwd");
		String code = getPara("code");
		Result rs = ChinaTelecomRemoteExecute0.login(sessionId, phone, pwd, code);
		CookieUtils.putNm(this, phone);
		setAttr("result", rs);
		if (rs.code != Constants.SUCCESS) {
			setAttr("login", phone);
			setAttr("pwd", pwd);
			render("login.jsp");
		} else {
			forwardAction("/telecom/authForm");
		}
	}

	public void authForm() {
		render("auth.jsp");
	}

	@Before(MyValidator.class)
	public void auth() {
		String sessionId = CookieUtils.getSessionId(this);
		String name = getPara("name");
		String idcard = getPara("idcard");
		String code = getPara("code");
		Result rs = ChinaTelecomRemoteExecute0.auth(sessionId, name, idcard, code);
		CookieUtils.updateLastTime(this);
		setAttr("result", rs);
		if (rs.code != Constants.SUCCESS) {
			forwardAction("/telecom/authForm");
		} else {
			render("result.jsp");
		}
	}

}
