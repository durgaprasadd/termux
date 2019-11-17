let factors=[];
let number=process.argv[2];
for(let factor=Math.floor(Math.sqrt(number));factor>0;factor--){
	if(number%factor==0){
		factors.unshift(factor);
		factors.push(number/factor);
	}
}
console.log(factors);
