import React from 'react'

export default function AddNew(props) {
    return <React.Fragment>
        <h1>Add New Recipe</h1>
        <div className="mt-2">
            <label>Title</label>
            <input type="text" 
                   className="form-control" 
                   value={props.title} 
                   name="newRecipeTitle"
                   onChange={props.update}
                   
            />
        </div>
        <div className="mt-2">
            <label>Ingredients</label>
            <input type="text" 
                   placeholder="For multiple seperate them with a comma"
                   className="form-control"
                   value={props.ingredients}
                   name="newRecipeIngredients"
                   onChange={props.update}
            />
        </div>
        <button className="mt-2 btn btn-primary"
                onClick={props.addNew}>Add New</button>
    </React.Fragment>


}