// Only import the Component and Fragment class from react
import {Component, Fragment} from 'react';

export default class MallDirectory extends Component {
    state = {
        shops:[
            "Macdonalds",
            "Coffee Beans",
            "Uniqo",
            "Don Don Donki",
            "Gaints Supermarket"
        ],
        events:[
            "10% off at Coffee Beans",
            "Caroling at Don Don Donki",
            "Free parking vouchers for spending above $100"
        ]
    }    

    renderShops() {
        let jsx = [];
        for (let s of this.state.shops) {
            jsx.push(<li>{s}</li>)
        }
        return jsx;
    }

    render() {
        return (<Fragment>
                <h1>Mall Directory</h1>
                <h2>Shops</h2>   
                {this.secretOfLife}
                <ul>
                    {this.renderShops()}
                </ul>         
                <h2>Events</h2>   
                {
                    this.state.events.map( event =>  <div style={{
                        border:"1px solid black",
                        padding:"5px",
                        margin:"5px"
                    }}>
                        {event}
                    </div>)
                }


               
            </Fragment>
        )
    }
}