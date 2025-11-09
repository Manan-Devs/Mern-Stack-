// // Assignments Part 1 

// // Values and variables 

// const country = "Portugal";

// const continent = "Europe";

// let population = 220000000;


// // console.log(country);
// // console.log(continent);
// // console.log(population);

// // Data Types 

// const isIsland = false;

// let language;

// // console.log(isIsland);

// // console.log(population);

// // console.log(country);

// // console.log(language);

// // let const,  var 

// language = "Mandarin";

// // console.log(language);

// // Basic Operators ṇ

// let halfPopulation = population / 2 ;

// console.log(halfPopulation);

// console.log(halfPopulation + 1);

// let finlandPopulation = 6000000;

// if (population > finlandPopulation) {
//      console.log(true);
// }

// else {
//      console.log(false);
     
// }

// const avgPopulation = 330000000;

// if (population < avgPopulation){
//      console.log(true);
// }

// else {
//     console.log(false);
// }



// // let description = "Portugal is in Europe and its 11 million people speak portuguese";

// // Strings and Template Literals 

// let description = `Portugal is in Europe and its 11 million people speak portuguese`;


// if (population > 330000000) {
//      console.log("Portugal's population is above average.");
// }

// else {
//      console.log("Portugal's population is 22 million below average");
// }

// population = 13;

// population = 130;

// console.log(population);

// // '9' - '5' -> 4;

// console.log('9' - '5');

// // "19" - "13" + "17";

// // console.log('19' - '13' + '17');

// // console.log ('19' - '13' + 17);

// // console.log('123' < 57);


// // const numNeighbours = prompt("How many neighbour countries does your country have?");


// // if (numNeighbours == 1){
// //      console.log("Only 1 border!");
// // }

// // else if (numNeighbours > 1) {
// //      console.log("More than 1 border case");
// // }

// // else {
// //      console.log("No borders!");
// // }


// // Logical Operators 

// if (language === "English" && population < 50000000 && isIsland == false)  {
//       console.log("You Should live in Portugal");   
// }

// else {
//      console.log("Portugal is not meet your criteria");
// }

// // Switch Operators 

// switch (language) {
//     case "Chinese":
//           console.log("MOST number of native speakers!");
//         break;
    
//     case "Mandarin":
//           console.log("MOST number of native speakers!");
//         break;

//      case "Spanish":
//           console.log("2nd place in number of native speakers");
//         break;

//       case "English":
//           console.log("3rd place'");
//         break;

//      case "Hindi":
//           console.log("Number 4");
//         break;
    
//     case "arabic":
//           console.log("5th most spoken language'");
//         break;
     
//     default:
//          console.log("Great language too: D");
//         break;
// }


// // Conditional (Ternary Operators)

// console.log((population > 330000000) ? "Portugal's population is above average" : "Portugal's Population is below average");




// Assignments Part 2 


// function describeCountry(country,population,capitalCity) {
//        return (`${country} has ${population} people and its capital city is ${capitalCity}`);
// }

// const country1 = describeCountry("India", "1463.9 million", "New Delhi");

// const country2 = describeCountry("USA", "347 million", "Washington DC");

// const country3 = describeCountry("UK", "69 million", "London");

// console.log(country1);
// console.log(country2);
// console.log(country3);



// function declarations 

// function percentageOfWorld1(population) {
//       const percentageOfWorld1 = (population*100)/7900;
//       return percentageOfWorld1;
// }

// const country1 = Math.round(percentageOfWorld1(1450)) + "%";

// const country2 = Math.round(percentageOfWorld1(340)) + "%";

// const country3 = Math.round(percentageOfWorld1(70)) + "%";


// console.log(country1);
// console.log(country2);
// console.log(country3);


// Function Expressions 

// const percentageOfWorld2 = function(population) {
//       const percentageOfWorld1 = (population*100)/7900;
//       return percentageOfWorld1;
// }

