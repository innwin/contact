package com.contact.controller;

import java.io.File;

import com.contact.common.Constants;
import com.contact.common.Result;
import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.ext.render.MyCaptchaRender;

import china.telecom.v3.ChinaTelecomRemoteExecute;

public class TelecomControllerV3 extends Controller {

	public void loginForm() {
		String key = this.getSession().getId();
		ChinaTelecomRemoteExecute.loginForm(key);
		render("login.jsp");
	}

	public void getVerifyCode() {
		String key = this.getSession().getId();
		Result rs = ChinaTelecomRemoteExecute.getVerifyImage(key);
		render(new MyCaptchaRender((File) rs.data));
	}

	public void sendSMS(){
		String key = this.getSession().getId();
		Result rs = ChinaTelecomRemoteExecute.sendCode(key);
		renderJson(rs);
	}
	
	@Before(MyValidator.class)
	public void login() {
		String key = this.getSession().getId();
		String phone = getPara("login");
		String pwd = getPara("pwd");
		String code = getPara("code");
		Result rs = ChinaTelecomRemoteExecute.login(key, phone, pwd, code);
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
		String key = this.getSession().getId();
		String name = getPara("name");
		String idcard = getPara("idcard");
		String code = getPara("code");
		Result rs = ChinaTelecomRemoteExecute.auth(key, name, idcard, code);
		setAttr("result", rs);
		if (rs.code != Constants.SUCCESS) {
			forwardAction("/telecom/authForm");
		} else {
			render("result.jsp");
		}
	}

}
