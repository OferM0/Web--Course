console.log("Starting");

let age: number = 12;
let firstName: string = "John";

//Errors
//age="12";
//firstName=55;

function addNumbers(x: number, y: number): string {
  let result = x + y;
  return result.toString();
}

console.log(addNumbers(2, 55));

//------------------------------------

//class
class Students {
  firstName;
  constructor(firstName: string) {
    this.firstName = firstName;
  }
}

let std: Students;
std = new Students("Ofer");

//array
let numbers: Students[] = [];
numbers.push(std);

//tuples
let user: [number, string];
user = [1, "Dan"];

//enum
enum Size {
  Small = "S",
  Large = "L",
}
let mySize = Size.Small;

//optional properties
let employees: {
  id: number;
  name?: string; //optional- not must
} = {
  id: 2,
};
