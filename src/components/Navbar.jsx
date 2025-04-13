import React, {useState} from 'react'
import logo from '../assets/Logo_revised.png'
import '../index.css'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(!isOpen)
  };
  return (
    <nav className="navbar">
    <div className="container">
      <div className="logo">
        <img src={logo}alt="Logo" />
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''} `}>
        <li className="nav-link"><a className='hover-underline-animation' href="#">Home</a></li>
        <li className="nav-link"><a className='hover-underline-animation' href="#services">Services</a></li>
        <li className="nav-link"><a className='hover-underline-animation' href="#courses">Courses</a></li>
        <li className="nav-link"><a className='hover-underline-animation' href="#portfolio">Portfolio</a></li>
      </ul>

    {isOpen ?<div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>: <div class="cross" onClick={toggleMenu}></div> }
      
    </div>
  </nav>
  )
}

export default Navbar