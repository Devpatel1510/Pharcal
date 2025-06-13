import React from 'react'
import { Link } from 'react-router'

function Welcome() {
  return (
     <main className="flex-grow flex justify-center items-center px-4 mt-8 mb-8">
    <section className="bg-[#1f1a44] rounded-3xl max-w-7xl w-full p-16 min-h-[420px] flex flex-col justify-center text-center">
      <h1 className="text-white text-5xl mb-6 motion-preset-slide-right font-bold leading-tight">Welcome to Pharcal</h1>
      <p className="text-white text-base motion-preset-blur-right font-semibold max-w-3xl mx-auto mb-12 leading-relaxed" >
        Pharcal helps you calculate pharmaceutical prices like PTR and manage your stock easily. It's a simple tool to handle company calculations and keep your inventory organized.
      </p>
      <div className="flex justify-center space-x-16">
        <Link to="/ptr">
        <button className="bg-[#6e1f44] motion-preset-blur-right text-white text-sm font-normal py-3 px-10 rounded-full tracking-wide">CAL</button></Link>
        <Link to="/stock">
        <button className="bg-[#6e1f44] motion-preset-blur-right text-white text-sm font-normal py-3 px-10 rounded-full tracking-wide">STOCK</button>
      </Link>
      </div>
    </section>
    
  </main>


  )
}

export default Welcome
