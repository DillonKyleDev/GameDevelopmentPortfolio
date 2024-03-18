import React from 'react';
import './_navbar.scss';
import MenuButton from '../MenuButton/MenuButton';
import { IoRocketSharp } from 'react-icons/io5';


function Navbar() {
  return (
      <div className='navbar'>
        <a className='navbar__logo' href="#top">
          <IoRocketSharp size={45}/><h2 className='navbar__logo-text'>DK</h2>
        </a>
        <div className='navbar__menu-items'>
          <MenuButton buttonText='About' 
            href='#about' 
            style={{
              buttonColor: 'light'
            }}></MenuButton> 

          <MenuButton buttonText='Projects' 
            href='#projects' 
            style={{
              buttonColor: 'light'
            }}></MenuButton> 
        </div>
      </div>
  )
}

export default Navbar