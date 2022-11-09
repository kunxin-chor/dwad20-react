import React from 'react'

export default class Counter extends React.Component {

    // to change state, we will use the 'this.setState'
    // this.state.number = 100; // <-- WON'T WORK!
    // the setState function will take one in parameter and that is
    // an object and in the object will have the new key/value pair
    // of the state that we want to change
    // this.setState({
    //     number: Math.floor(Math.random() * 100 + 1)
    // })
    state = {
        number: this.props.initialValue
    }

    render(){

       

        // We cannot reassign to a props after it has been set
        // this.props.initialValue = 15;
        return (<div>
            Initial Value = {this.props.initialValue}<br/>
            State = {this.state.number}
        </div>)
    }
}