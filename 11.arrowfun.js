//function creation and calling
function Message1() {
    console.log("Misard training");

}
Message1();

//assigning fun to the variable
var Message2 = function () {
    console.log("Learning");
}
Message2();

//arrow func no need function name

var Message3 = () => {
    console.log("vasavi");
}
Message3();

var Message4=(param1,param2)=>{
     console.log("hii guys");
     console.log("html course");
     console.log(param1);
    console.log(param2);
}

Message4("Javascript", "CSS");