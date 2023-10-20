//immediately invoked function expressions (iife)
//1 jo func immediatley call hon

(function chai(){
    //named iife
    console.log('DB CONNECTED');
})();

//2  global scope ke pollution se problem hoti h kaii bar to us global scope ke jo variable hain unke pollution ko htane ke liye humne iife ka use kiya

//3 iife ko apko rokna bhi hota h thats why use semicolon at the end

//()() ==>first parenthesis for defintion and second for function call

//now create iife by arrow function

(()=>{console.log('DB CONNECTED TWO');})();

//with variable

((name)=>{
    console.log(`DB CONNECTED TWO ,${name}`);
})('hitesh');