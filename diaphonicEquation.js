for(let d=661;d<=662;d++){
	for(let n=1;n<=1000;n++){
		let y=(d*n*n)+1;
		let x = Math.sqrt(y);
		if(y%x==0){
			console.log(x,d);
		}
	}
}
