import React from 'react'

export default class RegisterForm extends React.Component {
    
    state = {
        fullName: "",
        email: "",
        isButtonClicked:false
    }
    
    updateFormField = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    renderSummary() {
        if (this.state.isButtonClicked) {
            return <React.Fragment>
                <h1>Summary</h1>
                <ul>
                    <li>Full Name: {this.state.fullName}</li>
                    <li>Email: {this.state.email}</li>
                </ul>
                <button onClick={this.redo}>Redo</button>
                </React.Fragment>
        }
    }

    register = () => {
        this.setState({
            isButtonClicked: true
        })
    }

    redo = () => {
        this.setState({
            isButtonClicked: false,
            fullName: "",
            email: ""
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Name:</label>
                    <input type="text" name="fullName" 
                                       value={this.state.fullName}
                                       onChange={this.updateFormField}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" 
                           name="email" 
                           value={this.state.email}
                           onChange={this.updateFormField}
                    />
                </div>
                <button onClick={this.register}>Register</button>
                {
                    this.renderSummary()
                }
            </React.Fragment>
        )
    }
}