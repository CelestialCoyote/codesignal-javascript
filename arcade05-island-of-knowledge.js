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

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));