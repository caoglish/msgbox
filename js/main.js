(function($) {
	//nofity dialog
	$('#alert').click(function() {
		msgbox.alert(
			'hello,world', 
			function() {
				this.alert('donedone');
			}
		);
	});

	$('#confirm').click(function() {
		msgbox.confirm(
			'confirm box',
			function() {
				this.notify('ok', 'success');
			},
			function() {
				this.notify('cancel', 'error');
			}
		);
	});

	$('#prompt').click(function() {
		msgbox.prompt(
			'prompt',
			function(str) {
				this.notify(str);
			},
			function() {
				this.notify('cancel', 'error');
			}
		);
	});
	$('#alert-object').click(function() {
		msgbox.alert({
			msg: 'hello,world',
			ok: function() {
				this.alert('done');
			}
		});
	});

	$('#confirm-object').click(function() {
		msgbox.confirm({
			msg: 'confirm box',
			ok: function() {
				this.notify('ok', 'success');
			},
			cancel: function() {
				this.notify('cancel', 'error');
			},
		});

	});

	$('#prompt-object').click(function() {

		msgbox.prompt({
			'msg': 'prompt',
			ok: function(str) {
				this.notify(str);
			},
			cancel: function() {
				this.notify('cancel', 'error');
			}
		});
	});

//nofity
	$('#info').click(function() {
		msgbox.notify('string first');
		msgbox.notify({
			msg: 'hello,world',
			type: 'succe7ss'
		}); //wrong type
	});

	$('#success').click(function() {
		msgbox.notify('string success', 'success');
		msgbox.notify({
			msg: 'string success',
			type: 'success'
		});
	});

	$('#error').click(function() {
		msgbox.notify('string error', 'error');
		msgbox.notify({
			msg: 'string error',
			type: 'error'
		});
	});
})(jQuery);