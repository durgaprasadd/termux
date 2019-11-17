let denominations=[1,2,5,10,20,50,100,200];
let given =10;
let result=0;
const coinSum = function(given){
	for(let index=denominations.length-1;index>0;index--){
		if(denominations[index]<=given){
			if(given%denominations[index]==0){
				console.log(denominations[index]);
				result+=1;
			}
			let value=Math.ceil(given/denominations[index]);
			let sum=given;
			let i=1;
			while(value>1){
				sum-=denominations[index];
				value--;
				if(sum%denominations[index-i]==0){
					console.log(denominations[index-i]);
					result+=1;
				}
				else{
					coinSum(sum);
				}
			}
		}
	}
}
coinSum(+process.argv[2]);
console.log(result);
