import React from 'react'
import Logo from '../logo11.svg'
function Navbar() {
    return (
      
        <nav className="navbar navbar-sticky-top navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
            <img src={Logo} style={{width:"100px",height:"60px"}} className="d-inline-block align-top" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Buy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sell</a>
            </li>
            </ul>

          <ul className="navbar-nav">
             <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">My Account</a>
                </li>
          </ul>      
              
          <ul className="navbar-nav ml-auto text-center">
            <li className="bg-danger nav-item" style={{width:"180px", padding:"5px",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}>
              <a className="nav-link" style={{color:"white"}} href="#">Register To Buy</a>
            </li>
            <li className="nav-item" style={{background:"#00515f", width:"180px", padding:"5px",borderTopRightRadius:"5px",borderBottomRightRadius:"5px"}}>
              <a className="nav-link" style={{ color:"white"}} href="#">Book Valuation</a>
            </li>
            </ul>
          
        </div>
        </div>
      </nav>
        
    )
}
export default Navbar;