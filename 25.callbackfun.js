//callback fun refers to fun can accept other fun as a parameter.
//callback run once the main fun has finished.ability to manage 
// how the program procceeds.
//setTimeout is Predefined fun.which is used to execute set of 
// statements after sometime.
function car(){                    
    console.log("Mercedes Benz");
}
setTimeout(car,5000);  /// car is callbackfun passing as a argument

// two funs 
function student(callbackfn){    //student is a fun
    console.log("sreenu");
    callbackfn();

}
function employee(){             //employee is a callbackfun
    console.log("vasavi")

}
student(employee);
//

//named fun

function college(){    //student is a fun
    console.log("CBIT");
    

}
function education(callbackfn){             //employee is a callbackfun
    console.log("BTECH");
    setTimeout(callbackfn,3000);
    //callbackfn();

}
education(college);

//anonmous fun
function career(callbackfun){
    console.log("job");
    callbackfun();
}
career(function(){                       ///anonmous fun
    console.log("IT");
});                                                                                      
career(()=>{                          //arrow fun
    console.log("software engineering");
});

//passing parameter to the callbackfn

function educationdetails(batch,callbackfn){
    callbackfn(batch);
}
educationdetails("2023",(course)=>{
    console.log(course);
})