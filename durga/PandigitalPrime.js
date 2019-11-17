let numbers=[1,2,3,4,5,6,7,8,9];
const create = function(result){
	for(let a=0;a<numbers.length;a++){
		if(!result.includes(numbers[a])){
			result.push(numbers[a]);
		if(result.length<9){
			create(result);
		}
	}}
	return result;
}

let result=[];
console.log(create(result));
