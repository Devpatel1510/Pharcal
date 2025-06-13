import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Delete() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const res = await axios.get('http://localhost:5001/api/products');
        setProducts(res.data);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            await axios.delete(`http://localhost:5001/api/products/${id}`);
            fetchProducts();
            const audio = new Audio('/noti2.mp3'); 
             audio.play();
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <main className="flex justify-center motion-preset-blur-right items-center py-20 px-6">
            <section className="bg-[#141a4a] rounded-3xl w-full max-w-4xl py-16 px-10 text-center">
                <h1 className="text-white text-5xl mb-12 font-bold">PRODUCTS</h1>
                <ul className="space-y-4">
  {products.map((p) => (
    <li
      key={p._id}
      className="bg-white text-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow flex justify-between items-center"
    >
      <div>
        <h3 className="text-lg font-semibold">{p.name}</h3>
        <p className="text-sm text-gray-500">Batch: <span className="font-medium">{p.batch}</span></p>
      </div>

      <button
        onClick={() => handleDelete(p._id)}
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
      >
        Delete
      </button>
    </li>
  ))}
</ul>

            </section>
        </main>
    );
}

export default Delete;
