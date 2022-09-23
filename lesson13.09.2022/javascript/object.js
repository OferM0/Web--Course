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
