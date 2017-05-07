package com.contact.controller;

import java.io.File;

import com.contact.common.Constants;
import com.contact.common.Result;
import com.contact.util.SessionUtils;
import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.ext.render.MyCaptchaRender;
import com.jfinal.kit.PropKit;

import china.mobile.v3.ChinaMobileRemoteExecute;

public class MobileControllerV3 extends Controller {

	public void loginForm() {
		if(SessionUtils.getSessionCount()>=PropKit.getInt("max.count")){
			renderText("当前访问人数过多");
			return;
		}
		String key = this.getSession().getId();
		ChinaMobileRemoteExecute.loginForm(key);
		render("login.jsp");
	}

	@Before(MyValidator.class)
	public void login() {
		String key = this.getSession().getId();
		String phone = getPara("login");
		String pwd = getPara("pwd");
		Result rs = ChinaMobileRemoteExecute.login(key, phone, pwd);
		setAttr("result", rs);
		if (rs.code != Constants.SUCCESS) {
			setAttr("login", phone);
			setAttr("pwd", pwd);
			render("login.jsp");
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
		ChinaMobileRemoteExecute.authForm(key);
		render("auth.jsp");
	}

	public void getVerifyCode() {
		String key = this.getSession().getId();
		boolean refresh =Boolean.valueOf(getPara("refresh", "false")) ;
		Result rs = ChinaMobileRemoteExecute.getVerifyImage(key,refresh);
		render(new MyCaptchaRender((File) rs.data));
	}

	public void sendSMS() {
		String key = this.getSession().getId();
		Result rs = ChinaMobileRemoteExecute.sendSMS(key);
		renderJson(rs);
	}
	
	@Before(MyValidator.class)
	public void auth() {
		String key = this.getSession().getId();
		String servPwd = getPara("servPwd");
		String smsPwd = getPara("smsPwd");
		String imgCode = getPara("imgCode");
		Result rs = ChinaMobileRemoteExecute.auth(key, servPwd, smsPwd, imgCode);
		setAttr("result", rs);
		if (rs.code != Constants.SUCCESS) {
			render("auth.jsp");
		} else {
			render("result.jsp");
		}
	}

}
