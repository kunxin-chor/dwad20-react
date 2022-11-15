import React from 'react'

export default function Summary(props) {
    return <React.Fragment>
        <h1>Summary</h1>
        <ul>
            <li>Full Name:{props.fullName}</li>
            <li>Email: {props.email}</li>
        </ul>
    </React.Fragment>
}