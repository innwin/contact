$.getJSON("/i/v1/cust/info/" + arguments[0], {}, function(jsonData) {
	window.myData = jsonData;
});