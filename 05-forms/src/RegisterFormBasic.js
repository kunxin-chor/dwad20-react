import React from 'react'

// the RegisterForm component will need state data to remember
// what the user has typed in
// The form is basically the user for
// - fullname
// - country
// - most interested product category
class RegisterFormBasic extends React.Component {
    // the state variable is always named 'state'
    state = {
        fullname: "",
        country: "",
        product:"",
        email:""
    }

    // ALL functions that are event handlers will have the EVENT object as the
    // first parameter. This parameter is passed by React to the event handler function
    // the event object will contain details of the event (such as the position of the
    // mouse cursor, what key was pressed etc. etc.)
    updateFullName = (event) => {
        this.setState({
            fullname: event.target.value
        })
    }

    updateEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    updateProduct = (event) => {
        this.setState({
            product: event.target.value
        })
    }

    // the render() method (i.e function that is inside an object or a class)
    // is used to return the JSX that will be the display of the component
    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Full Name:</label>
                    <input type="text" 
                           value={this.state.fullname}
                           onChange={this.updateFullName}
                           />
                </div>
                <div>
                    <label>Email Address:</label>
                    <input type="text" 
                           value={this.state.email}
                           onChange={this.updateEmail}
                    />
                </div>
                <div>
                    <label>Product Type Most Interested in:</label>

                    <input type="radio" name="product" 
                           value="electronics" 
                           checked={this.state.product === "electronics"}
                           onChange={this.updateProduct}
                           />
                    <label>Electronics</label>

                    <input type="radio" 
                           name="product" 
                           value="clothings" 
                           checked={this.state.product === "clothings"}
                           onChange={this.updateProduct}
                           />
                    <label>Clothings</label>

                    <input type="radio" 
                           name="product" 
                           value="grocery" 
                           checked={this.state.product === "grocery"}
                           onChange={this.updateProduct}
                    />
                    <label>Grocery</label>

                </div>
                    
            </React.Fragment>
        )
    }
}

// the whole point of exporting that other JS files can use the component
export default RegisterForm;