import React from 'react';

export default class MallDirectory extends React.Component {
    state = {
        searchTerms: "",
        shops: [
            {
                "id": 1,
                "name": "Macdonalds",
                "floor": 1,
                "unit": 202,
                "type": "F&B"
            },
            {
                "id": 2,
                "name": "Coffee Beans",
                "floor": 2,
                "unit": 301,
                "type": "F&B"
            },
            {
                "id": 3,
                "name": "Uniqo",
                "floor": 1,
                "unit": 101,
                "type": "Clothing"
            },
            {
                "id": 4,
                "name": "Don Don Donki",
                "floor": 5,
                "unit": 103,
                "type": "Supermarket"
            },
            {
                "id": 5,
                "name": "Coffee Express",
                "floor": "B1",
                "unit": 111,
                "type": "F&B"
            }
        ]
    }

    renderShops() {
        let jsx = [];
        for (let eachShop of this.state.shops) {
            if (eachShop.name.toUpperCase().includes(this.state.searchTerms.toUpperCase()))
                jsx.push(<div className="card mt-3" key={eachShop.id}>
                    <div className="card-body">
                        <h3 className="card-title">{eachShop.name}</h3>
                        <ul>
                            <li>Floor:{eachShop.floor}</li>
                            <li>Unit: {eachShop.unit}</li>
                            <li>Type: {eachShop.type}</li>
                        </ul>
                    </div>
                </div>)
        }

        return jsx;
    }

    render() {
        return (
            <React.Fragment>
                <h1>SomeGenericMall Directory</h1>
                <input type="text" value={this.state.searchTerms} onChange={e => this.setState({ searchTerms: e.target.value })} />

                {/* {this.renderShops()} */}

                {
                    this.state.shops.filter( eachShop => eachShop.name.toUpperCase().includes(this.state.searchTerms.toUpperCase()))
                                    .map( eachShop => <div className="card mt-3" key={eachShop.id}>
                                        <div className="card-body">
                                            <h3 className="card-title">{eachShop.name}</h3>
                                            <ul>
                                                <li>Floor: {eachShop.floor}</li>
                                                <li>Unit: {eachShop.unit}</li>
                                                <li>Type: {eachShop.type}</li>
                                            </ul>
                                        </div>

                                    </div>)
                }


            </React.Fragment>
        )
    }
}