// Given an array of strings, return another array containing all of its longest strings.
function allLongestStrings(inputArray) {
	const wordLengths = inputArray.map(array => array.length);
	let largest = wordLengths[0];

	for (let i = 0; i < wordLengths.length; i++) {
		if (largest < wordLengths[i]) {
			largest = wordLengths[i];
		};
	};

	return inputArray.filter(item => item.length === largest);
};

//console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));


// Given two strings, find the number of common characters between them.
function commonCharaterCount(s1, s2) {
	let count = 0;
	const s2Array = s2.split('');

	for (element of s1) {
		let index = s2Array.findIndex(char => char === element);
		if (index >= 0) {
			s2Array.splice(index, 1);
			count++;
		};
	};

	return count;
};

//console.log(commonCharaterCount('aabcc', 'adcaa'));


// Ticket numbers usually consist of an even number of digits.
// A ticket number is considered lucky if the sum of the first
// half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.

function isLucky(n) {
	const numArray = Array.from(String(n), Number);
	let firstHalf = 0;
	let lastHalf = 0;

	if (numArray.length %2 !== 0) {
		return false;
	} else {
		count = numArray.length / 2;

		for (let i = 0; i < count; i++) {
			firstHalf += numArray[i];
			lastHalf += numArray[i + count];
		};
		
		return firstHalf === lastHalf;
	};
};

console.log(isLucky(1230));
console.log(isLucky(239017));