const mydate=new Date()
// console.log(mydate);//output not readable as mush 2023-10-10T18:10:30.366Z

//now convert it to string

// console.log(mydate.toString())
//output Tue Oct 10 2023 18:12:44 GMT+0000 (Coordinated Universal Time)

// console.log(mydate)
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());

// console.log(typeof mydate)

// let myCreatedDate=new Date(2023,0,23)
// let myCreatedDate=new Date(2023,0,23,5,3)
let myCreatedDate=new Date("01-14-2023")


// console.log(myCreatedDate);
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toLocaleDateString());
//console.log(myCreatedDate.getTime());


let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(myTimeStamp/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


//more customization in tolocalstring
console.log(newDate.toLocaleString('default',{
    weekday:"long"
    // timeZone:"",
}))
