const isPrime = function(a){
	for(let i=2;i<=Math.sqrt(a);i++){
		if(a%i==0){
			return false;
		}
	}
	return true;
}

const totalPrimes = function(limit){
	let count=0;
	for(let i=2;i<Math.pow(limit,2);i++){
		if(isPrime(i)){
			console.log(i);
			count++;
		}
	}
	return count;
}

const Up = function(a){
	let count=0;
	for(let i=2;i<a;i+=2){
		if(isPrime((i*i)+1)){
			count++;
		}
	}
	return count;
}

const Down = function(a){
	let count=0;
	for(let i=2;i<a;i+=2){
		if(isPrime((i*(i+1))+1)){
			count++;
		}
	}
	return count;
}

const Right = function(a){
	let count=0;
	for(let i=2;i<a;i+=2){
		if(isPrime((i*(i-1))+1)){
			count++;
		}
	}
	return count;
}

let sum=0;
for(let i=3;i<100000;i+=2){
	let total=(i*2)-1;
	if(isPrime(((i-1)*(i-1))+1)){
		sum+=1;
	}
	if(isPrime((i*(i-1))+1)){
		sum+=1;
	}
	if(isPrime(((i-1)*(i-2))+1)){
		sum+=1;
	}
	if(sum/total < 0.1){
		console.log(i);
		break;
	}
}
