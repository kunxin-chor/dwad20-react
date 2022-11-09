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
        if (this.state.count < 10) {
            this.setState({
                'count': this.state.count + 1
            })
        }    
    }

    decrement = ()=>{
        if (this.state.count > -10) {
            this.setState({
                'count': this.state.count - 1
            })
        }
    
    }

    reset = () => {
        this.setState({
            'count': 0
        })
    }

    // second method for conditional rendering is to 
    // put the if..else in a function and return the
    // JSX accordingly
    printSmileyFace = () => {
        if (this.state.count % 2 == 0) {
            return <span>:)</span>
        } else {
            return null;
        }
    }

    isEven(number) {
        if (number % 2  ==0) {
            return true;
        } else {
            return false
        }
    }


    render() {

        // even though we use if..else inside { }, we can store JSX in a variable
        // A JSX element is basically an object, so it can be saved into a variable
        let extra = <span>:)</span>;
        if (this.state.count % 2 != 0) {
            // React can render null for JSX
            extra = null;
        }

        let width = "120px";
        return (
            <div style={{
                width:{width},
                height:"50px",
                border:"2px black solid"
            }}>
                {/* call the this.printSmileyFace() to see if
                to print a smiley face or not */}
                {this.state.count} {extra} {this.printSmileyFace()} {this.isEven(this.state.count) ? <span>:)</span> : null}
                <div>
                  <button onClick={this.increment}>+1</button>
                  <button onClick={this.decrement}>-1</button>
                  <button onClick={this.reset}>Reset</button>
                </div>
            </div>

        )
    }
}