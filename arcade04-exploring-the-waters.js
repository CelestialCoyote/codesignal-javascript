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
		if(i % 2 === 0) {
			teamOne.push(a[i]);
			teamOneWeight += a[i];
		} else {
			teamTwo.push(a[i]);
			teamTwoWeight += a[i];
		};
	};
	
	return [teamOneWeight, teamTwoWeight];
};

console.log(alternatingSums([50, 60, 60, 45, 70]));
