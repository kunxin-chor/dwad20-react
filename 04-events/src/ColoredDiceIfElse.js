import React  from "react"
export default class ColoredDiceIfElse extends React.Component{

    // generic formula: to generate random numbers between 1 to N
    // Math.floor(Math.random() * N + 1)
    state = {        
        count: Math.floor(Math.random()*6+1)
    }

     click = () => {
        this.setState({
            count: Math.floor(Math.random()*6+1)
        })
    }   


    render() {

        // make sure any additional JS logic is before return
        let diceColor ="black";
        if (this.state.count == 1) {
            diceColor = "red"
        }
        if (this.state.count == 6) {
            diceColor = "green"
        }

        return (
            <div onClick={this.click} style={{
                border:"1px solid black",
                padding:"10px",
                width:"20px",
                color:diceColor
            }}>{this.state.count}</div>
        )
    }
}
