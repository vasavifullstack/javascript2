var signalName="wi-fi";
function room1()
{
    let room1FanStatus="very Fast";
    console.log("room1-global scope",signalName);
    console.log("room1",room1FanStatus);
    //console.log("room2",room2FanStatus);
}

function room2()
{
    let room2FanStatus="very Slow";
    console.log("room2-global scope",signalName);
    console.log("room2",room2FanStatus);
   // console.log("room1",room1FanStatus);

}

room1();
room2();