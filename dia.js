const isPerfectSquare = function(num){
	let root = Math.sqrt(num);
	return root == Math.ceil(root)
}

let result = [0,0];
for(let i=2;i<=1000;i++){
	result[i]=0;
	if(!isPerfectSquare(i)){
		let j=1;	
		while(1){
			let value = (i*j*j)+1;
			if(isPerfectSquare(value)){
				console.log(value,i);
				result[i]=value;
				break;
			}
			j++
		}
	}
}
//let answer=0;
//for(let i=0;i<result.length;i++){
//	if(answer<result[i]){
//		answer=result[i];
//		console.log(i);
//	}
//}

