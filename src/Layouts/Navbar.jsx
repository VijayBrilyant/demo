import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({navbarName}) => {
  return (
    <>
    <nav className='d-flex justify-content-between py-3 px-5 bg-light align-items-center'>
        <div className='logo'>
            <h4 style={{margin:"0px"}}>{navbarName}</h4>
        </div>


        <ul className='m-0 p-0 d-flex gap-3 align-items-center'>
           <Link to='/'>
           <li>Home</li>
           </Link> 

           <Link to='/about-us'>
           <li>About</li>
           </Link> 
            
            <li>Contact</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar