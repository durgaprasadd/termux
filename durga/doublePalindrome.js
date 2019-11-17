let result=0;
for(let a=0;a<1000000;a++){
	d=""+a;
	rd=d.split("").reverse().join("");
	b=a.toString(2);
	rb=b.split("").reverse().join("");
	if(d==rd && b==rb){
		console.log(d,b);
		result+=a;
	}
}

console.log(result);
