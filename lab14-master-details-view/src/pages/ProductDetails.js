import {Fragment, useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import ProductContext from '../ProductContext'

export default function ProductDetails(){
    // the useParams() hook allows the component to access the route parameters
    const params = useParams();
    const productContext = useContext(ProductContext);
    const [product, setProduct] = useState({});

    useEffect(function(){
        const wantedProduct =  productContext.getProductByID(parseInt(params.product_id))
        setProduct(wantedProduct);
    }, [params])

    return <Fragment>
        <h1>Product Details</h1>
        <ul>
            <li>Name: {product.product_name}</li>
            <li>Cost: {product.cost}</li>
        </ul>

    </Fragment>
}