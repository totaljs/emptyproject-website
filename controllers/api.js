exports.install = function() {
	F.route('/api/newsletter/', json_save, ['post', '*Newsletter']);
	F.route('/api/contact/', json_save, ['post', '*Contact']);
};

function json_save() {
	var self = this;
	self.body.ip = self.ip;
	self.body.$save(self.callback());
}