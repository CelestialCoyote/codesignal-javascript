// Call two arms equally strong if the heaviest weights they each are able
// to lift are equal.

// Call two people equally strong if their strongest arms are equally strong
// (the strongest arm can be both the right and the left), and so are their
// weakest arms.

// Given your and your friend's arms' lifting capabilities find out if you
// two are equally strong.
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
	let isEqual = false;

	if (yourLeft === friendsLeft && yourRight === friendsRight) {
		isEqual = true;
	} else if (yourRight === friendsLeft && yourLeft === friendsRight) {
		isEqual = true;
	};

	return isEqual;
};

//console.log(areEquallyStrong(10, 15, 15, 10));
//console.log(areEquallyStrong(15, 10, 15, 10));
//console.log(areEquallyStrong(15, 10, 15, 9));


// Given an array of integers, find the maximal absolute difference between
// any two of its adjacent elements.
function arrayMaximalAdjacentDifference(inputArray) {
	let maxDifference = 0;

	for (let i = 0; i < inputArray.length; i++) {
		if (maxDifference < Math.abs(inputArray[i] - inputArray[i +1]))
			maxDifference = Math.abs(inputArray[i] - inputArray[i +1]);
	};

	return maxDifference;
};

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
