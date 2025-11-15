// Prototypes and classes 

const obj = {
      name:"Rohit",
      age:38,
      greet:function() {
         console.log("Hello,ji");
      }
};

// console.log(obj.greet());

// obj.greet();

// console.log(obj.hasOwnProperty("names"));

const arr = [10,20,30];

arr.length;

const obj2 = {
     account: 30
}

obj2.__proto__ = obj;

console.log(obj2.name);




class Customer extends Person {
      constructor(name,age,account,balance) {
          super(name,age);
          this.account = account;
          this.balance = balance;
      }
}


