"use strict";

// function describeCountry(country, population, capitalCity) {
//   const aboutCountry = `${country} has ${population} million people, and it's capital city is ${capitalCity}.`;
//   return aboutCountry;
// }

// const switzerland = describeCountry("Switzerland", 8.7, "Bern");
// const newZealand = describeCountry("New Zealand", 5.123, "Wllington");
// const brazil = describeCountry("Brazil", 214.3, "Brasília");

// console.log(switzerland, newZealand, brazil);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const popSwitz = percentageOfWorld1(8.7);
// const popNZ = percentageOfWorld1(5.123);
// const popBrazil = percentageOfWorld1(214.3);

// console.log(popSwitz);
// console.log(popNZ);
// console.log(popBrazil);

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const popSwitz2 = percentageOfWorld1(8.7);
// const popNZ2 = percentageOfWorld1(5.123);
// const popBrazil2 = percentageOfWorld1(214.3);

// console.log(popSwitz2);
// console.log(popNZ2);
// console.log(popBrazil2);

/*
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const popSwitz3 = percentageOfWorld3(8.7);
console.log(popSwitz3);
*/

/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )} of the world.`;
};

console.log(describePopulation("Brazil", 214));
 
///////// Intro to Arrays
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const population = [8.7, 5.123, 214.3, 331.9];
console.log(4 === population.length);

const percentages = new Array(
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3])
);

console.log(percentages);

// Basic Array Operations (Methods)
const neighbors = ["Canada", "Mexico"];
console.log(neighbors);
neighbors.push("Utopia");
console.log(neighbors);
neighbors.pop();
console.log(neighbors);

if (!neighbors.includes("Germany")) {
  console.log("Propbably not a central european country.");
}

neighbors[neighbors.indexOf("Canada")] = "Puerto Rico";
console.log(neighbors);
*/
