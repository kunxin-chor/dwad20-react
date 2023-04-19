import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductContext from "../ProductContext";

export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const [cost, setCost] = useState("");

  const productContext = useContext(ProductContext);
  const navigate = useNavigate();

  const handleClick = () => {
    const parsedCost = parseFloat(cost);

    if (!isNaN(parsedCost) && productName.trim()) {
      productContext.addProduct(productName, parsedCost);
      setProductName("");
      setCost("");
      navigate("/");
    } else {
      alert("Please provide a valid product name and cost.");
    }
  };

  return (
    <div className="container">
      <h1>Add New Product</h1>
      <div className="form-group">
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="cost">Cost:</label>
        <input
          type="number"
          id="cost"
          step="0.01"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className="form-control"
        />
      </div>
      <button onClick={handleClick} className="btn btn-primary">
        Add Product
      </button>
    </div>
  );
}
