import React from 'react'

// this is a MANAGED component
// it will be MANAGED by its parent
export default function RegisterForm(props) {

    return (
        <React.Fragment>
            <div>
                <label>Full Name:</label>
                <input type="text" 
                       value={props.fullName}
                       onChange={props.update}
                       name="fullName"
                />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" 
                       value={props.email}
                       onChange={props.update}
                       name="email"
                />
            </div>
            <button onClick={props.register}>Register</button>
        </React.Fragment>
    )
}