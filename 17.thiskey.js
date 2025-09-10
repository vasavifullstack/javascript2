//global context this refers to window
var sname=["vasavi","sreenu","siva"];
var addValues =function(){
    return sname;
}
console.log(this);

//instead of var keyword this keyword is used Same output
this.sname1=["vijaya","vasavi"];

//object context accepting within its own object or itself
//var subject =["html","css","javascript"];
var obj={
    sname :"vasavi Yarramachu",
    DOB :11/03/2002,
        addvalues :function(){
        console.log(this);
        //console.log("subject",this.subject);

    }

}
obj.addvalues();

//constructor function refers to new object being creating.
//by using new keyword object is created.
 function subValues(){
    this.sname=["vasavi","sreenu"];
    console.log(this);
 }
 new subValues();    //which refers  function


 //arrow function not have their own this.they inherit from parent scope at the
 //time they are defined.
// arrow function refers global context
var obj ={
    sname :"vasavi",
    age :23,
    getDetails :()=>{
        let localthis =this;
        console.log(this.sname);
        console.log(this.age);
    }
}
obj.getDetails();

console.log("vasavi");