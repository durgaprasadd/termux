for(let a=286;a<100000;a++){
	let t=(a/2)*(a+1);
	for(let b=166;b<a-100;b++){
		p=(b/2)*(3*b-1);
		if(t==p){
			for(let c=144;c<b-50;c++){
				h=(2*c-1)*c;
				if(h==p){
					console.log(h);
					a=b=c=100000;
				}
			}
		}
	}
}
