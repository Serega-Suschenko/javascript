//const studentGachimuchi = {
//  firstName: "Billy",
//  lastName: "Harington",
//  work: "Actor",
//  country: "USA",
//}
//function greet(){
//  return "Hello " + studentGachimuchi.firstName + " " + studentGachimuchi.lastName
//}

function Car(manufacture, model, color, releaseYear, fuelConnsumption, volume) {
  this.drive = function () {
    return "Едет";
  };
  
  this.manufacture = manufacture;
  this.model = model;
  this.color = color;
  this.releaseYear = releaseYear;
  this.fuelConnsumption = fuelConnsumption;
  this.volume = volume;
  if (fuelConnsumption) {
    return fuelConnsumption + "л/100км";
  }
}
const car1 = new Car("Mersedes", "E-class", "black", "2022", "3", "3");
