exports.install = function() {

	// Enable cors
	CORS('/api/*', ['post']);

	// Define API routes
	ROUTE('/api/newsletter/', json_save, ['*Newsletter', 'post']);
	ROUTE('/api/contact/',    json_save, ['*Contact', 'post']);

};

function json_save() {
	this.body.$save(this.callback());
}