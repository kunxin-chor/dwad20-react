import React from "react"

export default class Menu extends React.Component {
    state = {
        foodItems: [
            {
                "_id": 101,
                "name": "Chicken Udon Soup",
                "price": 11.99,
                "ingredients": ["chicken stock", "udon", "chicken breast"]
            },
            {
                "_id": 203,
                "name": "Salmon Teriyaki Don",
                "price": 9.9,
                "ingredients": ["salmon", "rice", "soya sauce"]
            },
            {
                "_id": 401,
                "name": "Raw Salmon Slices",
                "price": 15.99,
                "ingredients": ["salmon"]
            },
            {
                "_id": 402,
                "name": "Chicken Miso Ramen",
                "price": 15.99,
                "ingredients": ["chicken", "miso", "ramen"]
            }
        ]
    }

    renderIngredients(ingredients) {
        let ingredientJSXs = [];
        for (let eachIngredient of ingredients) {
            ingredientJSXs.push(<li key={eachIngredient}>{eachIngredient}</li>)
        }
        return ingredientJSXs;
    }

    renderMenu() {
        let itemJSXs = [];

        for (let item of this.state.foodItems) {        

            itemJSXs.push(<div key={item._id}>
                <h3>{item.name}</h3>
                <h4>Price: {item.price}</h4>
                <ul>
                    {this.renderIngredients(item.ingredients)}
                </ul>
              
            </div>)
        }

        return itemJSXs;
    }

    render() {
        return <React.Fragment>           
            {/* {this.renderMenu()}         */}
            {
                this.state.foodItems.map( item => <div key={item._id}>
                    <h3>{item.name}</h3>
                    <h4>${item.price}</h4>
                    <ul>
                        {
                            item.ingredients.map( (eachIngredient, index) => <li key={index}>{eachIngredient}</li>)
                        }
                    </ul>
                </div>)
            }
          
        </React.Fragment>
    }
}