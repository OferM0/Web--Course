function sayHello() {
  console.log("Hello!");
}
sayHello();

function sayMyName(firstName, lastName) {
  console.log(`My name is: ${firstName}, lastName is: ${lastName}`);
}
sayMyName("ofer", "Mordehai");

function printBigger(firstNum, secondNum) {
  if (firstNum > secondNum) {
    console.log(firstNumb);
  } else if (firstNum < secondNum) {
    console.log(secondNum);
  } else {
    console.log("Equal");
  }
}
printBigger(2, 2);

function showNumbers(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 2 == 0) {
      console.log("Even");
    }
    if (i % 2 == 1) {
      console.log("Odd");
    }
  }
}
showNumbers(10);

function addressFactory(newaddress) {
  this.address = newaddress;
}

console.log(new addressFactory("akko"));

function createObject(adress) {
  return {
    adress,
  };
}

console.log(createObject("Haifa"));

//------------------------------------------------------------------------------

let selectColors = ["red", "green", "yellow", "blue"];
console.log(selectColors);
selectColors[1] = "black";
console.log(selectColors[0]);
console.log(selectColors[1]);

//------------------------------------------------------------------------------------

let firstName = "Ofer";
let lastName = "Mordehai";
let age = 21;
let id = "207719261";
//cammel case- syntax for variable names
let iLoveCSharp = true;

//you can't change const
//const dog="woff";
//dog="meow"

let template = `My name is: ${firstName}, lastName is: ${lastName}`;
let template2 = "My name is " + firstName;
console.log(firstName, lastName);
console.log(template);
console.log(template2);

//------------------------------------------------------------------------------------------------

let betMaase = {
  students: [
    {
      name: "Ofer",
      age: 21,
      study: function () {
        console.log("learning");
      },
    },
  ],
  manager: "Yuval Beeri",
  city: "Akko",
};

let student = {
  name: "Ofer",
  study: function () {
    console.log("learning");
  },
};

function createStudent(iname) {
  let student = {
    name: iname,
    study: function () {
      console.log("learning");
    },
  };
  return student;
}

function Person(name) {
  this.name = name;
  this.print = function () {
    console.log(this.name);
  };
}

function home(rooms) {
  this.rooms = rooms;
  this.setValue = () => {
    console.log("Pleas set value");
  };
}
let home1 = new home(4);
console.log(home1);
home1.setValue();
let person = new Person("adi");
console.log(person.name);
person.print();
person.sayHello = () => {
  console.log("Hello!");
};
person.sayHello();

let omer = createStudent("Omer");
let sheli = createStudent("sheli");
console.log(betMaase.students);
console.log(betMaase.manager);
console.log(omer);
console.log(sheli);

//----------------------------------------------------------------

console.log("Starting");
sayHello();

function sayHello() {
  console.log("Hello!");
}
