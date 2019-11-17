const isPrime = function(a){
	for(let n=2;n<=Math.sqrt(a);n++){
		if(a%n==0){
			return false;
		}
	}
	return true;
}

let result=[];
for(let i=2;i<100;i++){
	if(isPrime(i)){
		for(let j=2;j<400;j++){
			if(isPrime(j)){
				for(let k=2;k<7100;k++){
					if(isPrime(k)){
						let l=Math.pow(i,4)+Math.pow(j,3)+Math.pow(k,2);
						if(l<50000000){

							result.push(l);
						}
						if(l>=50000000){
							break;
						}
						
					}
				}
			}
		}
	}
}

for(let v of result){
	console.log(v);
}
