let number = process.argv[2];
const UpSum = function(number){
	return (Math.pow(number,2))*2-(number-2);
}

const rightDownSum = function(number){
	return Math.pow(number+1,2);
}

const leftDownSum = function(number){
	return number*(number+1)+1;
}

const sum = function(number){
	let result=1;
	for(let index=2;index<number;index+=2){
		result+=UpSum(index)+rightDownSum(index)+leftDownSum(index);
	}
	return result;
}

console.log(sum(number));
