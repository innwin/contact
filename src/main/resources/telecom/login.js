delete loadLoginCaptcha;
$("#txtAccount").val(arguments[0]).blur();
$("#txtPassword").val(arguments[1]);
$("#txtCaptcha").val( arguments[2]);

if(!document.getElementById("myIframe")){ 
	jQuery("body").append("<iframe  name='myIframe' id='myIframe'></iframe>");
}; 
document.getElementById("myIframe").onload=function(){ 
	var msg = $("#myIframe").contents().find("#loginForm").attr("data-errmsg");
	if(msg) window.myData = msg; else window.myData='success';
} 
$("#loginForm").attr("target","myIframe");
$("#txtPassword").valAesEncryptSet();
$("#loginForm").submit();"