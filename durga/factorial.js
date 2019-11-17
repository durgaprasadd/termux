let range = +process.argv[2];
let result = 1;
for(let index = 1; index<range+1; index++){
	result*=index;
}
console.log(result);
