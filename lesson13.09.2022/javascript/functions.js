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
