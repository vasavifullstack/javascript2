//async function always retutns promise.
//async as function keyword.it allow to use inside await.

//await only used inside async fun.it can pause the execution of the 
// function until the promise is resolved.it makes use to read and write.
//error handling by usind try and catch block

async function myname() {
    return "vasavireddy";
    resolve("success")
}
console.log(myname());
console.log(myname);
myname().then((x) => { console.log(x) });
myname().then((response) => { console.log(response); });
function job(){
    return new Promise((resolve)=>{
        console.log("Software engineering");
        setTimeout(()=>{
            console.log("skills");
            resolve();
        },3000)

    })
}
async function Engineering(){
    console.log("technical skills");
    console.log("HTML,Javascript,CSS");
}
job().then((response)=>{
    //console.log(response);
});
Engineering().then(()=>{

}); 

function sum(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(a+b);
        },4000)
    })
}
console.log(sum());
sum(10,20).then(resolve=>{console.log(resolve);})



function studentDetails(){
    return new Promise((resolve,reject)=>{
        console.log("vasavi details")
        setTimeout(function(){
            resolve("B.TECH");
            console.log("education background");
        },5000)
    })
}
async function placements(){
    return await studentDetails();
    //resolve1("course");

}
console.log(placements());
console.log(studentDetails());
studentDetails().then(resolve=>{console.log(resolve);})
