<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script type="text/javascript" language="javascript">
	$(function() {
		window.byMe = false;
		$(window).unload(function() {
			if (window.byMe) {
				return;
			}
			$.ajax({
				type : "POST",
				url : "/close",
				success : function(msg) {
					$.dialog.tips("发送成功", 1)
				}
			});
		});
	})
</script>