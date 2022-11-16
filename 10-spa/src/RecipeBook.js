import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import AllRecipe from './pages/AllRecipe'
import AddNew from './pages/AddNew'
import axios from 'axios'
import EditRecipe from './pages/EditRecipe'

export default class RecipeBook extends React.Component {
    
    state = {
        page:"list",  // if this.state.page contains "list", then display all the recipes
                     // if this.state.page contains "add" then we display the add new recipe page
        data:[],

        newRecipeTitle: "",
        newRecipeIngredients:"",

        recipeBeingEdited: {}
    }
    
    BASE_API_URL="https://8888-kunxinchor-dwadrecipeap-lxqc2bcipdq.ws-us75.gitpod.io/"

    async componentDidMount() {
        const response = await axios.get(this.BASE_API_URL + "recipes")
        this.setState({
            data: response.data
        })
    }

    beginEdit = (recipe) => {
        this.setState({
            recipeBeingEdited: recipe,
            page: "edit"
        })
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addNew = async () => {
        const newRecipe = {
            title: this.state.newRecipeTitle,
            ingredients: this.state.newRecipeIngredients.split(",")
        }

        const response = await axios.post(this.BASE_API_URL + "recipes", newRecipe);

        newRecipe._id = response.data.insertedId;

        const modified = [...this.state.data, newRecipe]

        this.setState({
            data: modified,
            page: "list"

        })
    }

    switchPage = (page) => {
        this.setState({
            "page": page
        })
    }

    renderPage() {
        if (this.state.page === "list") {
            return <AllRecipe recipes={this.state.data}
                    edit={this.beginEdit}
            />
        } else if (this.state.page === "add") {
            return <AddNew title={this.state.newRecipeTitle}
                           ingredients={this.state.newRecipeIngredients}
                           update={this.updateFormField}
                           addNew={this.addNew}
            />
        } else if (this.state.page === "edit") {
            return <EditRecipe
                        recipe={this.state.recipeBeingEdited}/>
        }
    }

    render() {
        return <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={()=>{
                                this.switchPage("list");
                            }}>All Recipes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={()=>{
                                this.switchPage("add")
                            }}>Add Recipe</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {this.renderPage()}

        </React.Fragment>
    }
}