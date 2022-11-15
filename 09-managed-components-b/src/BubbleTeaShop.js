import React from "react"
import Item from "./components/Item"
import AddItem from "./components/AddItem"
import EditItem from "./components/EditItem"

export default class BubbleTeaShop extends React.Component {
    state = {
        items: [
            {
                id: 1,
                name: "Milk Tea with Pearls",
                price: 5.50,
                sugar: 3
            },
            {
                id: 2,
                name: "Green Tea with Pearls",
                price: 6.50,
                sugar: 2
            },
            {
                id: 3,
                name: "Red Tea with Pearls",
                price: 7.50,
                sugar: 1
            }
        ],
        itemBeingEdited:{},
        newItemName:"",
        newItemPrice:"",
        newItemSugar:""
    }

    updateFormField = (e) => {
       this.setState({
        [e.target.name] : e.target.value
       })
    }

    addNewItem = () => {
        const newItem = {
            id: Math.floor(Math.random() * 100000 + 1),
            name: this.state.newItemName,
            price: this.state.newItemPrice,
            sugar: this.state.newItemSugar
        }

        this.setState({
            items:[...this.state.items, newItem]
        })
    }

    deleteItem = (item) => {
        // findIndex will return -1 if for some reason the item cannot be found
        const indexToRemove = this.state.items.findIndex(i => i.id === item.id);
        if (indexToRemove !== -1) {
            this.setState({
                items:[
                    ...this.state.items.slice(0, indexToRemove),
                    ...this.state.items.slice(indexToRemove+1)
                ]
            })
        }
    }

    beginEdit = (item) =>{
        this.setState({
            itemBeingEdited: item,
            editedItemName: item.name,
            editedItemPrice: item.price,
            editedItemSugar: item.sugar
        })
    }

    finishEdit = (index) => {
        const left = this.state.items.slice(0, index);
        const right = this.state.items.slice(index+1);
        const modifiedItem = {
            id: this.state.itemBeingEdited.id,
            name: this.state.editedItemName,
            price: this.state.editedItemPrice,
            sugar: this.state.editedItemSugar
        }
        const modified = [
            ...left, modifiedItem, ...right
        ]

        this.setState({
            items: modified,
            itemBeingEdited:{}
        })
    }

    render() {

        return (
            <React.Fragment>
            {
                this.state.items.map((item, index) => {
                    if (item.id !== this.state.itemBeingEdited.id) {
                        return <Item
                            key={item.id}
                            item={item}
                            beginEdit={this.beginEdit}
                            delete={this.deleteItem}
                        />
                    } else {
                        return <EditItem
                            index={index}
                            key={item.id}
                            name={this.state.editedItemName}
                            price={this.state.editedItemPrice}
                            sugar={this.state.editedItemSugar}
                            update={this.updateFormField}
                            confirmUpdate={this.finishEdit}
                            cancelUpdate={()=>{
                                this.setState({
                                    itemBeingEdited: {}
                                })
                            }}
                        />
                    }
                })
            }
            <AddItem
                name={this.state.newItemName}
                price={this.state.newItemPrice}
                sugar={this.state.newItemSugar}
                update={this.updateFormField}
                create={this.addNewItem}
            />
            </React.Fragment>
        )
    }
}