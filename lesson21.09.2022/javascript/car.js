//ex1
class Car {
  #id; //peivate variable
  constructor(id, company, model, year, color) {
    this.#id = id;
    this.company = company;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  drive() {
    console.log("The car is driving");
  }
  park() {
    console.log("The car is parking");
  }
}

/*
let c1 = new Car("205-711-882", "Honda", "Civic", 2022, "black");
let c2 = new Car("624-999-132", "Tesla", "T-100", 2021, "white");
console.log(c1);
c1.drive();
console.log(c2);
c2.park();
*/
function sayHi() {
  console.log("Hello world");
}

module.exports = { Car, sayHi };
