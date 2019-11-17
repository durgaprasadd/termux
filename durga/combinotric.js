const fact = function(n){
	let r=1;
	for(let i=2;i<=n;i++){
		r*=i;
	}
	return r;
}

for(let n=101;n<101;n++){
	let nr=fact(n);
	for(let r=1;r<=n;r++){
		let cr=fact(r)*fact(n-r);
		let ncr=nr/cr;
		if(ncr>1000000){
			count++;
		}
	}
}
const digitFact = function(num){
	let result=0;
	num=num.toString().split("");
	for(let v of num){
		result+=fact(+v);
	}
	return result;
}

let count=0;
for(let i=2;i<1000000;i++){
	let result=[i];
	for(let j=0;j<100;j++){
		let k=digitFact(result[result.length-1]);
		if(result.includes(k)){
			break;
		}
		result.push(k);
	}
	if(result.length>59){
	console.log(result[0]);
		count++;
	}
}
console.log(count);
