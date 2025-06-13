import React from 'react';
import { useauthstore } from '../store/auth.store';
import { Link } from 'react-router-dom';

function Nav() {
  const { logout } = useauthstore();

  return (
   
      <nav className="bg-[#1e2150] py-4 flex items-center justify-center relative">
        <div className="w-1/3"></div>
        <div className="flex gap-6 text-2xl font-bold tracking-wider items-center justify-center w-1/3">
          <Link to="/" className="hover:text-pink-500 transition" aria-current="page">Home</Link>



          <Link to="/stock" className="hover:text-pink-500 transition">Stock</Link>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="hover:text-pink-500 transition">Cal</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><Link to="/ptr">PTR</Link></li>
              <li><Link to="/breakeven">BREAK EVEN</Link></li>
              <li><Link to="dosage">DOSAGE</Link></li>
              <li><Link to="projectedr">PROJECTED REVENEUE</Link></li>
            </ul>
          </div>
          
          <div className="block lg:hidden">
           
  <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6 text-white"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
  onClick={logout}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
  />
</svg>
 
</div>
          
        </div>
       

     
        <div className='w-1/3 flex justify-end'>
<ul className="hidden lg:flex menu flex-row gap-2 text-white rounded-box">
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      Inbox
      
    </a>
  </li>
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Updates
      
    </a>
  </li>
  <li>
    <a onClick={logout}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
      </svg>
      Logout
      
    </a>
  </li>
  
</ul>
</div>

        

       
      </nav>
      
     
      
    
  );
}

export default Nav;
