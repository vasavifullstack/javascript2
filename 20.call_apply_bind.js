//call,apply and bind methods of function
//create object is key value pair

//call  method used to invokes the fun "this" provide value and any extra 
// arguments passed individually

// apply like call method but i#takes array of arguments instead of passing them individually.

//bind dont immediately call the fun.instead it return a new fun
//with "this".bind method used in object to call.

var empDetails={
    empname:"vasavi",
    empnumber:"56565",
    age:"23",
    empskills:"javascript",
    getempDetails:function(argu1,argu2){
        //this.empskills=javascript;
        console.log(this);
        console.log(this.empname);
        console.log(argu1);
        console.log(argu2);
    }
}
console.log(empDetails.getempDetails());
//another object
var empDetails1={
    empname:"sreenu",
    empnumber:"34345",
    age:"21"
}
empDetails.getempDetails.call(empDetails1,"10","2002");
//call can pass objects and also individual parameters
empDetails.getempDetails.apply(empDetails1,["50","2005"]);
//apply like array arguments
//bind used for return the new fun
console.log(empDetails.getempDetails.bind(empDetails1,"10","2002"));
let newempDetails1 =empDetails.getempDetails.bind(empDetails,40,2005);
newempDetails1();
 