let isPandit = function(num){
	num=""+num;
	num=num.split("");
	let length = num.length;
	for(let i=1;i<length;i++){
		let j=num.splice(0,1);
		if(num.includes(j[0]) || num.includes('a')){
			return false;
		}
	}
	return true;
}

//let result=[];
//for(let i=1;i<99;i++){
//	for(let j=99;j<99999;j++){
//		let k=i*j;
//		if(isPandit(i)&&isPandit(j)&&isPandit(k)){
//			let m=''+i+j+k;
//			if(m.length>8 && isPandit(m)){
//				result.push(k);
//				console.log(i);
//			}
//		}
//	}
//}
//console.log(result);
//let t=[];
//let sum=0;
//for(let value of result){
//	if(!t.includes(value)){
//		t.push(value);
//		sum+=value;
//	}
//}
//console.log(t,sum);


//for(let i=1;i<999999;i++){
//	let sum=''+i
//	for(let j=2;j<99;j++){
//		sum+=i*j;
//		if(!isPandit(sum)){
//			break;
//		}
//		if(sum.length==9){
//		console.log(i,j,sum);
//		}
//	}
//}

//const digit = function(num,d){
//	for(let i=0;i<10;i++){
//		let j=num%100;
//		j=''+j+i;
//		j=+j;
//		if(j%d==0&&isPandit(j)){
//			return i;
//		}
//	}
//}
//let result=[];
//for(let i=0;i<10;i++){
//	for(let j=012;j<988;j++){
//		let k=''+i+j;
//		if(j%2==0 && isPandit(k)){
//			for(let l=0;l<10;l++){
//				let m=j%100;
//				m=''+m+l;
//				m=+m;
//				k=''+i+j+l;
//				if(m%3==0 && isPandit(k)){
//					for(let n=0;n<10;n++){
//						let o=m%100;
//						o=''+o+n;
//						o=+o;
//						k=''+i+j+l+n;
//						if(o%5==0 && isPandit(k)){
//							for(let p=0;p<10;p++){
//								let q=o%100;
//								q=''+q+p;
//								q=+q;
//								k=''+i+j+l+n+p;
//								if(q%7==0 && isPandit(k)){
//									for(let r=0;r<10;r++){
//										let s=q%100;
//										s=''+s+r;
//										s=+s;
//										k=''+i+j+l+n+p+r;
//										if(s%11==0 && isPandit(k)){
//											console.log(s,k);
//											for(let t=0;t<10;t++){
//												let u=s%100;
//												u=''+u+t;
//												u=+u;
//												k=''+i+j+l+n+p+r+t;
//												if(u%13==0 && isPandit(k)){
//													for(let v=0;v<10;v++){
//														let w=u%100;
//														w=''+w+v;
//														w=+w;
//														k=''+i+j+l+n+p+r+t+v;
//														if(w%17==0 && isPandit(k)){
//															result.push(k);
//														}}}}}}}}}}}
//			}
//		}
//	}
//}
//
//let sum=0
//for(let value of result){
//	let a=value.split("");
//	if(value.length==10){
//		console.log(value);
//		sum+=+value;
//	}
//}
//console.log(sum);

for(let i=2;i<1000;i++){
	let j=Math.pow(10,9)-1;
	if(j%i==0){
		let k=j/i;
		if(isPandit(k)){
			console.log(i);
		}
	}
}
