let limit=+process.argv[2];
let result = [];
const factSum = function(number){
	let sum=1;
	for(let factor=2;factor<Math.sqrt(number);factor++){
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

for(let number=2;number<limit+1;number++){
	num = factSum(number);
	if(num>number && factSum(num)==number){
		result.push(num);
		result.push(number);
	}
}
console.log(result);
let sum=0;
for(let value of result){
	sum+=value;
}
console.log(sum);
