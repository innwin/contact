<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en" style="background-color: #fff">
<head>
<jsp:include page="../common/_header.jsp"></jsp:include>
<jsp:include page="../common/_js.jsp"></jsp:include>
</head>

<body style="background-color: #fff">
	<div class="login-container">
		<header class="login-header-new">
			<a href="javascript:void(0)"><i class="icon-arrow-left"></i></a> <a
				href="javascript:void(0)"><div class="logo"></div></a>
		</header>
		<section class="login-section">
			<ul class="login-tabs js-tabs">
				<li class="login-tab js-tab">手机验证</li>
				<li class="login-tab js-tab selected">账号验证</li>
			</ul>
			<div class="js-tabconts">
				<div class="js-tabcont selected">
					<form action="/telecom/auth" method="post">
						<div class="login-input-group" id="login-form-mobile">

							<div class="login-input-item">
								<i class="icon-mobile"></i> <input class="login-input"
									type="text" name="name" placeholder="姓名" required="required" />
								<i class="clear"></i>
							</div>
							<div class="login-input-item">
								<i class="icon-mobile"></i> <input class="login-input"
									type="text" name="idcard" placeholder="身份证" required="required" />
								<i class="clear"></i>
							</div>
							<div class="login-input-item">
								<i class="icon-lock"></i> <input
									class="login-input login-input-dyn" type="text" name="code"
									placeholder="短信验证码" maxlength="6" /> <i
									class="clear clear-dyn"></i>
								<div class="dyn-pwd-btn"
									style="text-align: center; line-height: 30px">获取验证码</div>
							</div>
							<div id="popup-captcha"></div>
						</div>
						<button class="login-btn" id="login-btn-mobile" status="0">登录</button>
					</form>
					<p class="login-tips">${result == null ? '' : result.data }
						${error}</p>
					<p class="login-tips" id="login-tips">忘记密码如何登录？</p>
				</div>
			</div>
		</section>
		<!-- 点击“忘记密码如何登录”时显示的弹窗 -->
		<jsp:include page="../common/_forget_pwd_pop.jsp"></jsp:include>
	</div>
	<jsp:include page="../common/_bottom.jsp"></jsp:include>
	<script>
		$(function() {
			$(".dyn-pwd-btn").click(function() {
				$.ajax({
					type : "POST",
					url : "/telecom/sendSMS",
					success : function(msg) {
						$.dialog.tips("发送成功", 1)
					}
				});
			});
		});
	</script>
</body>
</html>

