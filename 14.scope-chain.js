//scope parent block can access all child block 
//but child block can not access the parent block

{
    var fruit1="Apple";
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
    {
        var fruit2="Mango";
        console.log(fruit2);
        {
            var fruit3="Grapes"
            console.log(fruit3);
        }

    }

}