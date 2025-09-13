//callback fun refer fun can accept other fun as a parameter.
//callback hell refers to multiple nested callback .to avoid promises
//or async/await for better readability and control.
function myName() {
    setTimeout(() => {
        var myName = "vasavireddy";
        console.log(myName);
        
    }, 5000)
}

function surName() {
    setTimeout(() => {
        var surName = "Yarramachu";
        console.log(surName);
        
    }, 2000)
}

function education() {
    setTimeout(() => {
        var education = "BTECH";
        console.log(education);
        
    }, 8000)
}
myName();
surName();
education();

function youTube() {
    var channel = "coding crackers";
    console.log(channel);
    setTimeout(() => {
        console.log("angular");
    }, 8000)
}
youTube();

