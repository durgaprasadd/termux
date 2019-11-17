const isPrime = function(n){
	for(let a=2;a<=Math.sqrt(n);a++){
		if(n%a==0){
			return false;
		}
	}
	return true;
}

for(let i=990;i<991;i++){
	let result=i-1;
	console.log(result);
		for(let j=2;j<=i/2;j++){
			if(isPrime(j) && i%j==0){
				console.log(j);
				result-=Math.floor((i-1)/j);
			}
		}
	if(result<0){
	console.log(result,i);
	}
}
