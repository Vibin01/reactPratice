import { useState } from "react";
import { Link } from "react-router-dom";


const Header=()=>{
  let [btnName,setBtnName]=useState("Login")
  

    return (
      <div className="header">
        <div className='logo-container'>
          <img className='logo' src='/images/logo.jpeg' alt=''/>
        </div> 
        <div className='nav-items'>
      <ul>
        <li><Link>Home </Link></li>
        <li><Link to="/about">About Us</Link></li> 
        <li><Link to="/contact">Contact us</Link></li>
        <li>Cart</li>
        <button className="btn" onClick={()=>{
          btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
        }}>
          {btnName}
        </button>
      </ul>
        </div>
      </div> 
    )
  };
  export default Header;