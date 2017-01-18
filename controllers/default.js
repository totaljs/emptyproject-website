exports.install = function() {
	F.route('/');
	F.route('/services/');
	F.route('/contact/');
	F.route('/references/');

	// Enables a localization mechanism + compression for all client-side components
	F.localize('/components/*.html', ['compress']);
};