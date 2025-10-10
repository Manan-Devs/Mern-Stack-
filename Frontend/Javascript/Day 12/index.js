// forEach , filter, reducer , map, 

// const arr = [10,20,30,40,90];
// let sum = 0;

// arr.forEach((number)=> {
//      sum+= number;
// });

// console.log(sum);


// filter 

// const arr = [10,20,30,40,90];
// true:select false:not selected

// const newArr = arr.filter((number) => number>25); 

// console.log(newArr);


// filtering method  
// this = [10,20,30,40,50];

// Custom filter method Creation to understands behind the scene 


// const compare = (number)=> number>25;
// Array.prototype.filtering = function(compare) {
//      const ans = [];
//     for (let num of this) {
//           console.log(num);
//           if (compare(num)){
//              ans.push(num);
//           }
//      }
//     return ans;
// }


// const newArr = arr.filtering((num) => num>25);

// console.log(newArr);

// const a = [80,30,15,31,42,70];

// const answer = a.filtering((num)=> num>25); 


// map 

// const arr = [10,20,30,40,90];

// const newArr = arr.map((num)=> num*2);

// console.log(newArr);

