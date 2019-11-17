const digitSquare = function(num){
	num=num.toString().split("");
	let sum=0;
	for(let i of num){
		sum+=+i*+i;
	}
	return sum;
}

let result=0;
for(let i=1;i<10000000;i++){
	let k=digitSquare(i);
	while(k!=89 && k!=1){
		k=digitSquare(k);
	}
	if(k==89){
	result++;
	}
}
console.log(result);
