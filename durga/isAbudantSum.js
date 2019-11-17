let factorSum = function(number){
	let sum = 1;
	for(let factor = 2;factor<Math.sqrt(number);factor++){
		if(number%factor==0){
			sum+=factor;
			sum+=number/factor;
		}
	}
	if(number%Math.sqrt(number)==0){
		sum+=Math.sqrt(number);
	}
	return sum;
}

let isAbudant = function(number){
	return number<factorSum(number);
}

let isAbudantSum = function(number){
	for(let index = 2 ; index<=number/2;index++){
		if(isAbudant(index) && isAbudant(number-index)){
			return true;
		}
	}
	return false;
}
console.log(isAbudantSum(+process.argv[2]));

let sum = function(number){
	let result=0;
	for(let index = 1; index<=number; index++){
		if(!isAbudantSum(index)){
			result+=index;
		}
	}
	return result;
}

console.log(sum(+process.argv[2]));

