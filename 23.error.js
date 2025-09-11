let age=30;
let sname;
try{
    let uppercase=sname.toUpperCase();
    console.log(uppercase);
}
catch(error){
    console.log(error);
}
finally{
    console.log("final");
}