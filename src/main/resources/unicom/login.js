window.ajaxBack = $.ajax;
$.ajax = function(setting) {
	window.myCb = setting.success;
	window.myContext = setting.context;
	setting.success = function() {
		// window.myArguments = arguments;
		window.myData = arguments;
		// if($.isFunction(window.myCb)){window.myCb.apply(setting.context,
		// arguments); }
		if($.isFunction(window.myCb)){window.myCb.apply(window.myContext, window.myData); };
		$.ajax=window.ajaxBack;delete window.ajaxBack;delete window.myCb;delete window.myData;
	}
	window.ajaxBack(setting);
}