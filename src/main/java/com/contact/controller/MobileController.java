package com.contact.controller;

import java.util.ArrayList;
import java.util.List;

import com.jfinal.core.Controller;
import com.jfinal.ext.render.MyCaptchaRender;

import china.mobile.v2.ChinaMobileRemoteExecute;
import china.mobile.v2.Result;

/**
 * IndexController
 */

// http://localhost:8080/getVerifyCode?key=18868945291
// http://localhost:8080/login?key=18868945291&login=18868945291&pwd=531234&code=tkgda
// http://localhost:8080/scan?key=18868945291&&code=576055
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
		Result rs = ChinaMobileRemoteExecute.login(key, phone, pwd, code);
		renderJson(rs);
	}

	public void scan() {
		String key = getPara("key");
		String code = getPara("code");
		Result rs = ChinaMobileRemoteExecute.scan(key, code);
		renderJson(rs);
	}
}
