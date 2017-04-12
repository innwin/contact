package com.contact.controller;

import java.io.File;

import com.contact.common.Result;
import com.jfinal.core.Controller;
import com.jfinal.ext.render.MyCaptchaRender;

import china.mobile.v3.ChinaMobileRemoteExecute;
import china.mobile.v3.Constants;

/**
 * IndexController
 */

// http://localhost:8080/getVerifyCode?key=18868945291
// http://localhost:8080/login?key=18868945291&login=18868945291&pwd=531234&code=tkgda
// http://localhost:8080/scan?key=18868945291&&code=576055
public class MobileControllerV3 extends Controller {

	public void loginForm() {
		String key = this.getSession().getId();
		ChinaMobileRemoteExecute.loginForm(key);
		render("login.jsp");
	}

	public void login() {
		String key = this.getSession().getId();
		String phone = getPara("login");
		String pwd = getPara("pwd");
		Result rs = ChinaMobileRemoteExecute.login(key, phone, pwd);
		setAttr("result", rs);
		if (rs.code != Constants.SUCCESS) {
			setAttr("login", phone);
			setAttr("pwd", pwd);
			forwardAction("/mobile/loginForm");
		} else {
			forwardAction("/mobile/authForm");
		}

	}

	public void getSMSCode() {
		String key = this.getSession().getId();
		String phone = getPara("login");
		Result rs = ChinaMobileRemoteExecute.getSMSPwd(key, phone);
		renderJson(rs);
	}

	public void authForm() {
		String key = this.getSession().getId();
		Result rs = ChinaMobileRemoteExecute.authForm(key);
		setAttr("result", rs);
		if (rs.code != Constants.SUCCESS) {
			forwardAction("/mobile/authForm");
		} else {
			render("auth.jsp");
		}
	}

	public void getVerifyCode() {
		String key = this.getSession().getId();
		Result rs = ChinaMobileRemoteExecute.getVerifyImage(key);
		render(new MyCaptchaRender((File) rs.data));
	}

	public void sendSMS() {
		String key = this.getSession().getId();
		Result rs = ChinaMobileRemoteExecute.sendSMS(key);
		renderJson(rs);
	}

	public void auth() {
		String key = this.getSession().getId();
		String servPwd = getPara("servPwd");
		String smsPwd = getPara("smsPwd");
		String imgCode = getPara("imgCode");
		Result rs = ChinaMobileRemoteExecute.auth(key, servPwd, smsPwd, imgCode);
		setAttr("result", rs);
		if (rs.code != Constants.SUCCESS) {
			forwardAction("/mobile/authForm");
		} else {
			render("result.jsp");
		}
	}

}
