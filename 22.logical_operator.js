//&&, ||,!

//t && t --true
//t && f-- false
//f && t --false
//f && f --false

//t || t --true
//t || f --true
//f || t --true
//f || f -- false
if((1==1) &&(2==2)){
    console.log("true");
}
else{
    console.log("false");
}
if((1==1)&&(2==1)){
    console.log("true");
}
else{
    console.log("false");
}

console.log((1==1)||(2==2));
console.log((1==1)||(1==2));
console.log((2==1)||(1==1));
console.log((1==2)||(2==1));