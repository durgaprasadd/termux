let result="";
for(let a=0;result.length<1000009;a++){
	b=""+a;
	result+=b;
}

for(let i=0;i<7;i++){
	j=Math.pow(10,i);
	console.log(result[j]);
}

