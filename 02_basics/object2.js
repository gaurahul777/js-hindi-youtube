//by oject constructor ie singleton
const tinderuser=new Object()

 tinderuser.id="123abc"
 tinderuser.name="sammy"
 tinderuser.isLoggedIn=false

// console.log(tinderuser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={obj1,obj2}//nested object
// console.log(obj3.obj1[1]);//if key is in number than we use square bracket

const obj4={...obj1,...obj2}
// console.log(obj4);

const obj5=Object.assign({},obj1,obj2,) //its also used to merge all object together and return new object//once goes copy hehee
// console.log(obj5);


//database se data aese aata hain

const users=[
    {
        id:1,
        email:"ram@gmail.com",
    },
    {
        id:2,
        email:"ram2@gmail.com",
    },
    {
        id:3,
        email:"ram3@gmail.com",
    },
]

// console.log(users[1].email);
console.log(tinderuser);

console.log(Object.keys(tinderuser));//data type aaray yha apne sari keys ko liya usew ek array me rkha aur ab chhaye to aap us per loop lga sakte hain same we do for object values

// console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));//jitni bhi entry h unka bhi ek array bn jayega array within array

//ask object ki tumhare pass yh wali property hain ya nahi

console.log(tinderuser.hasOwnProperty('isLoggedIn'));//true