// attributes = {
//      className:"element",
//      id:"first"
// }

// element = {
//      tag:"h1",
//      textContent:"Hello,Coder Army",
//      className:"element",
//      id:"first"
// }

function createElement(tag,attributes,children,) {
      
    const element =  document.createElement(tag);
    element.textContent = children;

    for (const key in attributes) {
          element[key] = attributes[key];  
    }

    return element;
}


const element1 = createElement("h1",{className:"element",id:"first"},"Hello,Coder Army");
const element2 = createElement("h2", {className:"element",id:"second"},"Strike is launched");
// create a h1 element using Js 

// const element1 = document.createElement('h1');
// element1.textContent = "Hello, Coder Army";
// element1.className = 'element';
// element1.id = 'first';
// element1.fontSize = "30px";
// element1.style.backgroundColor = "orange";
// element1.style.color = "white";

// const element2 = document.createElement('h2');
// element1.textContent = "Strike is Launched";
// element1.className = 'element';
// element1.id = 'second';
// element1.fontSize = "20px";
// element1.style.backgroundColor = "pink";
// element1.style.color = "green";


const root = document.getElementById('root');
root.append(element1);
root.append(element2);