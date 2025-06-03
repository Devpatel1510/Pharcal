import React from 'react';
import logo from './logo.svg';
import Login from './Pages/login';
import './App.css';
import Nav1 from './components/Nav';
import Stock from './Pages/stock';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/home';
import Cal from './Pages/Cal';
import About from './Pages/about';
import Contact from './Pages/contact';
import Sign from './Pages/sign';


function App() {
  return (
    <div>
      <header>
          <Nav1 />
          </header>
      <div className="App">
        
        
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
           <Route path="/cal" element={<Cal />} />
           <Route path="/stock" element={<Stock />}/>
           <Route path="/about" element={<About />}/>
           <Route path="/contact" element={<Contact />}/>
           <Route path="/sign" element={<Sign />} />
           <Route path='/login' element={<Login />} />
          
        </Routes>
      
        
        
      </div>
      </div>
    
  );
}

export default App;
