NEWSCHEMA('Newsletter').make(function(schema) {

	schema.define('email', 'Email', true);
	schema.define('ip', 'String(80)');

	// Saves the model into the database
	schema.setSave(function(error, model, options, callback) {
		model.datecreated = F.datetime;
		NOSQL('newsletter').insert(model.$clean());
		callback(SUCCESS(true));
	});
});