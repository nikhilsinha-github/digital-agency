import React from 'react';
import { GrMenu } from 'react-icons/gr';
import '../styles/navbar.css'
import { Link } from 'react-scroll';

export const Navbar = () => {
  return (
    <section className="navbar">
      <div className="logo">
        <h1><span className="text-blue">Nsquare</span> <span className="text-grey">Digital</span></h1>
      </div>
      <ul className="menu-expanded">
        <li>
          <Link 
            to="home" 
            activeClass="active"
            spy={true}
            smooth={true}>Home</Link>
        </li>
        <li>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}>About</Link>
        </li>
        <li>
          <Link 
            to="services" 
            activeClass="active"
            spy={true}
            smooth={true}>Services</Link>
        </li>
        <li>
          <Link 
            to="portfolio" 
            activeClass="active"
            spy={true}
            smooth={true}>Portfolio</Link>
        </li>
        
      </ul>
      <div className="menu-collapsed">
        <GrMenu />
      </div>
    </section>
  )
}
