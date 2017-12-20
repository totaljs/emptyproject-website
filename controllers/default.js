exports.install = function() {

	ROUTE('/');
	ROUTE('/services/');
	ROUTE('/contact/');
	ROUTE('/references/');

	// Enables a localization mechanism + compression for all client-side components
	LOCALIZE('/components/*.html', ['compress']);

};