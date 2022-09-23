/*let numbers = [3, 2, 4, 5];
numbers.push(99);
console.log(numbers);
numbers.unshift(1, 6);
console.log(numbers);
numbers.sort();
console.log(numbers);
console.log(numbers.indexOf(2));
console.log(numbers.includes(22));*/

//----------------------------------------------------

/*
let students = [
  {
    id: 1,
    name: "Ofer",
    description: "ok",
    age: 21,
  },
  {
    id: 2,
    name: "Naser",
    description: "nice",
    age: 43,
  },
  {
    id: 3,
    name: "Moshe",
    description: "good",
    age: 26,
  },
];

let isStudent = students.find((item) => {
  return item.name === "Ofer";
});

console.log(isStudent);
*/

//----------------------------------------------

/*
let numbers1 = [8, 5, 10, 99];

let last = numbers1.pop();
console.log("last: " + last);

let first = numbers1.shift();
console.log("first: " + first);

console.log(numbers1);

let numbers2 = [4, 9, 5, 11, 55, 0, 88, 7];
numbers2.splice(2, 3);
console.log(numbers2);

let numbers3 = [1, 2, 3, 4];
console.log(numbers3);
while (numbers3.length > 0) {
  numbers3.pop();
  console.log(numbers3);
}*/

//-------------------------------

/*
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6, 7];
let combined = [];


//arr1.forEach((elemnts) => {
//  combined.push(arr1.shift());
//});
//arr2.forEach((elemnts) => {
//  combined.push(arr2.shift());
//});
//console.log(combined);

let combined2 = [...arr1, ...arr2];
console.log(combined2);

let copy = [...arr1];
console.log(copy);*/

//--------------------------------

/*
const nums = [1, 2, 3, 4, 5, 6, 7];

for (let num of nums) {
  console.log(num);
}
*/

//------------------------------

/*
const numbers10 = [1, -2, 3];

const allPositive = numbers10.every((value) => {
  return value >= 0;
});

let atLeastOnePositive = numbers10.some((v) => {
  return v >= 0;
});

const filtered = numbers10.filter((val) => {
  return val >= 0;
});

console.log(allPositive);
console.log(atLeastOnePositive);
console.log(filtered);
*/

//------------------------------

/*
const numbers11 = [-1, 12, -304, 43];
const items = numbers11.map((m) => {
  return "hi " + m + " bye";
});
console.log(items);
*/

//------------------------------

/*
//ex1
function arrayFromRange(min, max) {
  let ret = [];
  for (let i = min; i <= max; i++) {
    ret.push(i);
  }
  return ret;
}

const numbers9 = arrayFromRange(1, 4);
console.log(numbers9);
*/

/*
//ex2
function includes(array, searchElement) {
  for (let elemnt of array) {
    if (elemnt === searchElement) {
      return true;
    }
  }
  return false;
}

const numbers8 = [1, 2, 3, 4];
console.log(includes(numbers8, 0));
*/

/*
//ex3
function expect(array, excluded) {
  const output = [];
  for (let elemnt of array) {
    if (!excluded.includes(elemnt)) {
      output.push(elemnt);
    }
    return output;
  }
}

const numbers7 = [1, 2, 3, 4, 1, 1];
const output = expect(numbers7, [1, 2]);
console.log(output);
*/

/*
//ex4
function countOccurrences(array, searchElement) {
  let cnt = 0;
  for (let elemnt of array) {
    if (elemnt === searchElement) {
      cnt++;
    }
  }
  return cnt;
}

const numbers6 = [1, 2, 3, 4, 1, 1, 2, 3, 3, 3, 3, 4, 4];
const count = countOccurrences(numbers6, 0);
console.log(count);
*/

/*
//ex6
function getMax(array) {
  let max = array[0];
  for (let elemnt of array) {
    if (elemnt > max) {
      max = elemnt;
    }
  }
  return max;
}

const numbers5 = [1, 2, 3, 47, 7, 8, 9, 100, 55];
const max = getMax(numbers5);
console.log(max);
*/

//ex7
const movies = [
  { title: "a", year: 2018, rating: 4.3 },
  { title: "b", year: 2011, rating: 2.3 },
  { title: "c", year: 2021, rating: 7.3 },
  { title: "d", year: 2018, rating: 9.3 },
];

//1
function get2018MoreThan4(array) {
  let arr = [];
  for (let elemnt of array) {
    if (elemnt.year === 2018 && elemnt.rating > 4) {
      arr.push(elemnt);
    }
  }
  return arr;
}

//2
let ascading = [...movies];
ascading.sort((a, b) => (a.rating > b.rating ? 1 : -1));

//3
let descanding = [...movies];
descanding.sort((a, b) => (a.rating < b.rating ? 1 : -1));

console.log(ascading);
console.log(descanding);

//4
for (let elemnt of movies) {
  console.log(elemnt.title);
}
