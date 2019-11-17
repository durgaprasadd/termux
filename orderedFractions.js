let main = 3/7;
let a = 0.01;
console.log(main);

for(let d=2;d<=Math.pow(10,6);d++){
	let i=Math.floor(a*d);
	for(;i<d;i++){
		let fraction = (i/d);
		if(fraction > main){
			break;
		}
		if(a < fraction && fraction < main){
			a = fraction;
			console.log(i,d);
		}
	}
}
console.log(a);
