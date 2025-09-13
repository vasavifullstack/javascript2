//callbackhell refers to situation .where multiple nested callback fun
//create like pyramid.disadv to read,understand,and maintain.
// function1(function(){
//     function2(function(){
//         function3(function(){

//         });
//     });
// });

function Day1(callbackfn){
    console.log("sunday");
    callbackfn();
}
function Day2(callbackfn){
    console.log("Monday");
    callbackfn();
}
function Day3(callbackfn){
    console.log("Tuesday");
    callbackfn();
}
function Day4(callbackfn){
    console.log("Wednesday");
    callbackfn();
}
function Day5(callbackfn){
    console.log("Thursday");
    callbackfn();
}
function Day6(callbackfn){
    console.log("Friday");
    callbackfn();
}
function Day7(){
    console.log("Saturday");
}

Day1(()=>{
    Day2(()=>{
        Day3(()=>{
            Day4(()=>{
                Day5(()=>{
                    Day6(()=>{
                        Day7();
                    });
                });
            });
        });
    });
});

//sleep() to stop process at sometime

function sleep(milliSeconds){
    var startDateTime = new Date().getTime();
    var endDateTime =startDateTime + milliSeconds;
    while(startDateTime < endDateTime){
        console.log("processing");

    }
}

function applyTest(callbackfn){
    sleep(5000);
    console.log("I am applying for test");
    callbackfn();
}
function testLink(callbackfn){
    sleep(3000);
    console.log("generating test link");
    callbackfn();
}
function interview(callbackfn){
    sleep(6000);
    console.log("interview schedule");
    callbackfn();
}
function offerLetter(callbackfn){
    console.log("generating offerletter");
    callbackfn();
}
function JoiningDate(){
    console.log("onboarding");
    
}
applyTest(()=>{
    testLink(()=>{
        interview(()=>{
            offerLetter(()=>{
                JoiningDate();
            });

        });

    });

});
