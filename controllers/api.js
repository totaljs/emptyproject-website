exports.install = function() {

	// Enable cors
	CORS();

	// Define API routes
	ROUTE('POST /api/newsletter/  *Newsletter --> @save');
	ROUTE('POST /api/contact/     *Contact --> @save');
};