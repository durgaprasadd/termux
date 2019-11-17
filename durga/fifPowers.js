let result=0;

for (let i = 2; i < 355000; i++) { 
	let sumOfPowers = 0; 
	let number = i; 	
	while (Math.floor(number) > 0) {
		let d = number % 10;
		number-=d;
		number /= 10;

		let temp = d;
		for(let j = 1; j < 5; j++){
			temp *= d;
		}
		sumOfPowers += temp;
	}

	if (sumOfPowers == i) {
		console.log(sumOfPowers);
		result+=i;;
	}
}
console.log(result);
