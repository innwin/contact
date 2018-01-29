<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script>
	$(function() {
		$("#login-btn-mobile").click(function() {
			window.byMe = true;
			$("form").submit();
		})
	});
	$(function() {
		var c = $("#login-tips"), d = $(".forget-pwd-pop"), u = d.find(".ok");
		c.on("click", function() {
			d.fadeIn()
		}), u.on("click", function() {
			d.fadeOut()
		})
	});
</script>