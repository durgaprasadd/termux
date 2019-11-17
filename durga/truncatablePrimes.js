const isPrime = function(number){
	for(let factor=2;factor<=Math.sqrt(number);factor++){
		if(number%factor==0){
			return false;
		}
	}
	if(number>1)return true;
}

for(let index=9;index<3000000;index+=2){
	if(isPrime(index)){
		value=""+index;
		prime=value.split("");
		ans=true;
		for(let pos=1;pos<value.length;pos++){
			result=prime.slice();
			if(isPrime(result.splice(value.length-pos).join("")) && isPrime(result.join(""))){
			}else{
				ans=false;
			}
		}
		if(ans){
				console.log(value);
		}


	}
}

