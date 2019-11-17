const isPrime = function(n){
	for(let a=2;a<=Math.sqrt(n);a++){
		if(n%a==0){
			return false;
		}
	}
	return true;
}
let ans=0;
for(let i=5;i<3000;i++){
	if(!isPrime(i)){
	let result=1;
	for(let j=2;j<i;j++){
		let t=0;
		for(let k=2;k<=j;k++){
			if(j%k==0 && i%k==0){
				t=1;
				break;
			}
		}
		if(t==0){
			result++;
		}
	}
	let pos = i/result;
	if(pos>ans){
		ans=pos;
		console.log(i,ans);
	}
	}
}


