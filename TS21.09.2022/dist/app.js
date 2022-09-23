"use strict";
console.log("Starting");
let age = 12;
let firstName = "John";
//Errors
//age="12";
//firstName=55;
function addNumbers(x, y) {
  let result = x + y;
  return result.toString();
}
console.log(addNumbers(2, 55));
//------------------------------------
//class
class Students {
  constructor(firstName) {
    this.firstName = firstName;
  }
}
let std;
std = new Students("Ofer");
//array
let numbers = [];
numbers.push(std);
//tuples
let user;
user = [1, "Dan"];
//enum
var Size;
(function (Size) {
  Size["Small"] = "S";
  Size["Large"] = "L";
})(Size || (Size = {}));
let mySize = Size.Small;
//optional properties
let employees = {
  id: 2,
};
