

var myTest = {

	run: function(tests) {
		for (var testName in tests) {
			var testAction = tests[testName];
			try{
				testAction.apply(this);
				console.log('Test ' + testName + ' is ok')
			} catch (e) {
				console.error('Failed ' + testName)
			}
		}
	},
	assertEquals: function(expected, actual) {
		if (expected != actual) {
			console.log('expected was ' + expected + 'actual was ' + actual);
		}
	}






	
}

var tests = myTest.run.bind(myTest);
var assertEquals = myTest.assertEquals.bind(myTest);



































