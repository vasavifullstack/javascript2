//debugger -monitoring the value or data at particular point of code.
//Debugger or break points -2 techniques.
//f8-resume the code.
//f10-stepover the next line.
//f11-stepinto the function call
//shift+f11-stepout for that function.
//how javascript compiler executed our code.
//debugger will be trigger during execution of code.

// let foodItem="Pizza";
// console.log(foodItem);
// foodApp("vasavi");
// OrdersApp("TCS-OrderCount is 10");
// debugger;

// let deliveryLoc="Hyderabad";
// console.log(deliveryLoc);
// debugger;

// let estTime="10 mins";
// console.log(estTime);

//debugger

// let isDelAvailable =false;
// console.log(isDelAvailable);

// function foodApp(customerName){
//     let item ="CB";
//     console.log(item);
//     console.log(1);
//     console.log(2);
//     console.log(3);
// }

// function OrdersApp(status){
//     let itemCount =10;
//     console.log(itemCount);
// }

var number1=10;
console.log(number1);
debugger;

var number2=2;
console.log(number2);
debugger;

function div(number1,number2){
    let remainder=number1%number2;
    return remainder;
}
let result=div(number1,number2);
debugger;
if(result==0){
    console.log("even numvber");
}else{
    console.log("odd number");
}

function add(number1,number2){
    let addNum=number1+number2;
    return addNum;
}
debugger;
 let result1=add(number1,number2);
 console.log(result1);