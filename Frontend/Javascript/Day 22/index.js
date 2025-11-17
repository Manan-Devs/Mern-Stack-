// this call apply bind 
// this: class object method 
// strict mode vs non strict mode 

// global Object : in Browser: Window and in Node.js : Global 

// globalThis : points to global object of the environment . it's the universal global object working in all environments
// 'use strict';

// var a = 10;
// var b = 20; Source of Bug 

// console.log(a,b);

// function greet(name1,name2) {   
//     console.log(name1,name2); // Source of Bug 
// }

// greet("Rohit","Mohit");

// document.getElementById("first")

// console.log(globalThis);


// Learn about This Keyword

// this keyword in global scope : NodeJS(empty Object) , in browser it will point to global object
// 'use strict'
// console.log(this);


// Function 


const user = {
     name:"Rohit",
     age:30,
     greet:function() {
        console.log(`hi ${this.name}`);
     }
}

const user2 = {
     name:"Mohit"
}

user2.greet = user.greet;


// this === user

user2.greet();  // When we call our method in our object to , it checks who invokes this method and so that object is referred by this Keyword

 