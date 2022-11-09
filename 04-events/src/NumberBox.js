import React from 'react'

export default class NumberBox extends React.Component {
    state = {
        count: 0,
    
    }

    // the event handler should always be an ARROW function
    pressed = () => {
        
        // the following code won't work
        // we cannot directly mutate a key in the state:
        // this.state.count = this.state.count + 1

        // we have to use setState to change the key in the state object
        // the first parameter is an object
        // the keys in the object are the keys in the state we want to change
        // and the value for the keys are the new values
        this.setState({
            count: this.state.count + 1

        })
    }

    render(){
        // when referring to the event handler function
        // don't put () at the back. What we want is a reference to the click function,
        // so because of that we don't put the () at the back
        return (<div onClick={this.pressed} style={{
            height:"50px",
            width:"50px",
            border:"2px solid black"
        }}>
            {this.state.count} <br/>
          
        </div>)
    }
}