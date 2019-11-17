let result=0;
for(let i=650000;i<750000;i+=2){
	let count=0;
	for(let j=Math.floor(i/10);j<i/3;j++){
		let k=(i-j);
		let b=(Math.pow(k,2)-Math.pow(j,2))/(2*k);
		if(Math.floor(b)==b && b>=j){
			count++;
		}
		if(count>1){
			break;
		}
	}
	if(count==1){
		result++;
	}
}
console.log(result);
