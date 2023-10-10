//symbol is for uniqueness

const id=Symbol('123')
const id2=Symbol('123')

// console.log(id==id2)//fa;se

const bigNumber=509095095499499494449448n;
// console.log(typeof bigNumber);

//n lga ker bigint bna do and decimal ko bbhi number bolengye idhr

// function ka datatype function object hota h but in console fuction aata h

const myobj={
    name:"rahul",
    age:190,
}
// console.log(typeof myobj);//object




// +++++++++++++++++++++++++++++++++++++

// let arr1=["orange","apple"]
// let arr2=arr1.slice(0)
// let arr2=[].concat(arr1)
// let arr2=[...arr1]
// let arr2=arr1
// let arr2=["orange","apple"]
// arr1[0]="mango"
// console.log(arr1==arr2);
// console.log(arr1[0]);
// console.log(arr2[0]);



let fruits=[1,2,3,4]
console.log(fruits);
fruits=[1,2,3,4,5,6,7,8]//not acceptable in const value not change 
console.log(fruits);