import React from 'react';
import './_navbar.scss';
import MenuButton from '../MenuButton/MenuButton';
import GameCubeController from '../../assets/GameCubeController.png';

function Navbar() {
  return (
      <div className='navbar'>
        <a className='navbar__logo' href="#top">
          <img className='navbar__controller-icon' alt='Pixel art Gamecube controller' src={ GameCubeController }/> 
          <h2 className='navbar__logo-text'>DK</h2>
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