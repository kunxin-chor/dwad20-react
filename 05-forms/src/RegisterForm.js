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
        product: "electronics",
        email: "",
        interests: []
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
            [event.target.name]: event.target.value
        })
    }

    updateInterests = (event) => {

        // we need check if the clicked checkbox's interest is already in the array
        // if the interest is not in the this.state.interests array, then it
        // means that the interest has not been checked yet, so we will add it to the array
        if (this.state.interests.includes(event.target.value) === false) {
            // The developers of React strongly believe in a paradigm calls functional programming
            // One of the most interesting rules about functional programming: you cannot mutate 
            // i.e change/reassign -- any variable

            // // 1. clone the original array
            // let cloned = this.state.interests.slice();

            // // 2. change the clone
            // cloned.push(event.target.value);
            // 3. swap out the original array with the clone
            //   this.setState({
            //     interests: cloned
            // })

            // level 2: use spread to create a clone of the original array, and then
            // put in the new value at the back 
            let cloned = [...this.state.interests, event.target.value];

            this.setState({
                'interests': cloned
            })

            // level 3 do everything in one line
            // this.setState({
            //     'interests': [...this.state.interests, event.target.value]
            // })

          
        } else {
            // if the checkbox's value is already in the array, it means it has been checked
            // so we have to remove from the array
            console.log("removing", event.target.value);

        // level 1 method
        //     // 1. clone the original array
        //     let clone = this.state.interests.slice();

        //     // 1b find the index of the interest to remove
        //     // let indexToRemove = clone.findIndex(function(e){
        //     //     return e === event.target.value;
        //     // })

        //     let indexToRemove = -1;
        //     for (let i = 0; i < clone.length; i++) {
        //         if (clone[i] === event.target.value) {
        //             indexToRemove = i;
        //             break;
        //         }
        //     }

        //     // 2. remove the interests from the array
        //     clone.splice(indexToRemove, 1);

        //     // 3. replace into the array
        //     this.setState({
        //         interests: clone
        //     })
       

        // level 2
        let indexToRemove = this.state.interests.findIndex(function(e){
                    return e === event.target.value;
        })

        let cloned = [...this.state.interests.slice(0, indexToRemove), ...this.state.interests.slice(indexToRemove + 1)];
        this.setState({
            interests: cloned
        })

        }
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
                <div>
                    <label>Please tell us your interests:</label>

                    <input type="checkbox" name="interests" value="reading"
                        checked={this.state.interests.includes("reading")}
                        onChange={this.updateInterests}

                    />
                    <label>Reading</label>

                    <input type="checkbox" name="interests" value="sleeping"
                        checked={this.state.interests.includes("sleeping")}
                        onChange={this.updateInterests}
                    />
                    <label>Sleeping</label>

                    <input type="checkbox" name="interests" value="watching-tv"
                        checked={this.state.interests.includes("watching-tv")}
                        onChange={this.updateInterests}
                    />
                    <label>Watching TV</label>

                    <input type="checkbox" name="interests" value="stamp-collecting"
                        checked={this.state.interests.includes("stamp-collecting")}
                        onChange={this.updateInterests}
                    />
                    <label>Stamps Collecting</label>

                </div>



            </React.Fragment>
        )
    }
}

// the whole point of exporting that other JS files can use the component
export default RegisterForm;