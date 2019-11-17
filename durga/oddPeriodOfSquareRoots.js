for(let n=1;n<995;n++){
	let r=Math.sqrt(n);
	const initial = Math.floor(r);
	let a = Math.ceil(r)*2;
	let m = 0;
	r = r-initial;
	let period = 0;
	while(a != (2*initial)){
		m = 1/r;
		a = Math.floor(m);
		r = m-a;
		period++;
	}
	if(period%2==1){
		console.log(n,period);
	}
}
