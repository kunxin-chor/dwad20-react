import React from "react";

export default function EditItem(props) {
    return (
        <React.Fragment>
            <div className="item-info">
                <h2>Edit Bubble Taa</h2>    
                <div>
                    <label>Name:</label>
                    <input type="text"
                    value={props.name}
                    name="editedItemName"
                    onChange={props.update}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input type="text"
                    value={props.price}
                    name="editedItemPrice"
                    onChange={props.update}
                    />
                </div>
                <div>
                    <label>Sugar Level</label>
                    <input type="text"
                    value={props.sugar}
                    name="editedItemSugar"   
                    onChange={props.update}
                    />
                </div>
                <button onClick={()=>{
                    props.confirmUpdate(props.index)
                }}>Update</button>
                <button onClick={props.cancelUpdate}>Cancel</button>
            </div>
        </React.Fragment>
    )
}