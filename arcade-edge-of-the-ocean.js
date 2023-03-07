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


// Ratiorg got statues of different sizes as a present from CodeMaster
// for his birthday, each statue having an non-negative integer size.
// Since he likes to make things perfect, he wants to arrange them from
// smallest to largest so that each statue will be bigger than the
// previous one exactly by 1. He may need some additional statues to be
// able to accomplish that. Help him figure out the minimum number of
// additional statues needed.
function makeArrayConsecutive(statues) {
	// Sort array so first element is lowest number and last is highest.
	statues.sort((a, b) => {
		return a - b;
	});

	let range = statues[statues.length - 1] - statues[0];
	let missing = range - (statues.length) + 1;

	return missing;
};

//console.log(makeArrayConsecutive([6, 2, 3, 8]));
//console.log(makeArrayConsecutive([6, 2, 3, 10]));


// Given a sequence of integers as an array, determine whether it is possible
// to obtain a strictly increasing sequence by removing no more than one element
// from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if
// a0 < a1 < ... < an. Sequence containing only one element is also considered to
// be strictly increasing.
function almostIncreasingSequence(sequence) {
	let dropCount = 0;

	for (let i = 0; i < sequence.length; i++) {
		// Check if current element is equal or greater than next element.
		if (sequence[i] >= sequence[i + 1]) {
			dropCount++;
		};

		if (dropCount > 1)
			return false;
		
		// Check if second previous element is greater than or equal to current element
		// and if previous element is greater than or equal to next element.
		if (sequence[i - 2] >= sequence[i] && sequence[i - 1] >= sequence[i + 1]) {
			return false;
		};
	};

	return true;
};

//console.log(almostIncreasingSequence([1, 3, 2, 1]));
//console.log(almostIncreasingSequence([1, 3, 2]));
//console.log(almostIncreasingSequence([1, 1, 2, 3, 4, 4]));
//console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]));