// const country1 = Math.round(percentageOfWorld2(1450)) + "%";

// const country2 = Math.round(percentageOfWorld2(340)) + "%";

// const country3 = Math.round(percentageOfWorld2(70)) + "%";


// console.log(country1);
// console.log(country2);
// console.log(country3);


// Arrow Functions 

// const percentageOfWorld3 = ((population) => {
//     const percentageOfWorld1 = (population*100)/7900;
//     return percentageOfWorld1;
// });


// const country1 = Math.round(percentageOfWorld3(1450)) + "%";

// const country2 = Math.round(percentageOfWorld3(340)) + "%";

// const country3 = Math.round(percentageOfWorld3(70)) + "%";


// console.log(country1);
// console.log(country2);
// console.log(country3);


// Callback Functions


// const describePopulation = (country,population,percentageOfWorld1)=> {
//       const percentage =  percentageOfWorld1(population);
//       return (`${country} has ${population} people , which is about ${percentage} of the World`);
// }

// const country1 =  describePopulation("India",1450,percentageOfWorld1)

// const country2 = describePopulation("USA" , 340,percentageOfWorld1)

// const country3 = describePopulation("UK" , 70,percentageOfWorld1);


// console.log(country1);
// console.log(country2);
// console.log(country3);


// Arrays 

const populations = [1450,347,144,70];

// console.log(populations.length === 4);

let percentages = [];

function percentageOfWorld1(population) {
      const percentageOfWorld1 = Math.round((population*100)/7900);
      percentages.push(percentageOfWorld1);
}

// const country1 = (percentageOfWorld1(1450)) + "%";

// const country2 = (percentageOfWorld1(340)) + "%";

// const country4 = (percentageOfWorld1(144)) + "%";

// const country3 = (percentageOfWorld1(70)) + "%";
 
// console.log(percentages);


// const neighbours = ["China","SriLanka","Sweden"];

// neighbours.push("Utopia");

// console.log(neighbours);

// neighbours.pop("Utopia");

// console.log(neighbours);

// if (neighbours !== "Germany") {
//       console.log("Probably not a central European Country:D");
// }

// neighbours[2] = "Republic of Sweden";


// Objects 

// const myCountry = {
//       country:"India",
//       capital:"New Delhi",
//       language:"Hindi",
//       population:"1440 million",
//       neighbours:["China","SriLanka","Sweden"]
// }

// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language} - speaking people , ${neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// myCountry.population = "1442 million";

// console.log(myCountry.population);

// myCountry["population"] = "1442 million"

// console.log(myCountry.population);


// myCountry.describe = function () {
//        console.log(`${this.country} has ${this.population}  ${this.language} - speaking people, ${neighbours.length} neighbouring countries and capital called ${myCountry.capital}`);
// }

// myCountry.describe();


// myCountry.checkIsland = function () {
//     return myCountry.isIsland = (neighbours.length === 0) ? true : false;
// }

// console.log(myCountry.checkIsland);


// for loop 

// for (let i = 1; i <= 50; i++) {
//     const voter = i;
//     console.log(`Voter number ${voter} is currently voting `);
// }

const percentages2 = [18,4,2,1];

// let percentageSum = 0;

// for (let i = 0; i < percentages2.length; i++) {
//     const percentage = percentages2[i];
//     percentageSum += percentage;
// }

// console.log(percentageSum);


    //  let bool;
    // for (let i = 0; i < percentages2.length; i++) {
    //      if(percentages[i] === percentages2[i]) {
    //           bool = true;
    //      }
    //       else {
    //          bool = false;
    //       }
    // }

    // console.log(bool);
    

const ListOfNeibhours = [['Canada', 'Mexico'], ['Spain','Norway'] ,['Sweden',
'Russia']];


for (let i = 0; i < ListOfNeibhours.length; i++) {
        console.log(ListOfNeibhours[i][1]);
}

 







