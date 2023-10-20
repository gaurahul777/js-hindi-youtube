 //this is used to refer current context
 
 const user={
    username:"hitesh",
    price:99,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
    }
 }

user.welcomeMessage//referece
// user.welcomeMessage()

// console.log(this);//empty object in node environment and window global object in console

function chai(){
    const username="hitesh"
    console.log(this);
    console.log(this.username);//undefined aese dot me object ke ander use ker pa rha hu not in funtion

}
// chai()//now we get window object in function

const chai2=function(){
    const username="hitesh"
    console.log(this);//global context
    console.log(this.username);//undefined aese dot me object ke ander use ker pa rha hu not in funtion

}
// chai2()
const chai3=()=>{
    const username="hitesh"
console.log(this);
console.log(this.username);//undefined

}
chai3()

//arrow function talk

const add=(num1,num2)=>{return num1+num2}
console.log(add(3,4));

//arrow function me return keyword k bina return ker sakte hain lekin usme uske sath curly {} braces ko bhi htana hota h aur parenthesis() use isko ex:-

const add1=(num1,num2)=>(num1+num2)
console.log(add1(2,4));

//return object in arrow func without return keyword

const doct=()=>({user:"rahul"})
console.log(doct());//work perfectly