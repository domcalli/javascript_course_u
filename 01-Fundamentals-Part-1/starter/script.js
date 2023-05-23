/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Domonique");
console.log(33);

let firstName = "Ariel";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions 
let jonas_matilda = "JM";
let $function = 27;

let person = "domonique";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Domonique");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1989;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1989;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Callion";
console.log(lastName);


// Math operators
const now = 2037;
const ageDomonique = now - 1989;
const ageChristina = now - 1987;
console.log(ageDomonique, ageChristina);

console.log(ageDomonique * 2, ageDomonique / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Domonique";
const lastName = "Callion";
console.log(firstName + " " + lastName);

// assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageDomonique > ageChristina); // >, <, >=, <=
console.log(ageChristina >= 18);

const isFullAge = ageChristina >= 18;

console.log(now - 1991 > now - 1987);

const now = 2037;
const ageChristina = now - 1987;
const ageDomonique = now - 1989;

console.log(now - 1987 > now - 1989);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageChristina + ageDomonique) / 2;
console.log(ageChristina, ageDomonique, averageAge);



/////////////////////////////////
// Coding Challenge #1

let massMark = 95; //78
let massJohn = 85; //92

let heightMark = 1.88; //1.69
let heightJohn = 1.76; //1.95

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);


const firstName = "Domonique";
const job = "student";
const birthYear = 1989;
const year = 2023;

const domonique =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(domonique);

const domoniqueNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(domoniqueNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String with 
multiple
lines`);


const age = 15;

if (age >= 18) {
  console.log(`Sara can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Sarah is not old enough to drive. Wait another ${yearsLeft} years. 😞`
  );
}

const birthYear = 2008;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

/////////////////////////////////
// Coding Challenge #2

// let massMark = 78;
// let massJohn = 92;
// let heightMark = 1.69;
// let heightJohn = 1.95;

let massMark = 95;
let massJohn = 85;
let heightMark = 1.88;
let heightJohn = 1.76;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / (heightJohn * heightJohn);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`);
} else {
  console.log(`John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!`);
}


// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Domonique"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion

console.log("I am " + 23 + " years old");
console.log("23" + "10" + 3);
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);


// 5 falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Domonique"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all 😉");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("height is UNDEFINED");
}

// == vs ===
const age = "18";

if (age === 18) console.log("You just became an adult! 😁 (strict)");

if (age == 18) console.log("You just became an adult! 😁 (loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(typeof favorite);

if (favorite === 23) {
  // '23' == 23
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("Seven is also a cool number!");
} else if (favorite === 9) {
  console.log("Nine is also a cool number!");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favorite !== 23) console.log("Why not 23?");



const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = true; //C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}


/////////////////////////////////
// Coding Challenge #3

// let scoreDolphins = (96 + 18 + 89) / 3;
// let scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log(`Dolphins win the competition!`);
// } else if (scoreKoalas > scoreDolphins) {
//   console.log(`Koalas win the competition!`);
// } else {
//   console.log(`The Dolphins and Koalas have tied!`);
// }

// BONUS 1
// let scoreDolphins = (97 + 112 + 101) / 3;
// let scoreKoalas = (109 + 95 + 123) / 3;

let scoreDolphins = (97 + 112 + 101) / 3;
let scoreKoalas = (109 + 95 + 106) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log(`Dolphins win the competition!`);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log(`Koalas win the competition!`);
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log(`The Dolphins and Koalas have tied!`);
} else {
  console.log(`Neither team qualifies to win the trophy 😐`);
}


const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend!");
    break;
  default:
    console.log("not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("enjoy the weekend!");
} else {
  console.log("not a vailid day");
}


//Expressions - produces a value
3 + 4;
1991;
true && false && !false;
// Only statements can be inserted into template literals

//Statements
if (23 > 10) {
  const str = "23 is bigger ";
}

const me = "Domonique";
console.log(`I'm ${2037 - 1987} years old ${me}`);


const age = 33;
// age >= 18
//   ? console.log("I like to drink rum")
//   : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;

if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
*/

let bill = 430;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value was ${
    bill + tip
  }`
);
