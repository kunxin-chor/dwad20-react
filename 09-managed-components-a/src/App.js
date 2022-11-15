
import React from "react";
import RegisterForm from "./RegisterForm";
import Summary from "./Summary"
class App extends React.Component {

  state = {
    fullName: "",
    email: "",
    isButtonPressed: false
  }

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  registerButtonPressed = () => {
    this.setState({
      isButtonPressed: true
    })
  }

  render() {
    return (
      <div>
        <h1>Registration</h1>
        <RegisterForm
          fullName={this.state.fullName}
          email={this.state.email}
          update={this.updateFormField}
          register={this.registerButtonPressed}
        />
        {
          this.state.isButtonPressed ? (  <Summary
            fullName={this.state.fullName}
            email={this.state.email}
          />) : null
        }
      
      </div>
    );
  }

}

export default App;
