define(['jquery', 'backbone'], function($, Backbone) {
	return function() {
		console.log('in other2 module');
		return 10;
	}
});