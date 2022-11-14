import React from "react"
import axios from 'axios'

export default class Menu extends React.Component {
    state = {
        foodItems: []
    }

    // ComponentDidMount is the method that is called by the component
    // after it has been rendered for the first time (only after that)
    async componentDidMount() {
        const response = await axios.get("menu.json");
    
        this.setState({
          foodItems: response.data,
          isloaded: true
        });
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