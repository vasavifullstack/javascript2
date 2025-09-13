//promise  is an object.by use new keyword promise  .
//New Promise((resolve,reject)=>{ //executor function is resolve,reject.
//})argument as executor fun 
//.then allow chaining.like accept resolve parameter.
//.catch allow reject parameter.


function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("i am register for test");
            resolve("success")
        }, 8000)
    })
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login with usermailID");
            reject("reject")
        }, 3000)
    })
}

register().then((data) => { console.log(data) }).catch((err) => console.log(err))
login().then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login with usermailID");
            reject("reject")
        }, 3000)
    })
}
login().then((data) => { console.log(data) }).catch((err) => { console.log(err) })

function relogin(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("relogin successfully");
            resolve("success")
        },6000)
    })
}
relogin().then((data)=>{console.log(data)})
//register().then(login()).then(relogin())