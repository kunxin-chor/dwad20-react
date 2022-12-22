import React, {useContext} from 'react'
import ProductContext from '../ProductContext'
import { Link } from 'react-router-dom';


export default function ProductListing() {

    const productContext = useContext(ProductContext);
    const allProducts = productContext.getProducts();

    return <React.Fragment>
        <h1>All Products</h1>
        {
            allProducts.map(p => <div className="card" key={p.id}>
                <div className="card-body">
                    <h2 className="card-title">
                        <Link to={`/view-product/${p.id}`}>
                         {p.product_name}
                        </Link>
                    </h2>
                    <h3>
                        Cost: {p.cost}
                    </h3>
                </div>
            </div>)
        }
    </React.Fragment>
}