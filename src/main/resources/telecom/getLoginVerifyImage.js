var img = document.createElement("img");
img.src = "/web/captcha?t=" + Math.random();
img.onload = function() {
	var img = this;
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, img.width, img.height);
	window.myData = canvas.toDataURL("image/png");
}
