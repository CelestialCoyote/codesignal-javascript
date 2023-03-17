// Several people are standing in a row and need to be divided
// into two teams. The first person goes into team 1, the second
// goes into team 2, the third goes into team 1 again, the fourth
// into team 2, and so on.

// You are given an array of positive integers - the weights of
// the people. Return an array of two integers, where the first
// element is the total weight of team 1, and the second element
// is the total weight of team 2 after the division is complete.
function alternatingSums(a) {
	let teamOne = [];
	let teamOneWeight = 0;
	let teamTwo = [];
	let teamTwoWeight = 0;

	for (let i = 0; i < a.length; i++) {
		if (i % 2 === 0) {
			teamOne.push(a[i]);
			teamOneWeight += a[i];
		} else {
			teamTwo.push(a[i]);
			teamTwoWeight += a[i];
		};
	};

	return [teamOneWeight, teamTwoWeight];
};

//console.log(alternatingSums([50, 60, 60, 45, 70]));


// Given a rectangular matrix of characters, add a border
// of asterisks(*) to it.
function addBorder(picture) {
	let width = 0;

	for (let i = 0; i < picture.length; i++) {
		if (picture[i].length > width) {
			width = picture[i].length;
		};
	};

	for (let i = 0; i < picture.length; i++) {
		picture[i] = '*' + picture[i] + '*';
	};

	let border = '';
	for (let i = 0; i < width + 2; i++) border += '*';

	picture.unshift(border);
	picture.push(border);

	return picture;
};

//console.log(addBorder(['abc', 'ded']));


// Two arrays are called similar if one can be obtained from
// another by swapping at most one pair of elements in one
// of the arrays.
// Given two arrays a and b, check whether they are similar.
function areSimilar(a, b) {
	let count = 0;
	let sameElements = false;
	let copyA = JSON.parse(JSON.stringify(a));
	let copyB = JSON.parse(JSON.stringify(b));
	copyA.sort();
	copyB.sort();

	// Check if arrays are same length;
	if (a.length !== b.length) {
		console.log('first test');
		return false;
	};

	//console.log(`a- ${a}, copyA- ${copyA}, b- ${b}, copyB- ${copyB}`);
	// Check if arrays are same after sorting;
	if (copyA !== copyB) {
		sameElements = false;
	} else {
		console.log('second test');
		return true;
	}

	// Count number of differences in arrays.
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) count++;
	};

	console.log(`sameElements- ${sameElements}, count- ${count}`);
	return sameElements && (count === 2 || count === 0);
};

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([2, 3, 9], [10, 3, 2]));
