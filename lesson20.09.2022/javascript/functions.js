/*
//function sum(a, b) {
//  if (a === undefined || b === undefined) {
//    return 0;
//  }
// return a + b;
//}

function sum(a = 0, b = 0) {
  return a + b;
}
let result = sum();
console.log(result);
result = sum(4, 2);
console.log(result);

function many(...args) {
  console.log(args);
}
many(2, 6, 2, "fg", "h");
*/

//----------------------------------------------------------------

/*
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName() {
    console.log(this.firstName);
    console.log(this.lastName);
  },
  set newName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName();
person.firstName = "ronald";
person.fullName();
person.newName = "dan din";
person.fullName();
*/

//------------------------------

/*
const alphabet=["a","b","c","d","e","f"];
const [first, second, third]= alphabet;
console.log(first);
*/

//ex1
function sum(array) {
  let sum = 0;
  if (Array.isArray(array)) {
    for (let elemnt of array) {
      sum += elemnt;
    }
    return sum;
  } else {
    return "Error, not array";
  }
}

let arr = [66, 7, 8, 9, 10];
console.log(sum(arr));
