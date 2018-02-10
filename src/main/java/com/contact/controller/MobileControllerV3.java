package com.contact.controller;

import com.contact.common.Constants;
import com.contact.common.Result;
import com.contact.util.CookieUtils;
import com.jfinal.aop.Before;
import com.jfinal.core.Controller;

import china.mobile.v3.ChinaMobileRemoteExecute;

public class MobileControllerV3 extends Controller {

	public void loginForm() {
		String key = CookieUtils.getWebSession(this);
		Result rs = ChinaMobileRemoteExecute.loginForm(key);
		String sessionId = (String) rs.getData();
		CookieUtils.putSessionId(this, sessionId);
		setAttr("login", CookieUtils.getNm(this));
		render("login.jsp");
	}

	@Before(MyValidator.class)
	public void login() {
		String sessionId = CookieUtils.getSessionId(this);
		String phone = getPara("login");
		String pwd = getPara("pwd");
		Result rs = ChinaMobileRemoteExecute.login(sessionId, phone, pwd);
		CookieUtils.putNm(this, phone);
		setAttr("result", rs);
		if (rs.code != Constants.SUCCESS) {
			setAttr("login", phone);
			setAttr("pwd", pwd);
			render("login.jsp");
		} else {
			forwardAction("/mobile/authForm");
		}

	}

	public void getAuthPwd() {
		String sessionId = CookieUtils.getSessionId(this);
		String phone = CookieUtils.getNm(this);
		Result rs = ChinaMobileRemoteExecute.getAuthPwd(sessionId, phone);
		CookieUtils.updateLastTime(this);
		renderJson(rs);
	}
	
	public void getLoginPwd() {
		String sessionId = CookieUtils.getSessionId(this);
		String phone = getPara("login");
		Result rs = ChinaMobileRemoteExecute.getLoginPwd(sessionId, phone);
		CookieUtils.updateLastTime(this);
		renderJson(rs);
	}

	public void authForm() {
		CookieUtils.updateLastTime(this);
		render("auth.jsp");
	}

	public void getVerifyCode() {
		String sessionId = CookieUtils.getSessionId(this);
		boolean refresh = Boolean.valueOf(getPara("refresh", "false"));
		Result rs = ChinaMobileRemoteExecute.getVerifyImage(sessionId, refresh);
		CookieUtils.updateLastTime(this);
		renderJson(rs);
//		render(new MyCaptchaRender((File) rs.data));
	}

	@Before(MyValidator.class)
	public void auth() {
		String sessionId = CookieUtils.getSessionId(this);
		String servPwd = getPara("servPwd");
		String smsPwd = getPara("smsPwd");
		String imgCode = getPara("imgCode");
		Result rs = ChinaMobileRemoteExecute.auth(sessionId, servPwd, smsPwd, imgCode);
		CookieUtils.updateLastTime(this);
		setAttr("result", rs);
		if (rs.code != Constants.SUCCESS) {
			render("auth.jsp");
		} else {
			render("result.jsp");
		}
	}

}
