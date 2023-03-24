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
		if (maxDifference < Math.abs(inputArray[i] - inputArray[i + 1]))
			maxDifference = Math.abs(inputArray[i] - inputArray[i + 1]);
	};

	return maxDifference;
};

//console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));


// An IP address is a numerical label assigned to each device (e.g., computer, printer)
// participating in a computer network that uses the Internet Protocol for communication.
// There are two versions of the Internet protocol, and thus two versions of addresses.
// One of them is the IPv4 address.

// Given a string, find out if it satisfies the IPv4 address naming rules.
function isIPv4Address(inputString) {
	const address = inputString.split('.');
	let count = 0;


	for (let i = 0; i < address.length; i++) {
		if (address.length !== 4 || (address[i].startsWith('0') && address[i].length > 1))
			return false;

		if (address[i] !== '' && address[i] >= 0 && address[i] <= 255)
			count++;
	};

	return count === 4;
};

//console.log(isIPv4Address('172.16.254.1'));
//console.log(isIPv4Address('172.316.254.1'));
//console.log(isIPv4Address('.254.255.0'));
//console.log(isIPv4Address('64.233.161.00'));
//console.log(isIPv4Address('0..1.0.0'));


// You are given an array of integers representing coordinates of obstacles situated on
// a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are
// allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.
function avoidObstacles(inputArray) {
	for (let i = 1; ; i++) {
		if (inputArray.every(element => element % i))
			return i;
	};
};

//console.log(avoidObstacles([5, 3, 6, 7, 9]));


// You want to apply the box blur algorithm to the photo to hide its content.
// The pixels in the input image are represented as integers. The algorithm distorts
// the input image in the following way: Every pixel x in the output image has a
// value equal to the average value of the pixel values from the 3 × 3 square that
// has its center at x, including x itself. All the pixels on the border of x are
// then removed.

// Return the blurred image as an integer, with the fractions rounded down.
function boxBlur(image) {
	const blur = [];

	for (let i = 0; i < image.length - 2; i++) {
		const matrix = [];

		for (let j = 0; j < image[0].length - 2; j++) {
			const row1 = image[i][j] + image[i][j + 1] + image[i][j + 2];
			const row2 = image[i + 1][j] + image[i + 1][j + 1] + image[i + 1][j + 2];
			const row3 = image[i + 2][j] + image[i + 2][j + 1] + image[i + 2][j + 2];

			matrix.push(Math.floor((row1 + row2 + row3) / 9));
		};
		blur.push(matrix);
	};

	return blur;
};

// console.log(boxBlur(
// 	[
// 		[1, 1, 1],
// 		[1, 7, 1],
// 		[1, 1, 1]
// 	]
// ));
// console.log(boxBlur(
// 	[
// 		[7, 4, 0, 1],
// 		[5, 6, 2, 2],
// 		[6, 10, 7, 8],
// 		[1, 4, 2, 0]
// 	]
// ));


// In the popular Minesweeper game you have a board with some mines and those
// cells that don't contain a mine have a number in it that indicates the total
// number of mines in the neighboring cells. Starting off with some arrangement
// of mines we want to create a Minesweeper game setup.
function mineSweeper(matrix) {

};

console.log(mineSweeper([[true, false, false]], [false, true, false], [false, false, false]));