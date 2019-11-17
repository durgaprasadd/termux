let result=[];
for(let a=2;a<=100;a++){
	for(let b=2;b<=100;b++){
		let number=Math.pow(a,b);
		if(!result.includes(number)){
			result.push(number);
		}
	}
}
//console.log(result.length,result.sort());
for(let value of result.sort()){
	console.log(value)
}
console.log(result.length);
