define(['underscore'], function(_) {
	return function() {
		console.log('in main2 module');
		
		require(['modules/other2'], function(other2) {
			alert(other2());
		});
	}
});