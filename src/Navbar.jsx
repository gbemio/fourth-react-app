import React from 'react'
import Logo from './logo.svg'

const Navbar = () => {
  return (
    <nav>
        <img src={Logo} alt="" className='nav-logo' />
        <h3>ReactFacts</h3>
 <h4>React Course - Project 1</h4>
 </nav>
  )
}

export default Navbar
