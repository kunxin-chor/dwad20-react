import React  from "react"
export default class ColoredDiceUsingFunc extends React.Component{

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

    getDiceColor() {
        if (this.state.count == 1) {
            return "red";
        } else if (this.state.count == 6) {
            return "green";
        } else {
            return "black";
        }
    }


    render() {
        return (
            <div onClick={this.click} style={{
                border:"1px solid black",
                padding:"10px",
                width:"20px",
                color:this.getDiceColor()
            }}>{this.state.count}</div>
        )
    }
}
