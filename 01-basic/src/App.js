// in React, instead of using require, we use import (ES6 import)
import React from 'react'  // --> const react = require('React')  --> require is known as CommonJS
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css"

// App is a component (in React, a function that returns JSX is known as a component)
export default function App() {

    let firstName = "John";
    let lastName = "Snow";

    return (<React.Fragment>
        <div className="container">
        <h1 style={{
            "fontFamily":"Verdana",
            "color":"blue"
        }}>Hello World</h1>
        <h2>Welcome to my webpage</h2>
        <h3>{firstName} {lastName}</h3>
        <h3>{1000 * 0.05}</h3>
        {firstName === "John" ? "Welcome" : "Not welcomed"}
        <img src={require('./apples.jpg')} alt="Apples"/>
        </div>
    </React.Fragment>
    )
}