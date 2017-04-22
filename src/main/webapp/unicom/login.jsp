<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<html lang="zxx">
<head>
<title>Admin Login</title>
<!-- custom-theme -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="" />
<!-- //custom-theme -->
<link href="/css/bootstrap.css" rel="stylesheet" type="text/css"
	media="all" />
<link href="/css/component.css" rel="stylesheet" type="text/css"
	media="all" />
<link href="/css/style_grid.css" rel="stylesheet" type="text/css"
	media="all" />
<link href="/css/style.css" rel="stylesheet" type="text/css" media="all" />
<!-- font-awesome-icons -->
<link href="/css/font-awesome.css" rel="stylesheet">
<!-- //font-awesome-icons -->
<link
	href="http://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800"
	rel="stylesheet">
</head>
<body>
	<!-- banner -->
	<div class="wthree_agile_admin_info">
		<!-- /w3_agileits_top_nav-->
		<!-- /nav-->
		<div class="w3_agileits_top_nav"></div>
		<div class="clearfix"></div>
		<!-- //w3_agileits_top_nav-->

		<!-- /inner_content-->
		<div class="inner_content">
			<!-- /inner_content_w3_agile_info-->
			<div class="inner_content_w3_agile_info">


				<div class="registration admin_agile">

					<div class="signin-form profile admin">
						<h2>${result == null ? '' : result.data }</h2>
						<div class="login-form">
							<form action="/unicom/login" method="post">
								<input type="text" id="login" name="login" placeholder="手机号码" required="required"> 
								<input type="text" name="pwd" placeholder="服务密码" required="required">
								<div class="tp">
									<input type="submit" value="登陆">
								</div>
							</form>
						</div>
					</div>
				</div>
				<!-- //inner_content_w3_agile_info-->
			</div>
			<!-- //inner_content-->
		</div>
		<!-- banner -->
		<!--copy rights start here-->
		<div class="copyrights">
			<p>
				Copyright &copy; 2017.Company name All rights reserved.<a
					href="http://www.mycodes.net/" target="_blank">Mr.chen</a>
			</p>
		</div>
		<!--copy rights end here-->
		<!-- js -->

		<script type="text/javascript" src="/js/jquery-2.1.4.min.js"></script>
		<script src="/js/modernizr.custom.js"></script>

		<script src="/js/classie.js"></script>
		<script src="/js/jquery.nicescroll.js"></script>
		<script src="/js/scripts.js"></script>

		<script type="text/javascript" src="/js/bootstrap-3.1.1.min.js"></script>
</body>
</html>