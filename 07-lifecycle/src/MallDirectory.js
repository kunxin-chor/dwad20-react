import React from 'react';

// import in axios
import axios from 'axios';

export default class MallDirectory extends React.Component {
    // because componentDidMount is only called after the first render, we must make sure
    // that the state contains correct default values so the first render can happen without any errors
    state = {
        shops: [],
        events: [],
        isDataLoaded: false
    }

    // componentDidMount is a lifecycle method
    // AFTER the first time a component instance is rendered, it will call componentDidMount
    // and that's the only time it will call it
    async componentDidMount() {
        // Any reference to a relative URL that is in quotes
        // React will look for it in the /public folder
        // for example, if we do an <img src="asd.jpg"/> then
        // React will look for the file in the /public folder
        const response = await axios.get("shops.json");
        const eventResponse = await axios.get("events.json");

        // setState is actually async, so we to set both 
        // key/value pairs at the same time (otherwise we can use 'await')
        // i.e try to accumulate all the setState together
        this.setState({
            'shops': response.data,
            'events': eventResponse.data,
            'isDataLoaded': true
        })
    }



    renderEvents() {
        let jsxElements = [];
        for (let eachEvent of this.state.events) {
            jsxElements.push((<li className="list-group-item" key={eachEvent}>
                {eachEvent}
            </li>))
        }

        return (<ul className="list-group">
            {jsxElements}
        </ul>)
    }

    render() {

        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm bg-light">

                    <div className="container-fluid">
                        
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link 1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link 2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link 3</a>
                            </li>
                        </ul>
                    </div>

                </nav>
                <h1>GenericMall Directory</h1>
                {
                    this.state.isDataLoaded ? (
                        <React.Fragment>

                            <h2 className="mt-3">All Shops</h2>
                            {
                                this.state.shops.map(function (eachShop) {
                                    return (
                                        <div className="card mt-3" key={eachShop.id}>
                                            <div className="card-body">
                                                <h3 className="card-title">
                                                    {eachShop.name}
                                                </h3>
                                                <ul>
                                                    <li>Floor: {eachShop.floor}</li>
                                                    <li>Unit: {eachShop.unit}</li>
                                                    <li>Type: {eachShop.type}</li>
                                                </ul>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                            <h2>Events</h2>
                            {this.renderEvents()}
                        </React.Fragment>
                    ) : (
                        <div style={{ minHeight: "300px", border:"1px solid black" }}>

                            <h1>Loading</h1>
                        </div>
                    )
                }


            </React.Fragment>
        )
    }
}