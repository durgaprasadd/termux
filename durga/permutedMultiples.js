const include = function(a,b){
	a=a.toString().split("");
	b=b.toString().split("");
	for(let i=0;i<a.length;i++){
		if(!a.includes(b[i]) || !b.includes(a[i])){
			return false;
		}
	}
	return true;
}
for(let i=10;i<10000000;i++){
	for(let j=2;j<7;j++){
		let k=i*j;
		if(!include(i,k)){
			break;
		}
		else{
			console.log(i,k,j);
		}
	}
}
