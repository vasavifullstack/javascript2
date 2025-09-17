//local storage- is a web storage API that allow web application to store
//data in the browser.it persists even after closes the window or tab.
//it can clear only when manually remove the data.perment storage.
//ex -theme settings,cached application data.
localStorage.setItem("studentName","vasavireddy");
localStorage.setItem("studenteducation","B.TECH");
localStorage.setItem("studentID","12334");

//localStorage.removeItem("studenteducation");
//localStorage.removeItem("studentName");
//localStorage.clear();
console.log(localStorage);

//session storage-is temporary .it cleared when close the tab or window.

sessionStorage.setItem("empName","Ram");
sessionStorage.setItem("empID","6666");
sessionStorage.setItem("empSalary","1,00,000");


sessionStorage.removeItem("empID");
//sessionStorage.clear();
console.log(sessionStorage);





