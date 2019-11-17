const isPrime = function(a){
	a=+a;
	for(let b=2;b<=Math.sqrt(a);b++){
		if(a%b==0){
			return false;
		}
	}
	return true;
}

const both = function(a,b){
	if(isPrime(''+a+b) && isPrime(''+b+a)){
		return true;
	}
	return false;
}

let limit=10000;
for(let i=3;i<limit;i+=2){
	if(isPrime(i)){
		for(let j=i+2;j<limit;j+=2){
			if(isPrime(j) && both(i,j)){
				for(let k=j+2;k<limit;k+=2){
					if(isPrime(k) && both(j,k) && both(i,k)){
						for(let l=k+2;l<limit;l+=2){
							if(isPrime(l) && both(i,l) && both(j,l) && both(k,l)){
								for(let m=l+2;m<limit;m+=2){
									if(isPrime(m) && both(i,m) && both(j,m) && both(k,m) && both(l,m)){
										console.log(i,j,k,l,m);
										break;
								}
							}
						}
					}
				}
			}
		}
	}
}
}

