import React from 'react'
import '../Css/navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
      <nav className='navbar bg-dark'>
            <h3>COVID-19 TRACKER</h3>
            <ul>
               
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/api">API</Link></li>
            </ul>
      </nav>
    )
}

export default Navbar
