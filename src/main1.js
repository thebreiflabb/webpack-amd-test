define(['underscore', 'modules/other'], function(_, other) {
	console.log('main1 loaded');
	console.log('other from main1 loaded');

	return function() {
		alert('main1 loaded, result from other: ' + other());
	}
});