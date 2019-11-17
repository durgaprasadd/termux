const MultiplyDigits=function(firstNumber,secondNumber){
  let product=[];
  for(let digit=firstNumber.length-1;digit>=0;digit--){
    let carry=0;
    product[digit]="";
    for(let pos=secondNumber.length-1;pos>=0;pos--){
      product[digit]=""+((+firstNumber[digit]*+secondNumber[pos]+carry)%10)+product[digit];
      carry=Math.floor((+firstNumber[digit]*+secondNumber[pos]+carry)/10);
    }
    product[digit]=""+carry+product[digit];
  }
  return product;
}
const CalculateSum=function(product){
  let zeroes="0"
  let result="";
  let sum=0;
  for(let index=product.length-2;index>=0;index--){
    product[index]=product[index]+zeroes;
    zeroes="0"+zeroes;
  }
  for(let digit=1;digit<=product[0].length;digit++){
    for(let index=0;index<product.length;index++){
      if(digit<=product[index].length){
        sum+=+product[index][product[index].length-digit];
      }
    }
    result=""+sum%10+result;
    sum=Math.floor(sum/10);
  }
  return result;
}
//let product=(MultiplyDigits("100","100"));
//console.log(product);
//console.log(CalculateSum(product));

const series = function(number,range){
	let a = ""+number;
	let b = a;
	for(let i=1;i<range;i++){
		a=MultiplyDigits(a,b);
		a=CalculateSum(a);
		console.log(i);
	}
	return a;
}
let d=[];
for(let j=1;j<1;j++){
	series(j,j);
	console.log(j);
}

let k=series(Math.pow(1000,5),2);
let l=series(k,2);
let m=series(l,2);
m=series(m,2);
m=series(m,2);
console.log(m);
for(let p=100;p<800;p*=2){
	m=series(m,2);
console.log(p);
	
}
console.log(m.length);

