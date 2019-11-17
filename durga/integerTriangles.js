for(let a=1;a<500;a++){
	for(let b=a;b<1000-a;b++){
		result=Math.pow(a,2)+Math.pow(b,2);
		c=Math.sqrt(result);

		if(result%c==0 && a+b+c<1001){
			console.log(a+b+c);
		}
	}
}
