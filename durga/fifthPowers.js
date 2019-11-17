let result=[];
for(let a=2;a<3550000;a++){
	i=""+a;
	sum=Math.pow(+i[0],5)+Math.pow(+i[1],5)+Math.pow(+i[2],5)+Math.pow(+i[3],5)+Math.pow(+i[4],5);
	if(sum==a){
		result.push(a);
	}
}
console.log(result);
