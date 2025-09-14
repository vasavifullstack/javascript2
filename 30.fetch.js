//fetch() is a built-in fun.it can handle http request like GET,POST.
//it return a promise.then is to get response from http request.
//fetch(url)
//.then(response =>{

//})
//.catch(err =>{

//})


fetch("https://jsonplaceholder.typicode.com/users")
.then(response =>{
    console.log(response);
})

fetch(`https://platform.veevavault.help/en/lr/53199/#:~:text=Copy%20Link%20creates%20a%20permalink,location%2C%20such%20as%20an%20email`)
.then(response =>{
    console.log("result visible");
    console.log(response);

})
.catch(err =>{
    console.log("error result");
})
//json() method used to return promise

fetch("https://jsonplaceholder.typicode.com/users")
.then(response =>{
    //
    
    console.log(response);
    console.log(response.json());
})
