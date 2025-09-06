//function within the function
function fun1(){
    console.log("hii");

    //call fun2
    fun2();

    //call fun3
    fun3();

}

function fun2(){
    console.log("vasavi");
}

function fun3(){
    console.log("learning");
}

fun1();