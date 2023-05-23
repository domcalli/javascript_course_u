const country = "United States of America";
const continent = "North America";
let population = 331.9;

// console.log(country);
// console.log(continent);
// console.log(population);

const isIsland = false;
let language;

// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(typeof language);

language = "english";
// country = "Canada";  <-- will not work, can't change const variable.

// console.log(population / 2);
// population++;
// console.log(population);

// population--;

// let populationFinland = 6;
// console.log(population > populationFinland);
// let avgPopulation = 33;
// console.log(population < avgPopulation);

// let description =
//   "The " +
//   country +
//   " is in " +
//   continent +
//   ", and it's " +
//   population +
//   " million people speak " +
//   language +
//   ".";

// description = `The ${country} is in ${continent}, and it's ${population} million people speak ${language}.`;

// console.log(description);

// if (population > avgPopulation) {
//   console.log(`The ${country}'s population is above average`);
// } else {
//   console.log(
//     `The ${country}'s populations is ${
//       avgPopulation - population
//     } below average`
//   );
// }

// "9" - "5"; // 4
// "19" - "13" + "17"; // 617
// "19" - "13" + 17; // 23
// "123" < 57; // false
// 5 + 6 + "4" + 9 - 4 - 2; // 1143
//

/*
let numNeighbours = Number(
  prompt("How many neighboring countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only one border!");
} else if (numNeighbours > 1) {
  console.log("More than one border");
} else {
  console.log("No borders");
}
*/

if (!isIsland && population < 50 && language === "english") {
  console.log(`You should live in the ${country}!`);
} else {
  console.log(`The ${country} does not meet your criteria 😞`);
}

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("Most number if native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

console.log(
  `The ${country}'s population is ${
    population > 33 ? "above" : "below"
  } average`
);
