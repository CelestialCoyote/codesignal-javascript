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

console.log(commonCharaterCount('aabcc', 'adcaa'));