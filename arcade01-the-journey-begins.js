// Write a function that returnsthe sum of two numbers.
function sumTwoNumbers(param1, param2) {
	return param1 + param2;
};

//console.log(sumTwoNumbers(42, 73));


// Given a year, return the century it is in.  The first century spans from year 1
// up to and including the year 100, the second - from the year 101 up and including
// the 200, etc.
function findCentury(year) {
	return Math.floor((year - 1) / 100) + 1;
};

//console.log(findCentury(1066));


//Given the string, check if it is a palindrome.
function isPalindrome(inputString) {
	let reversedString = "";

	for (let i = inputString.length - 1; i >= 0; i--) {
		reversedString += inputString[i];
	};

	if (inputString === reversedString) {
		return true;
	} else {
		return false;
	};
};

//console.log(isPalindrome('aabaa'));
//console.log(isPalindrome('abaa'));