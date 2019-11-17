const createCombinations = function(number){
	let combinations = [];
	for(let i=0;i<Math.pow(5,number);i++){
		combinations.push([]);
	}
	let operators = ['+','-','/','*',''];
	let cycle = combinations.length;
	for(let i=0;i<number;i++){
		cycle = cycle/5;
		for(let j=0;j<combinations.length;j++){
			let operator = operators[Math.floor(j/cycle)%5]
			combinations[j].push(operator)
		}
	}
	return combinations;
}

console.log(createCombinations(+process.argv[2]));
