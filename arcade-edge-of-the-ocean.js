// Given a array of integers, find the pair of adjacent elements that has the largest
// product and return that product.

function largestProduct(inputArray) {
	let largestProduct = inputArray[0] * inputArray[1];
	let next = 0;

	for (let i = 0; i < (inputArray.length - 1); i++) {
		next = inputArray[i] * inputArray[i + 1];
		if (next > largestProduct) largestProduct = next;
	};

	return (largestProduct);
};

//console.log(largestProduct([3, 6, -2, -5, 7, 3]));
//console.log(largestProduct([-23, 4, -3, 8, -12]));


// Below we will define an n-interesting polygon. Your task is to find the
// area of a polygon for a given n.
// A 1-interesting polygon is just a square with a side of length 1.
// An n-interesting polygon is obtained by taking the n - 1-interesting
// polygon and appending 1-interesting polygons to its rim, side by side.
function shapeArea(n) {
	if (n < 0) {
		return false
	};
	
	return (n * n) + ((n - 1) * (n - 1));
};

//console.log(shapeArea(1));
//console.log(shapeArea(2));
//console.log(shapeArea(3));
//console.log(shapeArea(4));