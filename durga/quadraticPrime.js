let result =[];
let isPrime = function(number){
	for(let factor = 2;factor<=Math.sqrt(number);factor++){
		if(number%factor==0){
			return false;
		}
	}
	return true;
}
let value=0;
for(let a=-999;Math.abs(a)<1000;a++){
	for(let b=-1000;Math.abs(b)<1001;b++){
		for(let n=0;n<1000;n++){
			let number=Math.pow(n,2)+(a*n)+b;
			if(number<2 || !isPrime(number)){
				break;
			}
			console.log(number);
			if(n>value){
				value=n;
				result=[n,a,b];
			}
		}
	}
}
console.log(result);
