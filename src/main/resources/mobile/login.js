var params = {};
params.account = arguments[0];
params.password = arguments[1];
params.pwdType = "02";
params.accountType = "01";
params.password = params.password;
params.channelID = jQuery("#channelID").val();
params.protocol = document.location.protocol;
params.timestamp = new Date().getTime();
jQuery.getJSON('/login.htm', params, function(jsonData) {
	if (jsonData.code == "0000") {
		// window.location.href = jsonData.assertAcceptURL + "?backUrl=" +
		// backUrl
		// + "&artifact=" + jsonData.artifact;
		window.location.href = "https://shop.10086.cn/i/";
		window.myData = "success";
	} else if (jsonData.result == '9') {
		window.location.href = "https://shop.10086.cn/i/";
		window.myData = "success";
	} else {
		window.myData = jsonData.desc;
	}
});
