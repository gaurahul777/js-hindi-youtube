const score=400//typeof number by default js

//to explicitly define any number to number datatype we use as class

const balance=new Number(500)//typeof number object
console.log(balance);//number

//change num to string and use string method with it
console.log(balance.toString().length);

//decimal precision by toFixed method focus on values after point ie decimal

// console.log(balance.toFixed(3));

//toPrecision() method very interesting
const otherNumber=236.8966
// console.log(otherNumber.toPrecision(2));

//deal with hundred
const hundred=1000000;
// console.log(hundred.toLocaleString());
// console.log(hundred.toLocaleString('en-IN'));
//  Number.MIN_value()


//+++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.66));
console.log(Math.ceil(4.2));//jra sa bhi 4 se jyada hua to top value lega
console.log(Math.floor(4.9));//niche wali value

console.log(Math.min(3,5,8,1,11));//array k ander sabse min value jo hain same math.max

console.log(Math.floor(Math.random()*10)+1)//between 1 and 10


//formula to get values between particular number example 10 -20
const max=20
const min=10

console.log(Math.floor(Math.random()*(max-min + 1))+ min);