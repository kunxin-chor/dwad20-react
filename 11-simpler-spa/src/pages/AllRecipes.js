import React from 'react'
import axios from 'axios'
import RecipeItem from '../components/RecipeItem'

export default class AllRecipes extends React.Component {
    state = {
        data:[]
    }

    BASE_API_URL = "https://8888-kunxinchor-dwadrecipeap-lxqc2bcipdq.ws-us75.gitpod.io/"

    async componentDidMount() {
        const response = await axios.get(this.BASE_API_URL + "recipes");
        this.setState({
            data: response.data
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>All Recipes</h1>
                {
                    this.state.data.map( r => 
                        <div className="card mt-3" key={r._id}>
                            <RecipeItem recipe={r}/>
                        </div>)
                }
            </React.Fragment>

        )
    }
}