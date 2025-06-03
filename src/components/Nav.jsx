import React from "react";
import './Nav.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Nav1 = () => {
    return (
       
        
            
        <nav>
            <span><Link to="/home">Home</Link></span>
            <span><Link to="/Cal">Cal</Link></span>
            <span><Link to="/about">About</Link></span>
            <span><Link to="sign">Sign</Link></span>
            <span><Link to="/stock">Stock</Link></span>
            <span><Link to="/contact">Contact</Link></span>

        </nav>
        
        

    );
};

export default Nav1;