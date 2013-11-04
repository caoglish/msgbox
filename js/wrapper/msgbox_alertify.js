(function(window, document, undefined) {
	"use strict";
	var msgbox = {};
	var _slice = [].slice;

	var _processOptions = function() {
		var opts = _slice.apply(arguments, [0, 3]);
		if (typeof opts[0] === 'string') {
			var argu = {
				msg: opts[0]
			};
			if (typeof opts[1] === 'function') argu.ok = opts[1];
			if (typeof opts[2] === 'function') argu.cancel = opts[2];
			return argu;
		} else {
			return opts[0];
		}
	};

	var dialog = Alertify.dialog;
	var notify = Alertify.log;

	var _makeHandler = function(context, func) {
		var handler = function() {};
		if (typeof func == 'function') {
			//check the number of parameter of func, if it's 0, use simple handler;
			if (func.length > 0) {
				handler = function() {
					var param = _slice.apply(arguments, [0]);
					func.apply(context, param);
				};
			} else {
				handler = function() {
					func.apply(context);
				};
			}
		}
		return handler;
	};

	msgbox.alert = function() {
		var opts = _processOptions.apply(null, arguments);
		var okHandler = _makeHandler(this, opts.ok);
		dialog.alert(opts.msg, okHandler);
	};


	msgbox.confirm = function() {
		var opts = _processOptions.apply(null, arguments);
		var okHandler = _makeHandler(this, opts.ok),
			cancelHandler = _makeHandler(this, opts.cancel);
		dialog.confirm(opts.msg, okHandler, cancelHandler);
	};
	msgbox.prompt = function() {
		var opts = _processOptions.apply(null, arguments);
		var that = this;
		var okHandler = _makeHandler(this, opts.ok),
			cancelHandler = _makeHandler(this, opts.cancel);

		dialog.prompt(opts.msg, okHandler, cancelHandler);
	};

	msgbox.notify = function(opts) {
		var options = {};
		if (typeof opts === 'string') {
			options.msg = opts;
			options.type = _slice.apply(arguments, [1, 2])[0];
		} else {
			options = opts;
		}

		var typeList = ['info', 'success', 'error'];
		if ( !! options.type && typeList.indexOf(options.type) > -1) {
			notify[options.type](options.msg);
		} else {
			notify.info(options.msg);
		}
	};

	window.msgbox = msgbox;
})(window, document, window.rmit || {});