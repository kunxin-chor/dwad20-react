import React from "react";

export default function AddItem(props) {
    return (
        <React.Fragment>
            <h2>Add New Bubble Tea</h2>
            <div>
                <label>Name:</label>
                <input type="text"
                 value={props.name}
                 name="newItemName"
                 onChange={props.update}
                />
            </div>
            <div>
                <label>Price</label>
                <input type="text"
                 value={props.price}
                 name="newItemPrice"
                 onChange={props.update}
                />
            </div>
            <div>
                <label>Sugar Level</label>
                <input type="text"
                 value={props.sugar}
                 name="newItemSugar"   
                 onChange={props.update}
                />
            </div>
            <button onClick={props.create}>Create</button>
        </React.Fragment>
    )
}