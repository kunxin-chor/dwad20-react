import ProductContext from "./ProductContext";
import { useState, useMemo } from 'react'

export default function ProductProvider(props) {
    const [products, setProducts] = useState([
        { id: 1, product_name: "ACME Anvils", cost: 9.99 },
        { id: 2, product_name: "ACME Hammer", cost: 15.5 },
        { id: 3, product_name: "ACME Screwdriver", cost: 12.5 }
    ])

    const productContext = useMemo(() => {
        return {
            getProducts: () => {
                return products;
            },
            getProductByID: (productId) => {
                return products.find(p => p.id === productId)
            },
            addProduct: (productName, cost) => {
                // use the restful API to create the product at the backend
                // then use the id from the backend
                const newProduct = {
                    id: Math.random() * 100000 + 1,
                    product_name: productName,
                    cost: cost
                }
                const modified = [...products, newProduct];
                setProducts(modified);
            }
        }
    }, [products]);

    return <ProductContext.Provider value={productContext}>
        {props.children}
    </ProductContext.Provider>
}