define(['underscore', 'modules/other1'], function(_, other1) {
	return function() {
		console.log('in main1 module');
		alert(other1());
	}
});