package com.contact.controller;

import com.jfinal.core.Controller;
import com.jfinal.validate.Validator;

/**
 * BlogValidator.
 */
public class MyValidator extends Validator {

	protected void validate(Controller controller) {
		String actionKey = getActionKey();
		if (actionKey.equals("/mobile/login")) {
			validateRegex("login", "^1[34578]\\d{9}$", false, "error", "输入错误!");
			validateRegex("pwd", "^\\d{6}$", false, "error", "输入错误!");
		}
		if (actionKey.equals("/mobile/auth")) {
			validateRegex("servPwd", "^\\d{6}$", false, "error", "输入错误!");
			validateRegex("smsPwd", "^\\d{6}$", false, "error", "输入错误!");
			validateRegex("imgCode", "^.{6}$", false, "error", "输入错误!");
		}
		if (actionKey.equals("/telecom/login")) {
			validateRegex("login", "^1[34578]\\d{9}$", false, "error", "输入错误!");
			validateRegex("pwd", "^\\d{6}$", false, "error", "输入错误!");
			validateRegex("code", "^.{4}$", false, "error", "输入错误!");
		}
		if (actionKey.equals("/telecom/auth")) {
			validateRequired("name", "error", "输入错误!");
			validateRegex("idcard", "^(\\d{15}$|^\\d{18}$|^\\d{17}(\\d|X|x))$", false, "error", "输入错误!");
			validateRegex("code", "^\\d{6}$", false, "error", "输入错误!");
		}
		if (actionKey.equals("/unicom/login")) {
			validateRegex("login", "^1[34578]\\d{9}$", false, "error", "输入错误!");
			validateRegex("pwd", "^\\d{6}$", false, "error", "输入错误!");
		}
		if (actionKey.equals("/telecom/auth")) {
			validateRegex("code", "^.{6}$", false, "error", "输入错误!");
		}
	}

	protected void handleError(Controller controller) {
		controller.keepPara();
		String actionKey = getActionKey();

		if (actionKey.indexOf("login") != -1)
			controller.render("login.jsp");
		else if (actionKey.indexOf("auth") != -1)
			controller.render("auth.jsp");

	}
}
