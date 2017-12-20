NEWSCHEMA('Contact').make(function(schema) {

	schema.define('firstname', 'Capitalize(40)', true);
	schema.define('lastname', 'Capitalize(40)', true);
	schema.define('email', 'Email', true);
	schema.define('message', String, true);
	schema.define('phone', 'Phone');

	// Saves the model into the database
	schema.setSave(function($) {

		var model = $.model;

		model.id = UID();
		model.datecreated = F.datetime;
		model.ip = $.ip;

		// Saves to database
		NOSQL('contactforms').insert(model);

		// Returns response
		$.success();

		var builder = [];

		builder.push('<b>Created:</b><br />' + F.datetime.format('yyyy-MM-dd HH:mm:ss'));
		builder.push('<b>IP address:</b><br />' + model.ip);
		builder.push('<b>Name:</b><br />' + model.firstname + ' ' + model.lastname);
		builder.push('<b>Email address:</b><br />' + model.email);
		model.phone && builder.push('<b>Phone number:</b><br />' + model.phone);
		builder.push('<b>Question:</b><br />' + model.body);

		// Sends email
		LOGMAIL(F.config['mail-contact'], 'Contact form # ' + model.id, builder.join('\n\n')).reply(model.email);
	});
});