import {useState, Fragment} from 'react'
import AddProduct from './AddProduct';
import ProductContext from './ProductContext';
import ProductListing from './ProductListing';
function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      product_name:"ACME Anvil",
      cost: 999.99
    },
    {
      id: 2,
      product_name:"ACME Hammer",
      cost: 10
    },
    {
      id: 3,
      product_name:"ACME Nails",
      cost: 1.99
    }
  ])

  // the context object will be shared with all components that have access to the context
  const context = {
    // get all the products
    getProducts: () => {
      return products;
    },
    addProduct: (name, cost) => {
      const newProduct = {
        id: Math.floor(Math.random() * 100000 + 1),
        product_name: name,
        cost: Number(cost)
      }

      const cloned = [...products, newProduct];
      setProducts(cloned);

    }
  }

  return (
   <Fragment>
      <ProductContext.Provider value={context}>
        {/* Any components listed here can have access to the context object */}
        <ProductListing/>
        <AddProduct/>
      </ProductContext.Provider>
   </Fragment>
  );
}

export default App;
