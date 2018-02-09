jQuery.ajax({
	type : "GET",
	// dataType: "json",
	url : "/i/v1/fee/detailbillinfojsonp/" + arguments[0],
	data : {
		curCuror : "1",
		step : "50",
		qryMonth : arguments[1],
		billType : "01"
	},
	success : function(result) {
		window.myData = result;
	},
	error : function(data) {
		window.myData = data.responseText
	}
});