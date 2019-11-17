const isPrime = function(number){
	for(let factor=2;factor<=Math.sqrt(number);factor++){
		if(number%factor==0){
			return false;
		}
	}
	return true;
}
const isPantigal = function(b){
	let c=b.slice();
	for(let a=0;a<b.length;a++){
		c.shift();
		if(c.includes(b[a])){
			return false;
		}
	}
	return true;
}

for(let a=7654321;a>1234568;a--){
	b=a.toString().split("");
	if(b.includes("0")||b.includes("9")||b.includes("8")){
	}
	else if(isPantigal(b)&&isPrime(a)){
		console.log(a);
		break;
	}
}
