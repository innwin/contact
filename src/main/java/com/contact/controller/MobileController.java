package com.contact.controller;

import com.contact.common.Result;
import com.jfinal.core.Controller;
import com.jfinal.ext.render.MyCaptchaRender;

import china.mobile.v2.ChinaMobileRemoteExecute;
import china.mobile.v2.Constants;
import china.mobile.v2.SessionUtils;

/**
 * IndexController
 */

// http://localhost:8080/getVerifyCode?key=18868945291
// http://localhost:8080/login?key=18868945291&login=18868945291&pwd=531234&code=tkgda
// http://localhost:8080/scan?key=18868945291&&code=576055
public class MobileController extends Controller {

	public void loginForm() {
		render("login.jsp");
	}

	public void getVerifyCode() {
		String key = this.getSession().getId();
		render(new MyCaptchaRender(ChinaMobileRemoteExecute.getVerifyCode(key)));
	}

	public void login() {
		String key = this.getSession().getId();
		String phone = getPara("login");
		String pwd = getPara("pwd");
		String code = getPara("code");
		Result rs = ChinaMobileRemoteExecute.login(key, phone, pwd, code);
		setAttr("result", rs);
		if(rs.code != Constants.SUCCESS){
			setAttr("login", phone);
			setAttr("pwd", pwd);
			setAttr("code", code);
			render("login.jsp");
		}else{
			render("next.jsp");
		}

	}
	
	public void scan() {
		String key = this.getSession().getId();
		String code = getPara("code");
		Result rs = ChinaMobileRemoteExecute.scan(key, code);
		this.setAttr("result", rs);
		if(rs.code == Constants.SUCCESS){
			render("result.jsp");
		}else if(rs.code == Constants.NEEDLOGIN || rs.code == Constants.SYSTEMERROR){
			render("login.jsp");
		}else{
			render("next.jsp");
		}
		
	}
	
	public void result() {
		String key = this.getSession().getId();
		Result rs = SessionUtils.data.get(key);
		if(rs == null){
			rs = new Result(500,"in process");
		}
		this.setAttr("result", rs);
		render("resulttmp.jsp");
		
	}

}
