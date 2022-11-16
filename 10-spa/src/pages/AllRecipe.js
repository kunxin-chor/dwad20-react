import React from 'react'
import RecipeItem from '../components/RecipeItem'

export default function AllRecipe(props) {
    return <React.Fragment>
        <h1>All Recipes</h1>
        {
            props.recipes.map( r =>
                <div className="card mt-3" key={r._id}>
                    <RecipeItem key={r._id}
                                        recipe={r}
                                        />
                    <div className="ms-3 mb-3">
                       <button className="btn btn-primary btn-sm" onClick={()=>{
                         props.edit(r)
                    }}>Edit</button>
                    </div>
                </div>
               
            )
        }
        </React.Fragment>
}