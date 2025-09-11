//if else based on condition
var account=true;
if(account){
    console.log("i have bank account")
}
else{
    console.log("no account");
}
//chaining
let HDFCAccount=false;
let SBIAccount=true;
let AxisAccount=false;

if(HDFCAccount){
    console.log("HDFCAccount available");
}
else if(SBIAccount){
    console.log("SBIAccount available");
}
else if(AxisAccount){
    console.log("AxisAccount available")
}
//switch cases
let subject1="javascript";
let subject2="HTML";
let subject3="CSS";

let allsubject=subject1;

switch(allsubject){
    case subject1:{
        console.log("Javascript");
        break;
    }
    case subject2:{
        console.log("HTML");
        break;
    }
    case subject3:{
        console.log("css");
        break;
    }
    default:{
        console.log("nothing");
    }
}
