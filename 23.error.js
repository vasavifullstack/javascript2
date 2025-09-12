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
//throw new error used to create an intentional error in try block
try{
    let customername="HTML";
    if(customername){
        customername =customername.toLowerCase();
        console.log(customername);

    }
    else{
        throw new Error("customer are not satisfy");
    }
}
catch(error){
    console.log(error);
}

try{
    let num="vasavi";
    if(num==even){
        console.log("even");

    }
}
catch(error){
    console.log(error.message);
}
