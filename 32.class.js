//class is special type of fun.it collect the group of relative members.
//method-if a fun defined in class then the fun called method.
//dont declare fun keyword when fun in the class.just fun name use.
//four members
//constructor-automatically trigger when call the class by using "new" operator.
//properties-declare the variables for handling the data.like get,set
//methods-reference of the class or will be trigger by object of the class.
//fields-which can hold the data.
//by "new" keyword to call the class.only one contructor in the class

class Bank
{
    accountNum="123";
    accountName="vasavireddy";
    bankBalance="1,00,000";
constructor(){                                     //constructor creation
    
    console.log("bankaccount available");
    console.log("accountName :",this.accountName);

}
bankDetails(){                                      //method creation
    console.log("bankname is :HDFC");
    console.log("accountNum :",this.accountNum);
}
bankAccount(){
    console.log("bankBalance:",this.bankBalance);
}
}
new Bank();                //class calling automatically call the constructor
//instances of class is an object.to call the members.
let bank =new Bank();          //to call the method.
bank.bankDetails();
let bankAccount1= new Bank();
bankAccount1.bankAccount();
//document.writeln(bankAccount1);

class Employee
{
    empName="sreenu";
    empId="666";
    empSalary ="50,000";
    age="23";
    phoneNum;                             //field
constructor(Number)
{
    this.phoneNum=Number;
    console.log("empSalary:",this.empSalary);
}
empDetails()
{
    console.log("age:",this.age);
}

}
//new Employee();
let age =new Employee("34556");
age.empDetails();
console.log(age);
//console.log(Number);
//let employee =new Employee();



