window.getBase64Image = function(img) {
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, img.width, img.height);
	var dataURL = canvas.toDataURL("image/png");
	return dataURL;
};
//window.myOnload = document.getElementById('imgCaptcha').onload;
document.getElementById('imgCaptcha').onload = function() {
	window.myData = window.getBase64Image(document.getElementById('imgCaptcha'));;
};
jQuery("#imgCaptcha").click();