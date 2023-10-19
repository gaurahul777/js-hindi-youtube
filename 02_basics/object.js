//object creted by 2 way  1.literls   2.constructor 

//singleton
// literals se bnega to singleton nhi hain ab iske multiple instance bn jate h
// constructor se bnega tab singleton hoga mtlv y apne trh ka ek he object h

//object literls

//symbol declare
//question: ek symbol lo usew object ki keys me add kero aur print ker ke dikha do
const mySym=Symbol("key1")

const jsuser={
    name:"rahul",
    "full name":"rahul gaur",
    // mySym:"mykey1",//symbol aese direct use nhi ker sakte h obj me 
    [mySym]:"myactualsym",
    age:18,
    location:"jaipur",
    email:"rahul@gmail.com",
    isLoggedIn:false,
    lastLogininDays:["monday","saturday"]
}

// console.log(jsuser.email);

// console.log(jsuser[email]);//error:-- behind the scene yeh email ek string ki trh rkha ja rha hain to isew double quotes me rkho
 
// console.log(jsuser["email"]);
// console.log(jsuser.full name);//not access by dot
// console.log(jsuser["full name"]);

//symbol//

// console.log(jsuser.mySym);
// console.log( typeof jsuser.mySym);//string


// console.log(jsuser.mySym);//undefined
// console.log( typeof jsuser.mySym);//undefined


// console.log(jsuser[mySym]);
//  console.log( typeof jsuser[mySym]);//mysym k pass string h

//update object
jsuser.email="rahulgaur1711@gmail.com"
// console.log(jsuser);

// Object.freeze(jsuser)//ab iske baad me koi bhi is user me change nahi ker payega bcz humne is object ko freeze krr diya ab koi bhi change propogate nahi hongye
// jsuser.email="rahulevil1711@gmail.com"
// console.log(jsuser.email);//no changes reflected

//add in oject
jsuser.location="veterinery"
jsuser.greeting=function(){
    console.log("hello js user");
}
jsuser.greetingTwo=function(){
    console.log(`hello js ${this.email}`);
}

// console.log(jsuser.greeting);//func not execute bs uska reference aaya h

//  console.log(jsuser.greeting());//execute + output
 console.log(jsuser.greetingTwo());
