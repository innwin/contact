<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en" style="background-color: #fff">
<head>
<jsp:include page="../common/_header.jsp"></jsp:include>
</head>

<body style="background-color: #fff">
	<div class="login-container">
		<header class="login-header-new">
			<a href="javascript:void(0)"><i class="icon-arrow-left"></i></a> <a
				href="javascript:void(0)"><div class="logo"></div></a>
		</header>
		<section class="login-section">
			<ul class="login-tabs js-tabs">
				<li class="login-tab js-tab selected">手机验证</li>
				<li class="login-tab js-tab">账号验证</li>
			</ul>
			<div class="js-tabconts">
				<div class="js-tabcont selected">
					<form action="/home/home" method="post">
						<div class="login-input-group" id="login-form-mobile">

							<div class="login-input-item">
								<i class="icon-mobile"></i> <input class="login-input"
									value="${login}" type="tel" id="login" name="login"
									placeholder="手机号码" required="required" /> <i class="clear"></i>
							</div>
							<div id="popup-captcha"></div>
						</div>
						<div class="login-btn" id="login-btn-mobile" status="0">go</div>
					</form>
					<p class="login-tips">${result == null ? '' : result.data }
						${error}</p>
					<p class="login-tips" id="login-tips">忘记密码如何登录？</p>
				</div>
			</div>
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
	<jsp:include page="../common/_bottom.jsp"></jsp:include>
</body>
</html>

