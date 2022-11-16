import React from 'react'
import axios from 'axios'
export default class AddRecipe extends React.Component {

    state = {
        newRecipeTitle: "",
        newRecipeIngredients:""
    }

    updateFormField = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    BASE_API_URL = "https://8888-kunxinchor-dwadrecipeap-lxqc2bcipdq.ws-us75.gitpod.io/"

     addNew = async() => {
        const newRecipe = {
            'title': this.state.newRecipeTitle,
            'ingredients': this.state.newRecipeIngredients.split(",")
        }

        const response = await axios.post(this.BASE_API_URL + "recipes", newRecipe);
        this.props.switchPage("list");
    }

    render() {
        return <React.Fragment>
            <h1>Add New Recipe</h1>
            <div className="mt-2">
                <label>Title</label>
                <input type="text"
                    className="form-control"
                    value={this.state.newRecipeTitle}
                    name="newRecipeTitle"
                    onChange={this.updateFormField}

                />
            </div>
            <div className="mt-2">
                <label>Ingredients</label>
                <input type="text"
                    placeholder="For multiple seperate them with a comma"
                    className="form-control"
                    value={this.state.newRecipeIngredients}
                    name="newRecipeIngredients"
                    onChange={this.updateFormField}
                />
            </div>
            <button className="mt-2 btn btn-primary"
                onClick={this.addNew}>Add New</button>
        </React.Fragment>
    }
}