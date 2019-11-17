let triangle=[];
for(let i=45;i<141;i++){
	let p3 = (i/2)*(i+1);
	triangle.push(p3);
}

let square =[];
for(let i=32;i<100;i++){
	let p4 = i*i;
	square.push(p4);
}

let pentagon = [];
for(let i=26;i<82;i++){
	let p5 = (i/2)*((3*i)-1);
	pentagon.push(p5);
}

let hexagon = [];
for(let i=23;i<71;i++){
	let p6 = i*((2*i)-1);
	hexagon.push(p6);
}

let septagon = [];
for(let i=21;i<64;i++){
	let p7 = (i/2)*((5*i)-3);
	septagon.push(p7);
}

let octagon = [];
for(let i=19;i<58;i++){
	let p8 = i*((3*i)-1);
	octagon.push(p8);
}

const find = function(arr,num){
	for(let v of arr){
		if(num%100 == Math.floor(v/100)){
			return v;
		}
	}
	return false;;
}

let result = {square:square,pentagon:pentagon,hexagon:hexagon,septagon:septagon,octagon:octagon};
let order = ['square','pentagon','hexagon','septagon','octagon'];

for(let j of triangle){
	let m=j;
	for(let k=0;k<order.length;k++){
		let l = find(result[order[k]],m);
		if(l){
			console.log(j,l);
			m=l;
		}else{
			order.push(order[k]);
		}
		if(k>16){
			break;
		}
	}
}
