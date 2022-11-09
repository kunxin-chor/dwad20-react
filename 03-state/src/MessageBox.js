import React from 'react'

 class MessageBox extends React.Component {
    state = {
        "message":"Hello world"
    }

    render() {
        return <div style={{
            border:"4px solid black"
        }}>
            {this.state.message}
        </div>
    }
 }

 export default MessageBox;