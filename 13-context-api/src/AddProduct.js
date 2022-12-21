import React from 'react'
import ProductContext from './ProductContext'

export default class AddProduct extends React.Component {

    // Every instance of AddProduct can have access to the ProductContext
    static contextType = ProductContext;

    state = {
        product_name: "",
        cost: 0
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return <React.Fragment>
            <h1>Add New Product</h1>
            <div>
                <label>Product Name</label>
                <input type="text" value={this.state.product_name}
                 name="product_name"
                 onChange={this.updateFormField}
                 />
            </div>
            <div>
                <label>Cost</label>
                <input type="text" value={this.state.cost}
                 name="cost"
                 onChange={this.updateFormField}
                />
            </div>
            <button onClick={()=>{
                this.context.addProduct(this.state.product_name, this.state.cost)
            }}>Add</button>
        </React.Fragment>
    }

}