import React from 'react'

export default class BubbleTeaShop extends React.Component {
    state = {
        items:[
            {
                id:1,
                name:"Milk Tea with Pearls",
                price:5.50,
                sugar:3
            },
            {
                id:2,
                name:"Green Tea with Pearls",
                price: 6.50,
                sugar: 2
            },
            {
                id:3,
                name:"Red Tea with Pearls",
                price: 7.50,
                sugar: 1
            }
        ],
        itemBeingEdited:{},  // empty object to indicate that we are not editing anything at the moment
        editedItemName:"",
        editedItemPrice:"",
        editedItemSugar:""
    }

    updateFormField = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    beginEdit = (itemBeingEdited) => {
        this.setState({
            // itemBeingEdited: itemBeingEdited
            itemBeingEdited,
            editedItemName: itemBeingEdited.name,
            editedItemPrice: itemBeingEdited.price,
            editedItemSugar: itemBeingEdited.sugar
        })
    }

    finishEdit = (index) => {
        // const modifiedItem = {
        //     id: this.state.itemBeingEdited.id,
        //     name: this.state.editedItemName,
        //     price: this.state.editedItemPrice,
        //     sugar: this.state.editedSugarPrice
        // }

        // const left = this.state.items.slice(0, index);
        // const right = this.state.items.slice(index+1);
        // const modified = [...left, modifiedItem, ...right];
        // this.setState({
        //     items: modified
        // })
        this.setState({
            items:[
                ...this.state.items.slice(0, index),
                {
                    id: this.state.itemBeingEdited.id,
                    name: this.state.editedItemName,
                    price: this.state.editedItemPrice,
                    sugar: this.state.editedItemSugar
                },
                ...this.state.items.slice(index+1)
            ],
            itemBeingEdited:{}
        })
    }

    // this function is to render one item
    renderItem = (item) => {
        return <div className="item-info" key={item.id}>
            <h3>Name: {item.name}</h3>
            <h4>Price: ${item.price}</h4>
            <h4>Sugar: ${item.sugar}</h4>
            <button onClick={()=>{
                this.beginEdit(item);
            }}>Edit</button>
        </div>
    }

    // this function is to render the form for editing the item
    renderEditItem = (item, index) => {
        return <div className="item-info" key={item.id}>
            <h3>Name: <input type="text" 
                             value={this.state.editedItemName}
                             onChange={this.updateFormField}
                             name="editedItemName"
                       />
            </h3>
            <h4>Price: <input type="text" 
                              value={this.state.editedItemPrice}
                              onChange={this.updateFormField}
                              name="editedItemPrice"    
                        />
            </h4>
            <h4>Sugar: <input type="text" 
                              value={this.state.editedItemSugar}
                              onChange={this.updateFormField}
                              name="editedItemSugar"
                        />
            </h4>
            <button onClick={()=>{
                this.finishEdit(index)
            }}>Update</button>
            <button onClick={()=>{
                this.setState({
                    itemBeingEdited: {}
                })
            }}>Cancel</button>
        </div>
    }

    render() {
        return <React.Fragment>
            {
                this.state.items.map( (item,index) =>{
                   // check if the current item that
                   // we are displaying is being edited or not
                   // if no, display the item normally
                   // if yes, display the form for that item
                   if (this.state.itemBeingEdited.id !== item.id) {
                    // if the item is not the one being edited,
                    // we render it normally
                    return this.renderItem(item);
                   } else {
                    return this.renderEditItem(item, index);
                   }
                })
            }
        </React.Fragment>
    }
}