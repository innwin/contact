package com.contact.common;

import com.contact.controller.HomeController;
import com.contact.controller.MobileControllerV3;
import com.contact.controller.TelecomControllerV3;
import com.contact.controller.UnicomControllerV3;
import com.contact.util.MyPropKit;
import com.jfinal.config.Constants;
import com.jfinal.config.Handlers;
import com.jfinal.config.Interceptors;
import com.jfinal.config.JFinalConfig;
import com.jfinal.config.Plugins;
import com.jfinal.config.Routes;
import com.jfinal.core.JFinal;
import com.jfinal.kit.PropKit;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.c3p0.C3p0Plugin;
import com.jfinal.plugin.task.TaskPlugin;
import com.jfinal.render.ViewType;

/**
 * API引导式配置
 */
public class MyJfinalConfig extends JFinalConfig {

	/**
	 * 配置常量
	 */
	public void configConstant(Constants me) {
		System.setProperty("phantomjs.binary.path", "/usr/bin/phantomjs");
		// 加载少量必要配置，随后可用PropKit.get(...)获取值
		PropKit.use("a_little_config.txt");
		MyPropKit.use("my_config.txt");
		me.setDevMode(PropKit.getBoolean("devMode", false));
		me.setViewType(ViewType.JSP);
	}

	/**
	 * 配置路由
	 */
	public void configRoute(Routes me) {
		me.add("/mobile", MobileControllerV3.class); // 第三个参数为该Controller的视图存放路径
		me.add("/unicom", UnicomControllerV3.class);
		me.add("/telecom", TelecomControllerV3.class);
		me.add("/", HomeController.class, "/home");
	}

	/**
	 * 配置插件
	 */
	public void configPlugin(Plugins me) {
		TaskPlugin taskPlugin = new TaskPlugin();
		me.add(taskPlugin);
		C3p0Plugin c3p0Plugin = new C3p0Plugin(PropKit.get("jdbcUrl"), PropKit.get("user"),
				PropKit.get("password").trim());
		me.add(c3p0Plugin);
		ActiveRecordPlugin arp = new ActiveRecordPlugin(c3p0Plugin);
		me.add(arp);
		arp.addMapping("mobile", Mobile.class); // 映射blog 表到 Blog模型
	}

	/**
	 * 配置全局拦截器
	 */
	public void configInterceptor(Interceptors me) {

	}

	/**
	 * 配置处理器
	 */
	public void configHandler(Handlers me) {

	}

	/**
	 * 建议使用 JFinal 手册推荐的方式启动项目 运行此 main 方法可以启动项目，此main方法可以放置在任意的Class类定义中，不一定要放于此
	 */
	public static void main(String[] args) {
		JFinal.start("webapp", 8080, "/", 5);
	}

}
