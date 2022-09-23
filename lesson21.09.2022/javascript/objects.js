/*
// Factories function
function createFacebookUser(id, name, age, address) {
  let newUser = {
    id: id,
    name: name,
    age: age,
    address: address,
  };
  return newUser;
}

let facebookUser_ofer = createFacebookUser(1, "Ofer", 21, "Haifa, Israel");
let facebookUser_tomer = createFacebookUser(2, "Tomer", 25, "Holon, Israel");
console.log(facebookUser_ofer);
console.log(facebookUser_tomer);

//------------------------------------------

// Constructor function
function CreateStudent(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
}

let studentElias = new CreateStudent(1, "Elias", 36);
console.log(studentElias);

//------------------------------------------

//create object without function
let facebookUser = {
  id: 1,
  name: "Dan",
  age: 26,
  address: "Tel-Aviv, Israel",
  coverImages: ["", ""],
  profileImages: ["", ""],
  selectProfileImage: "",
  friendsIds: [2, 3, 4, 5],
};

console.log(facebookUser);

//------------------------------------------

//class
class Student {
  constructor(id, name, age, play) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.play = play;
  }
  talk() {
    console.log("my name is " + this.name);
  }
  plays() {
    console.log("my play is " + this.play);
  }
}

let std1 = new Student(12, "Sasha", 21, "jumping");
let std2 = new Student(55, "Asaf", 50, "soccer");
console.log(std1);
std1.talk();
std1.plays();
console.log(std2);
std2.plays();
*/

//------------------------------------------

//static class(Math) functions(pow)
let result = Math.pow(2, 3);
console.log(result);
