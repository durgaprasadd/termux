const sqrt = function(number){
	const result = [];
	while(number > 0){
		const rem = number%100;
		number = (number - rem)/100;
		result.unshift(rem);
	}
	let answer = 0;
	let num = 0;
	while(result.length > 0){
		num = (num*100) + result.shift();
		for(let i=1; i<=10;i++){
			let q = (answer*10)+i;
			if(q*q > num){
				answer = (answer*10)+(i-1);
				break;
			}
		}
	}
	return answer;;


}

console.log(sqrt(process.argv[2]));

