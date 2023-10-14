const marver_heros=["ironman","thor","black panther"]
const dc_heros=["batman","flash","superman"]

// marver_heros.push(dc_heros)
// console.log(marver_heros);//array within an array
// console.log(marver_heros[3][2]);

const newarray=marver_heros.concat(dc_heros)//return new array
// console.log(newarray);//get merged array

const all_heroes=[...marver_heros,...dc_heros]
// console.log(all_heroes);

const another_array=[1,2,3,[4,5,6],7,[6,7,[5,9]]]
// const real_another_array=another_array.flat(1)
//depth kitni bhi le sakte ho acc to need agr nhi smjh aaye to infinity ka use ker sakte ho
const real_another_array=another_array.flat(Infinity)

// console.log((real_another_array));

// console.log(Array.from("hiteshsirji"));//yeh function sabhi ko array bna deta hain object string kuch bbi

// console.log(Array.isArray("hiteshsirji"));//false bcz ye string h

// console.log(Array.from({name:"rahul"}));//[]
let score1=100
let score2=200
let score3=300
// console.log(Array.of(score1,score2,score3)); //takes set of items to create or return a new array

let myarr=[1,2,3,4,5]
let [v1,v2,...v3]=myarr
console.log(v1,v2,v3)
