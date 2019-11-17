let coins=[1,2,5,10];
let result=10;
let sum=10;
for(let i=3;i>=0;i--){
	sum-=coins[i];
	if(sum==0){
		sum=result;
		console.log(coins[i]);
	}
	else{
		i+=1;
	}
}
