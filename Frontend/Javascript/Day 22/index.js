unction greet() {
      console.log(`hi ${this.name}`);
}

function incrementAge(value,name,) {
      this.age+=value;
      this.name = name;
      console.log(this.age);
      console.log(this.name);
      
}

const user = {
     name:"Rohit",
     age:30
}

const user2 = {
     name:"Mohit",
     age:10
}

// greet.call(user);
// greet.call(user2);

// incrementAge.call(user2,10,"Mohan");

// apply
incrementAge.apply(user2,[10,"Mohan"]);


// bind 
const incr = incrementAge.bind(user2,10,"Mohan");

incr();

// this === user

// user2.greet;  // When we call our method in our object to , it checks who invokes this method and so that object is referred by this Keyword

"use strict" 

// function greet() {
//      console.log(this);
// }

// greet()
 
