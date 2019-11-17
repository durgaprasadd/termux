for(let i=10;i<100;i++){
	for(let j=i+1;j<100;j++){
		let a=i.toString().split("");
		let b=j.toString().split("");
		if(a[0]==b[0] && +a[1]/+b[1] == i/j){
			console.log(i,j);
		}
		if(a[1]==b[1] && +a[0]/+b[0] == i/j){
			//console.log(i,j);
		}
		if(a[0]==b[1] && +a[1]/+b[0] == i/j){
			console.log(i,j);
		}
		if(a[1]==b[0] && +a[0]/+b[1] == i/j){
			console.log(i,j);
		}
	}
}
