let pent = [];
const isPentagonal = function(number){
	return pent.includes(number);
}

for(let n=1;n<=10000;n++){
	let p=(n/2)*(3*n-1);
	pent.push(p);
}

for(let n=1;n<=10000;n++){
	let p=(n/2)*(3*n-1);
	for(let i=n-2;i>=0;i--){
		if(isPentagonal(p+pent[i])&&isPentagonal(p-pent[i])){
			console.log(p-pent[i]);
			process.exit();
		}
	}
}
