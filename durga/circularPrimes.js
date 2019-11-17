const isPrime = function(number){                                                                            for(let factor=2;factor<=Math.sqrt(number);factor++){
                if(number%factor==0){
                        return false;
                }
        }
        return true;
}

const circle = function(number){
	let c=number.toString().split("");
	for(let b=1;b<c.length;b++){
		c.push(c.shift());
		if(!isPrime(c.join(""))){
			return false;
		}
	}
	return true;
}

for(let a=2;a<1000000;a++){
	if(isPrime(a)&&circle(a)){
		console.log(a);
	}
}

