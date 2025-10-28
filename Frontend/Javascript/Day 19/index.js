console.log("Hello, World");


// code 

const p1 = fetch("https://api.github.com/users");



// fulfilled , reject 

const p2 = p1.then((response) => {
    // console.log(response.json());
     return response.json();
});


p2.then((data) => {
    console.log(data);
      
});



fetch("https://api.github.com/users")
.then((response) => {
      return response.json();
})
.then((data)=> {
    // console.log(data); 

   const parent = document.getElementById("first");
   for(let i = 0; i < data.length; i++){
   const image  =  document.createElement('img');
   image.src = data[i].avatar_url;
   image.style.height = "200px";
   image.style.height = "200px";
   parent.append(image);
}

});






// console.log("Hello,World End");


const j1 = {
     name:"Rohit",
     age:30,
     address:"dwarka",
     c:undefined
}


// convert object to JSON 

// const jsonFormat = JSON.stringify(j1);
 


// console.log(jsonFormat);


// JSON is just a string like this : 

const jsonFormat = `{
    "name":"Rohit",
    "age": "30",
    "address":"dwarka"
}`;


// convert into javascript object

const JsObject = JSON.parse(jsonFormat);

console.log(JsObject);

















