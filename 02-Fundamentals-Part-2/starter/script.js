"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 897;


function logger() {
  console.log("My name is Domonique");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");


// Function declaration - can be called before defined, has name
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1989);

// Function expression, unnamed
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1989);

console.log(age1, age2);


// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1989);
console.log(age3);

const yearsUntilRetired = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetired(1989, "Domonique"));
console.log(yearsUntilRetired(1985, "Ariel"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetired = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!🥳`);
    return -1;
  }
};

console.log(yearsUntilRetired(1989, "Domonique"));
console.log(yearsUntilRetired(1950, "Ariel"));


//////////////////////////////
// Coding Challenge #1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`Neither team wins 😟`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);


/////// Arrays

const friend1 = "Chris";
const friend2 = "Ross";
const friend3 = "Andrew";

const friends = ["Chris", "Ross", "Andrew"];
console.log(friends);

const y = new Array(1989, 1987, 1985, 2021);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Andy";
console.log(friends);
//friends = ['Bob', 'Alice']; Can't do this.

const firstName = "Domonique";
const domonqiue = [firstName, "Callion", 2037 - 1989, "student", friends];

console.log(domonqiue);
console.log(domonqiue.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1989, 1987, 1985, 1984, 2021];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[3]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

const friends = ["Chris", "Ross", "Andrew"];

// Add elements
const newLength = friends.push("Dom");
console.log(friends);
console.log(newLength);

friends.unshift("Andy");
console.log(friends);

// remove elements
friends.pop(); //removes last element of array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //removes first element of array
console.log(friends);

console.log(friends.indexOf("Chris"));
console.log(friends.indexOf("Andrew")); //returns -1 when element is not in array

friends.push(23);
console.log(friends.includes("Chris"));
console.log(friends.includes("Andrew"));
console.log(friends.includes(23));

if (friends.includes("Chris")) {
  console.log("You have a friend called Chris");
}


//////////////////////////////
// Coding Challenge #2

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return 0.15 * bill;
  } else {
    return 0.2 * bill;
  }
};

console.log(calcTip(10));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(totals);
*/

// Objects

const domArray = [
  "Domonique",
  "Callion",
  2037 - 1989,
  "student",
  ["Chris", "Andrew", "Ross"],
];

//Object literal (literally writing down)
const domonique = {
  firstName: "Domonique",
  lastName: "Callion",
  age: 2037 - 1989,
  job: "student",
  friends: ["Chris", "Andrew", "Ross"],
};
