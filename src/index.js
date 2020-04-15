import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById("root");
/* Asi se haria sin JSX
 //const elemento = React.createElement(componente, propiedades, hijos);
const elemento = React.createElement("h1", {className: "Saludo"}, "hola mundo");

ReactDOM.render(elemento, root); 

ReactDOM.render(<h1 className="saludos">Hola bebesita</h1>, root);*/

ReactDOM.render(<App />, root);



