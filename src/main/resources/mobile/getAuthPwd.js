$.ajax({
	type : "get",
	contentType : "*",
	cache : false,
	async : true,
	timeout : 2e4,
	data : {},
	url : "/i/v1/fee/detbillrandomcodejsonp" + arguments[0] + "?callback=callback",
	success : function(result) {
		var callback = function(data) {
			window.myData = data;
		}
		eval(result);
	},
	error : function(data) {
		window.myData = {};
	}
});