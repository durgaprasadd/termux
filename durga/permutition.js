const createPermutitions = function(elements){
	let result=[];

	const factorial = function(number){
		let value=1;
		for(let pos=2;pos<=number;pos++){
			value*=pos;
		}
		return value;
	}

	let value=factorial(elements.length);

	for(let pos=0;pos<value;pos++){
		result.push([]);
	}

	for(let pos=0;pos<elements.length;pos++){
		let limit = factorial(elements.length-pos-1);
		let index=0;
		let i=0;
		while(i<value){
			while(result[i].includes(elements[index])){
				index=(index+=1)%elements.length;
			}
			for(let j=0;j<limit;j++){
				result[i].push(elements[index]);
				i++;
			}
			index=(index+=1)%elements.length;
		}
	}
	return result;
}
//console.log(createPermutitions(elements));

//const isPrime = function(i){
//	for(let f=3;f<=Math.sqrt(i);f+=2){
//		if(i%f==0){
//			return false;
//		}
//	}
//	return true;
//}
//
//let totalPrimes = [];
//for(let i=1001;i<9999;i+=2){
//	if(isPrime(i)){
//		let j=i.toString().split("");
//		k=createPermutitions([0,1,2,3]);
//		let list=[];
//		for(let l of k){
//			let array = [];
//			for(let m of l){
//				array.push(j[m]);
//
//			}
//			let prime = +array.join("");
//			if(isPrime(prime) && !list.includes(prime) && prime%2==1){
//				list.push(prime);
//			}
//		}
//		if(list.length>2){
//			totalPrimes.push(list);
//		}
//
//	}
//}
//
//for(let value of totalPrimes){
//	let list=[];
//	for(let i=0;i<value.length-1;i++){
//		for(let j=i+1;j<value.length;j++){
//			let k=Math.abs(value[i]-value[j]);
//			if(value.includes(value[i]+k) || value.includes(value[j]+k)){
//				console.log(value[i],value[j]);
//			}
//		}}
////	for(let i=0;i<list.length-1;i++){
////		for(let j=i+1;j<list.length;j++){
////			if(list[i]==list[j]){
////				console.log(list);
////				console.log(value);
////			}
////		}
////	}
//}

let value = (createPermutitions([1,2,3,4,5,6,7,8,9,10]));

for(let v of value){
	let j=v[0]+v[1]+v[2];
	let k=v[3]+v[2]+v[4];
	let l=v[5]+v[4]+v[6];
	let m=v[7]+v[6]+v[8];
	let n=v[9]+v[8]+v[1];
	if(j==k && k==l && m==n && l==m ){
		console.log(v[0],v[1],v[2],"\;",v[3],v[2],v[4],"\;",v[5],v[4],v[6],"\;",v[7],v[6],v[8],"\;",v[9],v[8],v[1],j);
	}
}
