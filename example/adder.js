function add(x,y) {
	return x + y;
}

function add(arr) {
	var sumSoFar = 0;
	for (var i = 0; i < arr.length; i++ ) {
		sumSoFar = sumSoFar + i;
	};
	 return sumSoFar;
};

function proto(arr, callback) {
	var sumSoFar = 0;

}


function adder(sumSoFar) {

}

function reduce(arr, callback, startingValue) {
	var resultSoFar = startingValue;
	for (var i = 0; i < arr.length; i++) {
		resultSoFar = callback(resultSoFar, arr[i])
	};
	return resultSoFar;

}