<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<html lang="zxx">
<head>
<title>Tables</title>
<!-- custom-theme -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="" />
<!-- //custom-theme -->
<link href="/css/bootstrap.css" rel="stylesheet" type="text/css"
	media="all" />
<link rel="stylesheet" type="text/css" href="/css/table-style.css" />
<link rel="stylesheet" type="text/css" href="/css/basictable.css" />
<link href="/css/component.css" rel="stylesheet" type="text/css"
	media="all" />
<link href="/css/style_grid.css" rel="stylesheet" type="text/css"
	media="all" />
<link href="/css/style.css" rel="stylesheet" type="text/css" media="all" />
<!-- font-awesome-icons -->
<link href="css/font-awesome.css" rel="stylesheet">
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
		<div class="w3_agileits_top_nav">
			<!-- //nav -->

		</div>
		<div class="clearfix"></div>
		<!-- //w3_agileits_top_nav-->

		<!-- /inner_content-->
		<div class="inner_content">

			<div class="inner_content_w3_agile_info two_in">
				<h2 class="w3_inner_tittle">请选择</h2>
				<!-- tables -->

				<div class="agile-tables">
					<div class="w3l-table-info agile_info_shadow">
						<h3 class="w3_inner_tittle two">运营商</h3>
						<table id="table">
							<tbody>
									<tr>
										<td><a href="/mobile/loginForm">中国移动</a></td>
										<td><a href="/unicom/loginForm">中国联通</a></td>
										<td><a href="/telecom/loginForm">中国电信</a></td>
									</tr>
							</tbody>
						</table>
					</div>
					<div class="clearfix"></div>

				</div>
				<!-- //social_media-->
			</div>
			<!-- //inner_content_w3_agile_info-->
		</div>
		<!-- //inner_content-->
		<!--copy rights start here-->
		<div class="copyrights">
			<p>
				Copyright &copy; 2017.Company name All rights reserved. <a
					href="http://www.mycodes.net/" target="_blank">Mr.chen</a>
			</p>
		</div>
		<!--copy rights end here-->
		<!-- js -->

		<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
		<script src="js/modernizr.custom.js"></script>

		<script src="js/classie.js"></script>

		<script type="text/javascript" src="/js/jquery.basictable.min.js"></script>
		<script type="text/javascript">
			$(document).ready(function() {
				$('#table').basictable();
			});
		</script>
		<script src="/js/jquery.nicescroll.js"></script>
		<script src="/js/scripts.js"></script>

		<script type="text/javascript" src="/js/bootstrap-3.1.1.min.js"></script>
</body>
</html>