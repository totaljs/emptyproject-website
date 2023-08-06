exports.install = function() {

	ROUTE('GET /');
	ROUTE('GET /services/', view_services);
	ROUTE('GET /contact/');
	ROUTE('GET /references/');

};

function view_services() {
	var $ = this;
	$.view('services');
}