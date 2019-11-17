let filledline = function(n){
	return new Array(n).fill("*").join("");
}

let space = function(n){
	return new Array(n).fill(" ").join("");
}

let tri = function(h){
	return function(e){
		return filledline(e)+space(h-e);
	}
}
let reverse = function(a){
	return a.split("").reverse().join("");
}

let counter = function(n){
	return function(){
		return n++;
	}
}

const Triangle = function(h){
	let array = new Array(h).fill(1);
	array = array.map(counter(1));
	return array.map(tri(h));
}

const leftTri = function(h){
	let triangle = Triangle(h);
	return triangle;
}
const rightTri = function(h){
	let triangle = Triangle(h);
	return triangle.map(reverse);
}

const filled = function(h,w){
	let array=new Array(h).fill(w);
	return array.map(filledline)
}

const combineBoth = function(list1,list2){
	let result=[];
	let limit=list1[0].length+1;
	for(let i=0;i<list1.length||i<list2.length;i++){
		let a=list1[i]||'';
		let b=list2[i]||'';
		let c=a+space(limit-a.length)+b;
		result.push(c);
	}
	return result;
}

const combineAll = function(list){
	let collection = list[0];
	for(let i=1;i<list.length;i++){
		collection = combineBoth(collection,list[i]);
	}
	return collection;
}
const flip = function(array){
	let result=[];
	for(let v of array){
		result.push(v.map(reverse))
	}
	return result;
}

const mirror = function(array){
	let result=[];
	for(let v of array){
		result.push(v.reverse());
	}
	return result;
}

const main = function(){
	let result=[];
	let obj={'right':rightTri,'left':leftTri,'filled':filled};
	let spe={'flip':flip,'mirror':mirror};
	let i=2;
	let count=0;
	if(Object.keys(spe).includes(process.argv[2])){
		i+=1;
		count=1;
	}
	for(;i<process.argv.length;i+=2){
		if(process.argv[i]=='filled'){
			result.push(obj[process.argv[i]](+process.argv[i+1],+process.argv[i+2]))
			i++;
		}else{
		result.push(obj[process.argv[i]](+process.argv[i+1]));
		}
	}
	if(count==1){
		result=spe[process.argv[2]](result);
	}
	console.log(combineAll(result).join("\n"));
}
main();
