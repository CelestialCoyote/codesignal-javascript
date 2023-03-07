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

console.log(largestProduct([3, 6, -2, -5, 7, 3]));
//console.log(largestProduct([-23, 4, -3, 8, -12]));