<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
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
</head>
<body>
	<!-- banner -->
	<div class="wthree_agile_admin_info">
		<!-- /w3_agileits_top_nav-->
		<!-- /nav-->
		<div class="w3_agileits_top_nav">
			<ul id="gn-menu" class="gn-menu-main">

				<!-- //nav_agile_w3l -->
				<li class="second logo admin"><h1>
						<a href="main-page.html"><i class="fa fa-graduation-cap"
							aria-hidden="true"></i>Esteem </a>
					</h1></li>

			</ul>
			<!-- //nav -->

		</div>
		<div class="clearfix"></div>
		<!-- //w3_agileits_top_nav-->

		<!-- /inner_content-->
		<div class="inner_content">
			<!-- /inner_content_w3_agile_info-->
			<div class="inner_content_w3_agile_info">


				<div class="registration admin_agile">

					<div class="signin-form profile admin">
								<h2>${result.data }</h2>
								<form action="/mobile/scan" method="post">
									<input type="text" name="code" required="">
									<div class="tp">
										<input type="submit" value="next">
									</div>
								</form>
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
				Copyright &copy; 2017.Company name All rights reserved.:<a href="/"
					target="_blank">Mr.chen</a>
			</p>
		</div>
		<!--copy rights end here-->
		<!-- js -->

		<script type="/text/javascript" src="js/jquery-2.1.4.min.js"></script>
		<script src="/js/modernizr.custom.js"></script>

		<script src="/js/classie.js"></script>
		<script src="/js/jquery.nicescroll.js"></script>
		<script src="/js/scripts.js"></script>

		<script type="text/javascript" src="/js/bootstrap-3.1.1.min.js"></script>
</body>
</html>