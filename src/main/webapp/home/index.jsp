<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en" style="background-color: #fff">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="">
<meta name="format-detection" content="telephone=no">
<title></title>
<meta name="keywords" content="">
<meta name="description" content="">
<link rel="stylesheet" href="/css/mobile.css">
<script src="/js/jquery.js"></script>
<!--[if lt IE 9]>
<script src="http://lapp.xinli001.com/jsmin/html5.min.js" ></script><![endif]-->
<style type="text/css">
.login-tips {
	padding-top: .625rem;
	padding-left: .375rem;
	padding-bottom: .3125rem;
	font-size: .40625rem;
	color: #139DE8;
	z-index: 100;
}
</style>
</head>

<body style="background-color: #fff">
	<div class="login-container">
		<header class="login-header-new">
			<a href="javascript:void(0)"><i class="icon-arrow-left"></i></a> <a
				href="javascript:void(0)"><div class="logo"></div></a>
		</header>
		<section class="login-section" style="margin-top: 50px">
			<ul class="login-tabs js-tabs">
				<li class="login-tab js-tab selected" style="width: 33.3%;"><a
					href="/mobile/loginForm">中国移动</a></li>
				<li class="login-tab js-tab selected" style="width: 33.3%;"><a
					href="/unicom/loginForm">中国联通</a></li>
				<li class="login-tab js-tab selected" style="width: 33.3%;"><a
					href="/telecom/loginForm">中国电信</a></li>
			</ul>
			<p class="login-tips" id="login-tips">忘记密码如何登录？</p>
		</section>
		<!-- 点击“忘记密码如何登录”时显示的弹窗 -->
		<section class="forget-pwd-pop">
			<div class="forget-pwd-mask"></div>
			<div class="forget-pwd-content">
				<h1 class="forget-pwd-title">忘记密码</h1>
				<p class="txt">
					<strong>手机号</strong>用户可使用「手机号+验证码」登录；
				</p>
				<p class="txt">
					<strong>邮箱账号</strong>用户可在电脑上登录壹心理网站找回密码。
				</p>
				<div class="ok">我知道了</div>
			</div>
		</section>
	</div>

</body>
<script>
	$(function() {
		var c = $("#login-tips"), d = $(".forget-pwd-pop"), u = d.find(".ok");
		c.on("click", function() {
			d.fadeIn()
		}), u.on("click", function() {
			d.fadeOut()
		})
	});
</script>
</html>

