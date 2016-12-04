$(document).ready(function() {
	$(document).on('click', '.mainmenu-button', function() {
		$(this).parent().find('nav').toggleClass('mainmenu-visible');
	});
});

COMPONENT('newsletter', function() {
	var self = this;
	var button;
	var input;

	self.readonly();
	self.make = function() {

		button = self.find('button');
		input = self.find('input');

		self.element.on('keydown', 'input', function(e) {
			e.keyCode === 13 && button.trigger('click');
		});

		button.on('click', function() {

			var mail = input.val();
			if (!mail.isEmail())
				return;

			AJAX('POST /api/newsletter/', { email: input.val() }, function(response) {

				input.addClass('newsletter-success');
				input.val(self.attr('data-success'));

				setTimeout(function() {
					input.val('');
					input.removeClass('newsletter-success');
				}, 3000);
			});
		});
	};
});

COMPONENT('cookie', function() {
	var self = this;
	self.singleton();
	self.readonly();

	self.cancel = function() {
		document.cookie.split(';').forEach(function(key) {
			jC.cookies.set(key.split('=')[0], '', '-2 days');
		});
		try {
			Object.keys(localStorage).forEach(function(key) {
				localStorage.removeItem(key);
			});
		} catch (e) {}
		location.href = 'about:blank';
		return self;
	};

	self.make = function() {

		var cookie;

		// private mode
		try {
			cookie = localStorage.getItem('cookie');
		} catch (e) {}

		if (cookie) {
			self.element.addClass('hidden');
			return;
		}

		self.element.removeClass('hidden').addClass('ui-cookie');
		self.element.append('<button name="agree">' + (self.attr('data-agree') || 'OK') + '</button>');
		self.element.append('<button name="cancel">' + (self.attr('data-cancel') || 'Cancel') + '</button>');

		self.element.on('click', 'button', function() {

			if (this.name === 'cancel')
				return self.cancel();

			// private mode
			try {
				localStorage.setItem('cookie', '1');
			} catch (e) {}
			self.element.addClass('hidden');
		});
	};
});