import React from 'react'

// the RegisterForm component will need state data to remember
// what the user has typed in
// The form is basically the user for
// - fullname
// - country
// - most interested product category
class RegisterForm extends React.Component {
    // the state variable is always named 'state'
    state = {
        fullname: "",  // if we want use the generic updateFormField function, the state keys MUST match the names of the <input> element
        country: "malaysia",
        product:"electronics",
        email:""
    }

    // ALL functions that are event handlers will have the EVENT object as the
    // first parameter. This parameter is passed by React to the event handler function
    // the event object will contain details of the event (such as the position of the
    // mouse cursor, what key was pressed etc. etc.)
    updateFormField = (event) => {
        // event.target.name will give us the name of the <input> element
        console.log("event.target.name =", event.target.name);
        // event.target.value will give us the value of the <input> element
        console.log("event.target.value =", event.target.value);
        this.setState({
            // if we use [ ] it means the key will be the VALUE inside the variable
            [event.target.name] : event.target.value
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
                           onChange={this.updateFormField}
                           name="fullname"
                           />
                </div>
                <div>
                    <label>Email Address:</label>
                    <input type="text" 
                           value={this.state.email}
                           onChange={this.updateFormField}
                           name="email"
                    />
                </div>
                <div>
                    <label>Product Type Most Interested in:</label>

                    <input type="radio" name="product" 
                           value="electronics" 
                           checked={this.state.product === "electronics"}
                           onChange={this.updateFormField}
                           />
                    <label>Electronics</label>

                    <input type="radio" 
                           name="product" 
                           value="clothings" 
                           checked={this.state.product === "clothings"}
                           onChange={this.updateFormField}
                           />
                    <label>Clothings</label>

                    <input type="radio" 
                           name="product" 
                           value="grocery" 
                           checked={this.state.product === "grocery"}
                           onChange={this.updateFormField}
                    />
                    <label>Grocery</label>

                </div>
                <div>
                    <label>Country:</label>
                    <select name="country" value={this.state.country} onChange={this.updateFormField}>
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="indonesia">Indonesia</option>
                    </select>
                </div>

                    
            </React.Fragment>
        )
    }
}

// the whole point of exporting that other JS files can use the component
export default RegisterForm;