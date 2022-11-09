import React  from "react"
export default class ColoredDiceUsingTernary extends React.Component{

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
        return (
            <div onClick={this.click} style={{
                border:"1px solid black",
                padding:"10px",
                width:"20px",
                color: this.state.count == 1 ? "red" : ( this.state.count == 6 ? "green" : "black")  
            }}>{this.state.count}</div>
        )
    }
}
