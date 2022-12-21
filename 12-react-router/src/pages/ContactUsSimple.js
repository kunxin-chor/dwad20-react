import React, {useState} from 'react';

// useNavigate is a hook
import { useNavigate } from 'react-router-dom';

// useState is a hook from react core
// it allows us to create functions that can access the state
// and variables that read from the state


export default function ContactUs() {

    // hook functions MUST not be called in a CONTROL structure
    // i.e cannot be called in a if, while, for etc.
    // the first parameter of useState is the default value for the state variable
    // useState will return two values
    // the first value is a variable that represent the state
    // the second value is a function that allows us to set the value of the state variable
    // there is no requirement for the naming
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");

    // we call the hook to return a callback function
    // that function is like a 'direct line' to some functionality outside
    // of the component
    const navigate = useNavigate();

    // useNavigate() will return a callback function that allows us to access
    // the navigation features of react-router-dom

    // a function in JavaScript can define other functions
    function submitForm() {
        navigate('/submitted');
    }

    return (
        <React.Fragment>
            <h1>Contact Us</h1>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e)=>{
                    // instead of a generic setState function we
                    // have one set state function per state variable
                    setName(e.target.value)
                }}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
            </div>
            <div>
                <label>Comments:</label>
                <textarea onChange={e=>setComments(e.target.value)}>{comments}</textarea>
            </div>
            <button onClick={submitForm}>Submit</button>
        </React.Fragment>
    )
}