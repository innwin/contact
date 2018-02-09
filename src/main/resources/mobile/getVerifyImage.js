var img = document.createElement("img");
img.src = "/i/authImg?t=" + Math.random();
img.onload = function() {
	var img = this;
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, img.width, img.height);
	var dataURL = canvas.toDataURL("image/png");
	window.myData = dataURL;
};