//all basic part 1

//rest operator or spread

const calculateCartPrice=function(...num) {
    return num
}

// console.log(calculateCartPrice(2,4,7));//return array

const user={
    username:"hitesh sir",
    price:199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)
// handleobject({username:"rahul",price:200})

const myArray=[200,400,100,600]

function returnSecondValue(getArray){
    // return getArray[1];
    console.log(getArray[1]);
}
returnSecondValue(myArray)

returnSecondValue([100,200,300,400])
