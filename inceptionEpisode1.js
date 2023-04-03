 /* hello world with pure JS start

  const header = document.createElement('h1');
 header.innerHTML = "Hello World from JavaScript";
  const root = document.getElementById("root");
  root.appendChild(header);

 hello world with pure JS end*/


/* hello world with React start

  const reactHead = React.createElement('h1', {id:"heading"}, "Hello world from React");
  console.log(reactHead,"reactHead") //reactHead is not a h1 element. it is react element i.e. react object 
  const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
  console.log(reactRoot,"reactRoot")
  reactRoot.render(reactHead); // here react h1 object get render ad h1 html element

 hello world with React end*/


 /*<div id="parent">
        <div id="child">i am Child</div>
    </div> 
    trying to achive this with react withput JSX 

    const parent = React.createElement('div',
    {id:"parent"}, React.createElement('div', {id:"child"}, "I am Child"));
    const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
    console.log(parent,"parent")
    reactRoot.render(parent);  */

 /*<div id="parent">
        <div id="child"><h1>i am Child</h1></div>
        <div id="child1"><h1>i am Child1</h1></div>
    </div> 
    trying to achive this with react withput JSX */

    const parent = React.createElement('div',
    {id:"parent"}, [
        React.createElement('div', {id:"child"}, React.createElement('h1', {}, "I am Child")),
        React.createElement('div', {id:"child1"}, React.createElement('h1', {}, "I am child1"))
    ]);
    
    const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
    reactRoot.render(parent); 



