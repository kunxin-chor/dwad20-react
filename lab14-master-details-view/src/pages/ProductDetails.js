import {Fragment, useState, useEffect, useContext, useCallback} from 'react'
import {useParams} from 'react-router-dom'
import ProductContext from '../ProductContext'

export default function ProductDetails(){
    // the useParams() hook allows the component to access the route parameters
    const params = useParams();
    const productContext = useContext(ProductContext);
    const [product, setProduct] = useState({});

    const getProductByID = useCallback((productId)=>{
        return productContext.getProductByID(parseInt(productId));
    }, [productContext])

    useEffect(function(){
        const wantedProduct = getProductByID(params.product_id);
        setProduct(wantedProduct);
    }, [params, getProductByID])

    return <Fragment>
        <h1>Product Details</h1>
        <ul>
            <li>Name: {product.product_name}</li>
            <li>Cost: {product.cost}</li>
        </ul>

    </Fragment>
}