//symbol is for uniqueness

const id=Symbol('123')
const id2=Symbol('123')

console.log(id==id2)//fa;se

const bigNumber=509095095499499494449448n;
console.log(typeof bigNumber);

//n lga ker bigint bna do and decimal ko bbhi number bolengye idhr

// function ka datatype function object hota h but in console fuction aata h

const myobj={
    name:"rahul",
    age:190,
}
console.log(typeof myobj);//object