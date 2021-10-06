// fuction

function sayHello(nameOfPerson, age) {
  console.log(
    "hello my name is " + nameOfPerson + " and " + age + " years old"
  );
}

sayHello("hea jae", 31);
sayHello("so yeon", 31);
sayHello("mun suk", 30);

const player = {
  name: "heajae",
  sayHello: function (otherPersonsName) {
    console.log("hello! " + otherPersonsName + " nice to meet you");
  },
};

player.sayHello("lynn");
player.sayHello("heajae");

// 적용해보기

function goodMorning(firstName) {
  console.log("Hi! good morning " + firstName + " nice to meet you");
}

goodMorning("heajae");
goodMorning("soyeon");

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

function divide(a, b) {
  console.log(a / b);
}

plus(32, 8);
divide(81, 9);

// 계산기만들기

const calculator = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  multi: function (a, b) {
    console.log(a * b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};

calculator.plus(5, 4);
calculator.minus(15, 4);
calculator.multi(3, 26);
calculator.divide(20, 3);
calculator.power(6, 3);
