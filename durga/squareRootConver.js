const add = function(a,b){
	let result=[];
	let carry=0;
	for(let i=0;i<Math.max(a.length,b.length);i++){
		let d=+a[a.length-i-1] || 0;
		let e=+b[b.length-i-1] || 0;
		let c=d+e+carry;
		result.push(c%10);
		carry=Math.floor(c/10);
	}
	if(carry>0){
		result.push(carry);
	}
	return result.reverse().join("");
}
const muti2 = function(num){
	let result=[];
	let carry=0;
	for(let i=num.length-1;i>=0;i--){
		let a=(+num[i]*2)+carry;
		result.push(a%10);
		carry=Math.floor(a/10);
	}
	if(carry>0){
		result.push(carry);
	}
	return result.reverse().join("");
}


//let a=''+3;
//let b=''+7;
//let d=''+2;
//let e=''+5;
//for(let i=3;i<1000;i++){
//	let c=muti2(b);
//	c=add(c,a);
//	let f=muti2(e);
//	f=add(f,d);;
//	a=b;
//	d=e;
//	b=c;
//	e=f;
//	if(c.length>f.length){
//		console.log(i);
//	}
//}

const isPanditFirst = function(a){
	let r=a.split("").slice(0,9);
	for(let i=1;i<10;i++){
		if(!r.includes(''+i)){
			return false;
		}
	}
	return true;
}

const isPanditLast = function(a){
	let r=a.split("").slice(a.length-9);
	for(let i=1;i<10;i++){
		if(!r.includes(''+i)){
			return false;
		}
	}
	return true;
}

let a='1';
let b='1';
for(let i=1;i<500000;i++){
	console.log(i);
	let c=a;
	a=b;
	b=add(a,c);
	if(isPanditFirst(c) && isPanditLast(c)){
	console.log(i);
		break;
	}
}
