//call type refers how functions or operations are executed 
// in a program.flow of execution.
//synchronous call refers step by step execution .task runs sequentially.
//after completion of task moves to another task.

//asynchronous call execute the tasks run independently without waiting
//like parallel.
function sleep(){
    let startDateTime =new Date().getTime();
    let endDateTime = startDateTime +5;
    while(new Date().getTime()<endDateTime){
        console.log("processing");
    }
}
function appLink(){
    sleep();
    console.log("app link for downloading");
    
}
function appDownload(){
    console.log("download completed");
}
function appOpen(){
    console.log("open the app");
}
appLink();
appDownload();
appOpen();

