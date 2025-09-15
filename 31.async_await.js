//async function always retutns promise.
//async as function keyword.it allow to use inside await.

//await only used inside async fun.it can pause the execution of the 
// function until the promise is resolved.it makes use to read and write.
//error handling by usind try and catch block

async function myname(){
    return "vasavireddy";
    resolve("success")
}
console.log(myname());
console.log(myname);
myname().then((x)=>{console.log(x)});
myname().then((response)=>{console.log(response);});






