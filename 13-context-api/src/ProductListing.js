import React, {useContext} from 'react'
import ProductContext from './ProductContext'

export default function ProductListing() {
  
  // make use of the `useContext` hook
  // to retrieve the `context` object in App.js
  // in general, useContext will take a Context as
  // the parameter and will return the value associated with that Context
  const context = useContext(ProductContext);
  console.log(context.getProducts())
  return <React.Fragment>
        <h1>Products</h1>
        <ul>
            {context.getProducts().map(p=><li key={p.id}>{p.product_name}</li>)}
        </ul>
    </React.Fragment>

}