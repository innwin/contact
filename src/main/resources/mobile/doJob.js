jQuery.ajax({
	type : "get",
	dataType: "jsonp",
	url : "https://shop.10086.cn/i/v1/fee/detailbillinfojsonp/" + arguments[0] ,
	data : {
		curCuror : "1",
		step : "100",
		qryMonth :  arguments[1],
		billType : "02"
	},
	success : function(result) {
		window.myData = result;
	},
	error : function(data) {
		window.myData = { data: data.responseText } 
	}
});