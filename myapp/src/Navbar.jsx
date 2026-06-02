import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div id='nav'>
            <Link to={'/'}>   
            <li>Home</li>
            </Link>
            <Link to={'/about'}> 
            <li>About</li>
            </Link>
            <li>Task</li>

        </div>
    </div>
  )
}

export default Navbar
