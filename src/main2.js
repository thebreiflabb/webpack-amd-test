define(['underscore'], function(_) {
	console.log('main2 loaded');

	return function() {
		require(['modules/other2'], function(other) {
			console.log('other from main2 loaded');
			alert('main2 loaded, result from other: ' + other());
		});
	}
});