const findFactorial = function(number){
	let result=1;
	for(let index=2;index<=number;index++){
		result*=index;
	}
	return result;
}

for(let index=3;index<=10000000;index++){
	let sum=0;
	let value=""+index;
	for(let pos=0;pos<value.length;pos++){
		let number=+value[pos];
		sum+=findFactorial(number);
	}
	if(sum==index){
		console.log(index);
	}
}
