//Ex. 1
//Given a string, that contains a special character together with alphabets (‘a’ to ‘z’ and ‘A’ to ‘Z’),
// reverse the string in a way that special characters are not affected.

var reverseOnlyLetters = function (S) {
  let l = 0;
  let r = S.length - 1;
  let arr = S.split("");

  while (l < r) {
    if (!isAlpha(arr[l])) l++;
    if (!isAlpha(arr[r])) r--;
    if (isAlpha(arr[l]) && isAlpha(arr[r])) {
      // swap
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }
  return arr.join("");
};

var isAlpha = (c) => /[a-zA-Z]/.test(c);

let str1 = "a1v-erf&887ds";
console.log(reverseOnlyLetters(str1));

//Ex. 2
//Given a string s of lowercase letters, we need to remove consecutive vowels from the string Note:
//Sentence should not contain two consecutive vowels ( a, e, i, o, u).

// function which returns True or False
// for occurrence of a vowel
function is_vow(c) {
  // this compares vowel with
  // character 'c'
  return c == "a" || c == "e" || c == "i" || c == "o" || c == "u";
}

// function to print resultant string
function removeVowels(str) {
  let arr = [];
  // push 1st character
  arr.push(str[0]);

  // loop to check for each character
  for (let i = 1; i < str.length; i++) {
    // comparison of consecutive characters
    if (!is_vow(str[i - 1]) || !is_vow(str[i])) arr.push(str[i]);
  }

  return arr.join("");
}

// Driver Code
let str = "geeks for geeks";
console.log(removeVowels(str));

//Ex. 3
//In JavaScript there is several ways to create objects, define an object that represent Tsionet structure.

function Company(name, employees, students) {
  this.name = name;
  this.print = function () {
    console.log(this.name);
  };
  this.employees = employees;
  this.students = students;
}

let c1 = new Company("Tsionet", 4, 22);
console.log(c1);

//Ex. 4
/*In JavaScript with are using the … operator over objects arrays and function, using this operator 
a.Clone array of numbers*/
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2);

//b.Get array first and second elements
let arr3 = [...arr1].slice(0, 2);
console.log(arr3);

//c.Get array first and second elements and the rest put them in one element
let arr4 = [...arr1].slice(2);
console.log(arr4);

//d.Define simple object of person and get the first name and last name using …
let person = {
  firstName: "John",
  lastName: "Smith",
  age: 34,
};
const { firstName, lastName, ...rest } = person;
console.log(firstName, lastName);

//Ex. 5
//Define object of Tsionet using class in JS, add the function Add Student and Delete Student.
class Company2 {
  constructor(name, employees, students) {
    this.name = name;
    this.employees = employees;
    this.students = students;
  }
  hire() {
    console.log("The company hire " + this.employees + " employees");
  }
  teach() {
    console.log("The company teach " + this.students + " students");
  }
}

let tzionet2 = new Company2("tzionet", 4, 22);
tzionet2.teach();
tzionet2.hire();

//Ex. 6
//what is arrow function in JavaScript-
//answer: arrow functions are a new way to write anonymous function expressions in JavaScript

//define two functions at least in two ways using function keyword and arrow function
const squareArrow = (number) => {
  return number * number;
};

const activeJobsArrow = jobs.filter((job) => job.isActive);

const jobs = [
  {
    id: 1,
    isActive: true,
  },
  {
    id: 2,
    isActive: true,
  },
  {
    id: 3,
    isActive: false,
  },
];
