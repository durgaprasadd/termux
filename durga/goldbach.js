const isPrime = function(number){
	for(let f=2;f<=Math.sqrt(number);f++){
		if(number%f==0){
			return false;
		}
	}
	return true;
}

for(let i=35;i<10000;i+=2){
	let result = 0;
	if(!isPrime(i)){
		for(let j=2;j<i-1;j++){
			if(isPrime(j)){
				let k=i-j;
				if(k%2==0 && (k/2)%Math.sqrt(k/2)==0){
					console.log(i,j);
					result=i;
					break;
				}
			}
		}
		if(result!=i){
			console.log(i);
			break;
		}
	}
}

