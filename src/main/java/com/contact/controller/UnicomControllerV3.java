package com.contact.controller;

import com.contact.common.Constants;
import com.contact.common.Result;
import com.jfinal.core.Controller;

import china.unicom.v3.ChinaUnicomRemoteExecute;

public class UnicomControllerV3 extends Controller {

	public void loginForm() {
		String key = this.getSession().getId();
		ChinaUnicomRemoteExecute.loginForm(key);
		render("login.jsp");
	}

	public void login() {
		String key = this.getSession().getId();
		String phone = getPara("login");
		String pwd = getPara("pwd");
		Result rs = ChinaUnicomRemoteExecute.login(key, phone, pwd);
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
		String key = this.getSession().getId();
		Result rs = ChinaUnicomRemoteExecute.sendSMS(key);
		renderJson(rs);
	}

	public void auth() {
		String key = this.getSession().getId();
		String code = getPara("code");
		Result rs = ChinaUnicomRemoteExecute.auth(key, code);
		setAttr("result", rs);
		if (rs.code != Constants.SUCCESS) {
			forwardAction("/unicom/authForm");
		} else {
			render("result.jsp");
		}
	}
}
