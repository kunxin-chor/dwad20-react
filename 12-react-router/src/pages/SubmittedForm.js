import React from "react";
import { useLocation} from "react-router-dom";

export default function SubmittedForm() {

    // the location hook allows you to retrieve information regarding the current route
    const location = useLocation();
    const name = location.state.formData.name;
    const email = location.state.formData.email;
    const comments = location.state.formData.comments;


    return <React.Fragment>
        <h1>Thank you for your enquiry!</h1>
        <p>We will get back to you within three working days. Here's what you have sent to us</p>
        <ul>
            <li>Your Name: {name}</li>
            <li>Your Email: {email}</li>
            <li>Your Comments: {comments}</li>
        </ul>

    </React.Fragment>
}