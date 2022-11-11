import React from "react"

export default class Menu extends React.Component {
    state = {
        foodItems: [
            "Chicken Soup Udon", "Salmon Teriyaki Don", "Raw Salmon Slices", "Chicken Miso Ramen"
        ]
    }

    renderMenu() {
        let itemJSXs = [];

        for (let item of this.state.foodItems) {
            itemJSXs.push(<li>{item}</li>)
        }

        return itemJSXs;
    }

    render() {
        return <React.Fragment>         
            <ul>
                {this.renderMenu()}
            </ul>

            <ul>
                {this.state.foodItems.map(eachFood =>
                     <li>{eachFood}</li>
                )}
            </ul>
        </React.Fragment>
    }
}