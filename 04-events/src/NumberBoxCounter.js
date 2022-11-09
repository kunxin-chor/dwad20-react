import React from 'react'

export default class NumberBoxCounter extends React.Component {
    // 1. data private to the component
    // 2. only the component can change
    // 3. is frequently changed
    // 4. is displayed to user
    state = {
        count: 0
    }

    //  only event handlers (i.e functions that are called because of an event) has to be arrow functions
    increment= ()=>{
        this.setState({
            'count': this.state.count + 1
        })
    }

    decrement = ()=>{
        this.setState({
            'count': this.state.count - 1
        })
    }

    render() {
        return (
            <div style={{
                width:"100px",
                height:"50px",
                border:"2px black solid"
            }}>
                {this.state.count}
                <div>
                  <button onClick={this.increment}>+1</button>
                  <button onClick={this.decrement}>-1</button>
                </div>
            </div>

        )
    }
}