import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import "../../styles/navbar.css";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import telephonegif from "../../assets/telephone.gif";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <nav className="nav">
        <div className="nav-menu-icon" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className="nav-logo">
      <Link to="/">
        <img src={logo} alt="Policy Bazaar Logo" />
      </Link>
    </div>
        <ul className={`nav-links ${isSidebarOpen ? 'show' : ''}`}>
          <li>
            <a href="#policy">Insurance Policy</a>
            <FaChevronDown className="dropdown-icon" />
          </li>
          <li>
            <a href="#renew">Renew Your Products</a>
            <FaChevronDown className="dropdown-icon" />
          </li>
          <li>
            <a href="#claim">Claim</a>
            <FaChevronDown className="dropdown-icon" />
          </li>
          <li>
            <a href="#support">Support</a>
            <FaChevronDown className="dropdown-icon" />
          </li>
          <li className="nav-talk">
            <a href="#expert">
              <img src={telephonegif} alt="Telephone" className="nav-telephone" /> Talk to Expert
            </a>
          </li>
          <li className="nav-signin">
            <a href="#signin">Sign In</a>
          </li>
        </ul>
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-close" onClick={toggleSidebar}><FaTimes /></div>
          <ul className="sidebar-links">
            <li><a href="#policy">Insurance Policy</a></li>
            <li><a href="#renew">Renew Your Products</a></li>
            <li><a href="#claim">Claim</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#expert">Talk to Expert</a></li>
            <li><a href="#signin">Sign In</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
