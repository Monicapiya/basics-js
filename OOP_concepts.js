
/*
The ability of instances to derive their properties and function from their parent classes is known as ploymorphism 

OOP brings modularity and structure to application desgin 

promotes resuablity

Objects can be created using two ways – an object literal an object constructor.

the new keyword is used to create object instances in Javascript.

Javascript is prototype based object orient language. It does not has classes. It define behaviours using constructor function and then reuse it using the prototype

*/


const vehicle= function(model, color, transmission, engine) {
  this.model = model;
  this.color = color;
  this.transmission = transmission;
  this.engine = engine;
  
  this.isRunning = false;
  this.ignition = function () {
  this.isRunning = !this.isRunning;
  return this.isRunning ? 'Ignition On' : 'Ignition Off';
  };
  
  this.accelerate = function () {
  return this.isRunning
  ? `${this.model} is accelerating`
  : `${this.model} is not running`;
  };
  
  this.deccelerate = function () {
  return this.isRunning
  ? `${this.model} is deccelerating`
  : `${this.model} is not running`;
  };
  
  };
  
  const Civic = new vehicle('Honda Civic', 'Red', 'AMT', '60hp');
  
  console.log(Civic.model);
  console.log(Civic.ignition());
  console.log(Civic.ignition());
  console.log(Civic.accelerate());
  
  //Subclass
  
  const Sedan = function(model, color, transmission, engine) {
  this.wheels = 4;
  vehicle.call(this, model, color, transmission, engine);
  };
  
  Sedan.prototype = Object.create(vehicle.prototype);
  Sedan.prototype.constructor = Sedan;
  
  //Subclass 
  
  const Truck = function(model, color, transmission, engine){
  this.wheels = 18;
  vehicle.call(this, model, color, transmission, engine);
  };
  
  Truck.prototype = Object.create(vehicle.prototype);
  Truck.prototype.constructor = Truck;
  
  //Instance 
  
  const CivicSedan = new Sedan('Honda Civic', 'Red', 'AMT', '60hp');
  console.log(CivicSedan.__proto__.__proto__.__proto__);
  
  //Instance 
  
  
  const Volvo = new Truck('Volvo Civic', 'Black', 'I-Shift', '700hp');
  
  console.log(Volvo.wheels);
  console.log(Volvo.ignition());
  console.log(Volvo.ignition());
  console.log(Volvo.accelerate());
  
  
  /*
Output:

'Honda Civic'
'Ignition On'
'Ignition Off'
'Honda Civic is not running'
vehicle {
  __proto__: { constructor: ƒ vehicle() }
}
ƒ Sedan()
vehicle {
  __proto__: { constructor: ƒ vehicle() }
}
ƒ Truck()
[Object: null prototype] {}
18
'Ignition On'
'Ignition Off'
'Volvo Civic is not running'

*/


