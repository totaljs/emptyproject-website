NEWSCHEMA('Newsletter').make(function(schema) {

	schema.define('email', 'Email', true);

	// Saves the model into the database
	schema.setSave(function($) {
		var model = $.model;
		model.ip = $.ip;
		model.datecreated = F.datetime;
		NOSQL('newsletter').insert(model);
		$.success();
	});
});