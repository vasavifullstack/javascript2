//scope local and global
//var is a global 
//let is a local

var pinkColor="pink";
{
    let blueColor="blue";
    console.log(blueColor);
    console.log(pinkColor);
}

{
    let greenColor="green";
    console.log(pinkColor);
    console.log(greenColor);
}