//object,array and function
var student = {
    name: "vasavi",
    DOB: "Mar 11,2002",
    subject: ["HTML", "Javascript", "CSS"],
    getStuLocation: function () {
        return "Kogatam"
    }
}
console.log(student);
console.log(student.getStuLocation());

//lower case into uppercase

var name1 = "angular";
var stringLen = name1.length;
console.log(stringLen);

var name2 =".net";
var upperCaseName1 = name1.toUpperCase();
var upperCaseName2 = name2.toUpperCase();
console.log(upperCaseName1);
console.log(upperCaseName2);

//uppercase into lowercase and trim means removing white spaces

var name3="JAVA SCRIPT";
var lowerCaseName1 = name3.toLowerCase();
var trimString1 =name3.trim();
var stringlen1 =name3.length;
var stringlen2 = trimString1.length;
console.log(trimString1);
console.log(lowerCaseName1);
console.log(stringlen1);
console.log(stringlen2);

var names=["vasavi","sreenu","vijaya","sivareddy"];
var reversenames = names.reverse();
console.log(reversenames);

var Name1= "hii";
var Name2= "employees";

var Name3 =Name1.concat(Name2);
console.log(Name3);

