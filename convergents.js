let range = +process.argv[2];

const createArray = function(range){
	let result = [2];
	for(let i=1;i<=Math.floor(range/3);i++){
		result = result.concat(1,i*2,1);
	}
	return result;
}

console.log(createArray(range).length)
