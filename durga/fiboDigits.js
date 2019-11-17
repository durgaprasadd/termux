let a=1;b=1;c=0;count=0;
for(let i=0;i<+process.argv[2];i++){
	c=a;
	while(c%10 == 0){
		count++;
		c=c/10;
	}
	a=b;
	b=c+a;
}
console.log(c%10,count,(''+c).length);
