jQuery.ajax({
		type : "POST",
		url : "/sendRandomCodeAction.action",
		timeout : 10000,
		async : false,
		dataType : "json",
		data : {
			userName : arguments[0],
			type : "01",
			channelID : jQuery("#channelID").val()
		},
		success : function(data) {
			if('0'==data){
				window.myData = 'success' ;
			}else if('4005'==data){
				window.myData = '手机号码有误，请重新输入!';
			}else if (data == '1'){
				window.myData ='对不起，短信随机码暂时不能发送，请一分钟以后再试！';
			}else if (data == '2'){
				window.myData = '对不起，短信随机码获取达到上限！' ;
			}else if (data == '3') {
				window.myData = '对不起，短信发送次数过于频繁！';
			}else if (data == '4') {
				window.myData = '对不起，渠道code不能为空！';
				$("#sendSms").show();
			}else if (data == '5') {
				window.myData = '对不起，渠道code异常！';
			}
		},
		error : function() {
			window.myData = "对不起，连接超时，请重新输入！";
		}
});