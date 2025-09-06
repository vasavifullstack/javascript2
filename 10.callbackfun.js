//callback fun is fun can accept other functions as a parameter.
// anonmousfun as a parameter.

function getMyLocation(callbackfn){
    var test=callbackfn;
    test("vasavi");
}

getMyLocation(
    function(param1){
        console.log("hello world");
        console.log(param1);
    }
);