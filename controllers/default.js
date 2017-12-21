exports.install = function() {

	ROUTE('/');
	ROUTE('/services/', view_services);
	ROUTE('/contact/');
	ROUTE('/references/');

	// Enables a localization mechanism + compression for all client-side components
	LOCALIZE('/components/*.html', ['compress']);

};

function view_services() {
	var self = this;
	self.view('services');
}