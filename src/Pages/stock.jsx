import React, { useState } from "react";
import './stock.css'

const Stock = () => {
  
  const [showAdd, setShowAdd] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [products, setProducts] = useState([]);
  const [addProductName, setAddProductName] = useState('');
  const [addQuantity, setAddQuantity] = useState('');
  const [searchProductName, setSearchProductName] = useState('');
  const [searchQuantity, setSearchQuantity] = useState('');
  

  const handleAddToggle = () => {
    setShowAdd(!showAdd);
    setShowSearch(false);
  };

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    setShowAdd(false);
  };

  const handleAddProduct = () => {
  if (!addProductName || !addQuantity) {
    alert("Please enter both product name and quantity.");
    return;
  }

  const existingIndex = products.findIndex(
    (p) => p.name.toLowerCase() === addProductName.toLowerCase()
  );

  if (existingIndex !== -1) {
    const updatedProducts = [...products];
    console.log(updatedProducts);
    updatedProducts[existingIndex].qty = (
      parseInt(updatedProducts[existingIndex].qty) + parseInt(addQuantity)
    ).toString();
    setProducts(updatedProducts);
  } else {
    setProducts([...products, { name: addProductName, qty: addQuantity }]);
  }

  setAddProductName('');
  setAddQuantity('');
  
};

  const handleSearchProduct = () => {
    

    const match = products.find(
    (p) => p.name.toLowerCase() === searchProductName.toLowerCase()
  );

  if (match) {
    alert(`Product found: ${match.name}, Quantity: ${match.qty}`);
  } else {
    alert("No matching product found.");
  }
   
  };

  return (
    <main>
    <div>
      <h1>Stock</h1>

      <div>
        <button onClick={handleAddToggle}>Add</button>
        <button onClick={handleSearchToggle}>Search</button>
      </div>

      {showAdd && (
        <div>
          <h3>Add Product</h3>
          <input
            value={addProductName}
            onChange={(e) => setAddProductName(e.target.value)}
            placeholder="Product Name"
          />
          <input
            value={addQuantity}
            onChange={(e) => setAddQuantity(e.target.value)}
            placeholder="Quantity"
          />
          <button onClick={handleAddProduct}>Add</button>
          <h3>Product List</h3>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      )}

      {showSearch && (
        <div>
          <h3>Search Product</h3>
          <input
            value={searchProductName}
            onChange={(e) => setSearchProductName(e.target.value)}
            placeholder="Product Name"
          />
          
         
          <button onClick={handleSearchProduct}>Search</button>
          
        </div>
      )}

      
    </div>
    </main>
    
  );
};

export default Stock;
