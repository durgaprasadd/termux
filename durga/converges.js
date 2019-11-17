let r=[];
for(let i=1;r.length<98;i++){
	r.push(1,2*i,1);
}
console.log(r.length);
let a=0;
let b=r[3];
for(let i=3;i>0;i--){
	a=1/b;
	b=a+r[i-1];
}
console.log(1/a);


