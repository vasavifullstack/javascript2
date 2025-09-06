//function return type and non-return type
//function which returns the data called the return type function.
//function which don't return the data called non return type function.

//return type function

function name(){
    return "vasavi";
}
console.log(name());

let name1=name();
console.log(name1);

//non -return type or void functions both are same

function fun(){
    console.log("hii vasavi")
}
fun();

function getSubject(){
    let subjectNames=["HTML","js","CSS"]
    return subjectNames;
}
getSubject();

let data=getSubject();
data[3]="angular"
console.log(data);