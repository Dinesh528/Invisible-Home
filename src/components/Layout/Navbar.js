import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../logo11.svg'
function Navbar() {
    return (
      
        <nav className="navbar navbar-sticky-top navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
            <img src={Logo} style={{width:"140px",height:"80px"}} className="d-inline-block align-top" alt=""/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/buy">Buy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sell">Sell</Link>
            </li>
            </ul>

          <ul className="navbar-nav">
             <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/myaccount">My Account</Link>
                </li>
          </ul>      
              
          <ul className="navbar-nav ml-auto text-center">
            <li className="bg-danger nav-item" style={{width:"180px", padding:"5px",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}>
              <Link className="nav-link" style={{color:"white"}} to="/register">Register To Buy</Link>
            </li>
            <li className="nav-item" style={{background:"#00515f", width:"180px", padding:"5px",borderTopRightRadius:"5px",borderBottomRightRadius:"5px"}}>
              <Link className="nav-link" style={{ color:"white"}} to="/book-home">Book Valuation</Link>
            </li>
            </ul>
          
        </div>
        </div>
      </nav>
        
    )
}
export default Navbar;