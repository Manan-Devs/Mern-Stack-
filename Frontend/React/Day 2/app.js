

// const element = React.createElement('h1',{id:'title'},"Hello Coder Army");

// It's not Best way to create element in React

// JSX: looks like Html but it's not Html
// JSX --> React.createElement() --> React Element(JS Object) --> Real DOM(HTML Element Content)

 const element = <h1 id="title">Hello Coder Army</h1>;
 console.log(element);
 
//  const element2 = (<div>
//  <h1>Hell</h1>
//  <h2>hi</h2>
//  </div>);

// React Element

// const element3 = (<div>
//      <h1>Hello,Coder Army</h1>
//      <h2>Hello,Code r</h2>
//     </div>
// );

// React Components 

// function App(name) {
      
//     return (
//          <h1>Hello, Coder Army {name} </h1>
//     );
// }   


 const root = ReactDOM.createRoot(document.getElementById('root'));

//  root.render(element2);

//  const element2 = React.createElement('div' , null,
//         React.createElement('h1',null,"Hello"),
//         React.createElement('h2',null,"h1");
//  )

// root.render(App(3500));