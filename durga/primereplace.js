const isPrime = function(a){
	a=+a;
	for(let b=2;b<=Math.sqrt(a);b++){
		if(a%b==0){
			return false;
		}
	}
	return true;
}


for(let i=1;i<100000;i++){
	let count=0;
	let result=0;
	for(let j=1;j<10;j++){
	if(isPrime(''+i+j)){
		count++;
	}
		if(isPrime(''+j+i)){
			result++;
		}
		if(result>7 || count>7){
			console.log(result,count);
		}
	}
}
