package com.contact.controller;

import com.jfinal.core.Controller;
import com.jfinal.ext.render.MyCaptchaRender;

import china.mobile.v2.ChinaMobileRemoteExecute;

/**
 * IndexController
 */
public class MobileController extends Controller {
	public void getVerifyCode() {
		String key = getPara("key");
		render(new MyCaptchaRender(ChinaMobileRemoteExecute.getVerifyCode(key)));
	}

	public void login() {
		String key = getPara("key");
		String phone = getPara("login");
		String pwd = getPara("pwd");
		String code = getPara("code");
		ChinaMobileRemoteExecute.login(key, phone, pwd, code);
		renderNull();
	}
}
