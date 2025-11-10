
// async await 
// async function always return a promise 

// async function greet() {
//     return "Rohit";

//     // return new Promise((resolve,reject) => {
//     //      reject("Rohit");
//     // })
// }

// const response = greet();

// // console.log(response);

// response.then((data)=> console.log(data))
// .catch((error) => {
//     console.log("Error:", error);
// });


// This way of fetching data by Calling from API is so complex

// fetch("https://api.github.com/users")
// .then((response) => response.json())
// .then((data) => console.log(data));

// await freeze our task or our code 
// const response = await fetch("https://api.github.com/users");
// const data = await response.json();
// console.log(data);

async function github() {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      console.log(data);
}

github();

console.log("Hello, Ji Kaise ho");

//  QUICK RULE:
// Top-level await = Nobody does ANYTHING until this finishes
// Async function = I'll handle this in the background, keep working




// console.log("Hello, Ji kaise ho ");




