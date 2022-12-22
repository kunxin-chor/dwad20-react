import React from "react";

import ProductProvider from "./ProductProvider";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import AddProduct from "./pages/AddProduct";
import ProductListing from "./pages/ProductListing"

import "bootstrap/dist/css/bootstrap.min.css"
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Router>
          <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">All Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-product">Add Product</Link>
                </li>
              </ul>
            </div>
          </nav>
          <ProductProvider>
            <Routes>
                <Route path="/" element={<ProductListing />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/view-product/:product_id" element={<ProductDetails/>}/>
            </Routes>
          </ProductProvider>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
