//looping repeats block of code until it meets condition
//for loop refers repeats a block of code at specific number of times.
//for ..of loop used in array or string to repeate the values.
//for..in loop iterates over the properties of an object.
//while loop same as for loop but specific condition.
//do-while loop same as while loop but the block of code runs atleast 
// once respective of condition

for (a = 10; a < 20; a++) {
    console.log(a);
}
//for..of
//for(variable of iterable){
//code
//}
var colornum=0;
var color = [
    { colornum: 1, colorname: "pink" },
    { colornum: 2, colorname: "blue" },
    { colornum: 3, colorname: "grey" },
    { colornum: 4, colorname: "black" },
    { colornum: 5, colorname: "white" }
]
for (var colors of color) {
    console.log(`${colors.colorname}`);
    console.log(`${colors.colornum}`);
    if (colors.colorname == "pink") {
        console.log("pink is available");
    }
}


//for..in
//for(variable in object){
//code
//}

var empDetails = {
    empId: "123",           //property name:property values
    empname: "vasavi",
    age: "23",
    location: "kogatam",
}

for (var emplist in empDetails) {
    console.log(`${emplist}`);
    console.log(`${empDetails[emplist]}`)

}
//
//var b = 5
//while (b <= 10) {                  //it executes until it is false{
    //console.log(b);
//}
var count=10;
while(count<=20)
{
    console.log(count);
    count=count+1;
}
var count1=5
do{
    console.log(count1);
    count1=count1+1;
}while(count1<=25)