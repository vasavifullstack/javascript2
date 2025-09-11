var bankaccount="";
function bank(bankname,location){
    console.log(this);
    bankaccount=[bankname,location];
}
bank("HDFC","proddatur");
console.log(bankaccount);

//function pre building of the property is length,name,prototype,arguments
function accountDetails(accountnumber,IFC){

}
    console.log(accountDetails.name);
    console.log(accountDetails.length);
    console.log(accountDetails.arguments);


//prototype is a property function(constructor fun) used to inheritance and 
//share the methods among instances created bt that function when its is used as a constuctor.
function car(brand,model,color){
    console.log("KIA");
    
    this.brand="Benz";
    this.model="Mercedes";
    this.color="black";
    console.log(this);
}
//prototype is used to share the methods.it is a property in function
//rectangle symbol is a property.
//getCarInfo is method .it share to function.
car.prototype.getCarInfo=function(){
    console.log("KIA is shelters");
    console.log(this);
}
let newcar=new car();//object8
newcar.getCarInfo();

function car(brand,model,color){
    console.log("KIA");
    
    this.brand=brand
    this.model=model
    this.color=color
    console.log(this);
}
//prototype is used to share the methods.it is a property in function
//rectangle symbol is a property.
//getCarInfo is method .it share to function.
car.prototype.getCarInfo=function(){
    console.log("KIA is shelters");
    console.log(this);
}
let newcar1=new car("Benz","Mercedces","black");//object8
newcar.getCarInfo();