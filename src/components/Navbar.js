import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

    
    <nav className='navbar navbar-expand-lg navbar-light bg-light' >
      <div className='nav-center'>
        <h1>API Cocktails</h1>
        
        <Link to='/'>
          
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/about'>Acerca de</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
