const isPalin = function(num){
	num=num.toString().split("");
	for(let i=0;i<Math.floor(num.length/2);i++){
		if(num[i]!=num[num.length-1-i]){
			return false;
		}
	}
	return true;
}

const reverseSum = function(num){
	let r=num.toString().split("").reverse().join("");
	r=+r;
	return r+num;
}


for(let i=1;i<=10000;i++){
	let k=i;
	for(let j=1;j<=50;j++){
		k=reverseSum(k);
		if(isPalin(k)){
			console.log(i);
			break;
		}
	}
}
