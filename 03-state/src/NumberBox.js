import React from 'react'

// React.Component is a class from React
// When we do 'NumberBox extends React.Component', the NumberBox class will have all the
// existing functionality defined in 'React.Component'
class NumberBox extends React.Component {
    // create a state for the NumberBox component
    // important: the variable name MUST be state
    // a state stores data that are private and internal to the component
    // the state will always be an object
    state = {
        count: 10
    }

    // All class-based components (i.e any class that extends React.Component)
    // must have a function named render. The render function will return the JSX for the component
    // the meaning of the word 'render' means to draw, or to display something
    render() {  
        return (<div>{this.state.count}</div>)
    }
}

// remember to export out the Component
export default NumberBox;