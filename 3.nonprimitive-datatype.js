// array= collection of values.values can be anything []

//checkbox true or false

var name = "vasavi";
console.log(name);

let subjects = [10, 20, 30, 40];
console.log(subjects);

//multiplevalues in array

let multivalues = ["vasavi", "reddy", "10", "true"];
console.log(multivalues);

let studentslist = [{
    "studentname": "vasavi",
    "  location ": "kogatam",
    "age": "22"
},
{
    "studentname": "sreenu",
    "location": "kogatam",
    "age": "21"
}]
console.log(studentslist);
//object is collection key and value pairs.key should be unique.

let personal_details = {
    "name1": "vijaya",
    "DOB": "11-03-2002",
    "Married": "true",
    
    "kids": {
        "firstkid": "vasavi",
        "secondkid": "sreenu"
    }
}
console.log(personal_details);
console.log(personal_details.kids.firstkid);    //vasavi
console.log(personal_details.Married);   //true
