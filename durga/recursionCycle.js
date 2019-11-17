for(let i=2;i<1000;i++){
	let res=10;
	let result=[res];
	while(res>0){
		res=(res%i)*10;
		if(res<i){
			res*=10;
		}
		if(res<i){
			res*=10;
		}
		if(result.includes(res)){
			console.log(i,result.length);
			break;
		}
		result.push(res);
	}
}
		
