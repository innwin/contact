$.ajax({
	type : "get",
	contentType : "*",
	cache : false,
	async : true,
	timeout : 2e4,
	data : {
		pwdTempSerCode : base64encode(utf16to8(arguments[0])),
		pwdTempRandCode : base64encode(utf16to8(arguments[1])),
		captchaVal : arguments[2]
	},
	url : "/i/v1/fee/detailbilltempidentjsonp/" + arguments[3]
			+ "?callback=callback",
	success : function(result) {
		var callback = function(data) {
			window.myData = data;
		}
		eval(result);
	},
	error : function(data) {
		window.myData = {
			data : data.responseText
		};
	}
});