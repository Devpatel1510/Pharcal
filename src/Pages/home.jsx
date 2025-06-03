import React from "react";
import './home.css';

const Home = () => {
  return (
    <main>
    <div className="dev2">
      
        <h1>Welcome To PharCal</h1>
      
      <p>
        Pharcal is a comprehensive pharmaceutical calculation and billing solution designed to streamline pharmacy operations. It specializes in calculating PTR (Price to Retailer), PTS (Price to Stockist), GST, margins, and other key financial metrics, ensuring accuracy and compliance in pricing.
      </p>
      <p>
        In addition to its advanced calculation features, Pharcal also enables pharmacies to generate professional, itemized bills with ease. Whether managing inventory, setting prices, or processing sales, Pharcal offers an all-in-one platform to enhance efficiency and transparency in pharmaceutical business operations.
      </p>
       <span><button>About Us</button>
        <button>Pricing</button></span>
    </div>
    </main>
  );
};

export default Home;
