import React from 'react'

export default function RecipeItem(props) {
    return (<div>
        <div className="card-body">
            <h3 className="card-title">{props.recipe.title}</h3>
            <h4>Ingredients</h4>
            <ul>
                {
                    props.recipe.ingredients.map((i, index) => <li key={index}>{i}</li>)
                }
            </ul>
        </div>
    </div>);
}