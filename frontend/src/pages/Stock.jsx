import React from 'react'
import { Link } from 'react-router-dom'
function Stock() {
  return (
   <main className="max-w-7xl mx-auto motion-preset-blur-right   mt-16 bg-[#161b4a] rounded-3xl px-10 py-16">
        <h1 className="text-white text-5xl motion-preset-blur-right text-center mb-16 select-none">
          PRODUCTS
        </h1>
        <div className="flex flex-wrap justify-between max-w-5xl mx-auto gap-8">
            <Link to="/add" >
          <button className="bg-[#7a2043] motion-preset-blur-right text-white rounded-full px-10 py-4 whitespace-nowrap select-none">
            PRODUCT ADD
          </button>
          </Link>
          <Link to="/delete">
          <button className="bg-[#7a2043] motion-preset-blur-right text-white rounded-full px-10 py-4 whitespace-nowrap select-none">
            PRODUCT DELETE
          </button>
          </Link>
          <Link to="/update">
          <button className="bg-[#7a2043] motion-preset-blur-right text-white rounded-full px-10 py-4 whitespace-nowrap select-none">
            UPDATE PRODUCT
          </button>
          </Link>
          <Link to="/allproducts">
          <button className="bg-[#7a2043] motion-preset-blur-right text-white rounded-full px-10 py-4 whitespace-nowrap select-none">
            ALL PRODUCTS
          </button>
          </Link>
        </div>
      </main>
  )
}

export default Stock
