import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Allproducts() {
     const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/products');
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <main className="flex justify-center motion-preset-blur-right mt-10 px-6">
  <section className="bg-[#161d4f] rounded-3xl w-full max-w-6xl py-12 px-10 shadow-2xl">
    <h1 className="text-white text-5xl text-center mb-12 font-bold tracking-wide drop-shadow-md">
      ALL PRODUCTS
    </h1>

    <ul className="space-y-6 max-w-4xl mx-auto">
      {products.map((p) => (
        <li
          key={p._id}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{p.name}</h3>
              <p className="text-sm text-gray-600">
                <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full mr-2 text-xs">
                  Batch: {p.batch}
                </span>
                <span className="mr-2">Qty: {p.quantity}</span>
                <span className="mr-2">MRP: ₹{p.mrp}</span>
                <span className="mr-2">PTR: ₹{p.ptr}</span>
              </p>
            </div>
            <div className="mt-4 sm:mt-0 text-right">
              <p className="text-sm text-gray-500">
                Expiry:{' '}
                <span className="font-medium text-red-600">
                  {new Date(p.expiry).toLocaleDateString()}
                </span>
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </section>
</main>
    </div>
  )
}

export default Allproducts
