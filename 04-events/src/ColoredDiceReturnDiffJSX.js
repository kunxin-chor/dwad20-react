import React  from "react"
export default class ColoredDiceReturnDiffJSX extends React.Component{

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

        if (this.state.count == 1) {
            return (
                <div onClick={this.click} style={{
                    border:"1px solid black",
                    padding:"10px",
                    width:"20px",
                    color:"red"
                }}>{this.state.count}</div>
            )
        } else if (this.state.count == 6) {
            return (
                <div onClick={this.click} style={{
                    border:"1px solid black",
                    padding:"10px",
                    width:"20px",
                    color:"green"
                }}>{this.state.count}</div>
            );
        } else {
            return (
                <div onClick={this.click} style={{
                    border:"1px solid black",
                    padding:"10px",
                    width:"20px",
                    color:"black"
                }}>{this.state.count}</div>
            );
        }

       
    }
}
