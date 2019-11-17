const isPrime = function(number){
	for(let i=3;i<=Math.sqrt(number);i+=2){
		if(number%i==0){
			return false;
		}
	}
	return true;
}

const primes = function(number){
	let result=[];
	if(number%2==0){
		result.push(2);;
	}
	for(let i=3;i<=number;i+=2){
		if(number%i==0 && isPrime(i)){
			result.push(i);
		}
	}
	return result;
}
//for(let i=645;i<1000000;i++){
//	if(primes(i).length==4&&primes(i+1).length==4&&primes(i+2).length==4&&primes(i+3).length==4){
//		console.log(i);
//		break;
//	}
//}

//for(let i=1001;i<9999;i+=2){
//	if(isPrime(i)){
//		let j=""+i;
//		j=j.split("");
//		j.push(j.shift());
//		let k=+j.join("");
//		if(isPrime(k)){
//		j.push(j.shift());
//			let l=+j.join("");
//		if(isPrime(l)){
//		if(Math.abs(i-j)==Math.abs(j-k)){	
//		console.log(i);
//	}}}}
//}

let sum =2;
for(let i=3;i<100000;i+=2){
	if(isPrime(i)){
		sum+=i;
		if(isPrime(sum) && sum<1000000 && sum%2==1){
			console.log(sum);
		}
	}
}
console.log(isPrime(953));
