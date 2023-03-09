// Given an array of strings, return another array containing all of its longest strings.
function allLongestStrings(inputArray) {
	const wordLengths = inputArray.map(array => array.length);
	let largest = wordLengths[0];
	
	for (let i = 0; i < wordLengths.length; i++) {
		if (largest < wordLengths[i] ) {
			largest = wordLengths[i];
		};
	};

	return inputArray.filter(item => item.length === largest);
};

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));