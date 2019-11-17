const isPrime = function(a){
	for(let b=2;b<=Math.sqrt(a);b++){
		if(a%b==0){
			return false;
		}
	}
	return true;
}

const isPerm = function(a,b,c){
	a=''+a;
	b=''+b;
	c=''+c;
	a=a.split("");
	b=b.split("");
	c=c.split("");
	for(let i=0;i<a.length;i++){
		if(!a.includes(b[i]) || !b.includes(c[i]) || !c.includes(a[i])){
			return false;
		}
	}
	return true;
};

//for(let i=1000;i<10000;i++){
//	if(isPrime(i)){
//		for(let j=i+1;j<10000;j++){
//			if(isPrime(j)){
//				if(isPrime(j+(j-i))){
//					if(isPerm(i,j,j+j-i)){
//						console.log(i,j,j+j-i);
//					}
//				}
//			}
//		}
//	}
//}
	let largePrime=0;
for(let j=2;j<=100000;j++){
let sum=0;
let count=0;
for(let i=j;sum<1000000;i++){
	if(isPrime(i)){
		sum+=i;
		count++;
	}
	if(isPrime(sum) && sum<1000000){
		if(count>largePrime){
		console.log(sum,i);
			largePrime=count;
		}
	}
}
}
