import React from 'react';
import ReactDOM from "react-dom/client" 

const parent = React.createElement('div',
    {id:"parent"}, [
        React.createElement('div', {id:"child"}, React.createElement('h1', {}, "I am Child")),
        React.createElement('div', {id:"child1"}, React.createElement('h2', {}, "I am child1"))
    ]);
    
    const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
    reactRoot.render(parent); 
