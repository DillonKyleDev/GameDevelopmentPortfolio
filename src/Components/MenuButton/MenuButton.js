import React from 'react';
import './_menu-button.scss';
import { FiArrowRight } from 'react-icons/fi'
import PixelButton from '../../assets/Button.png';

function MenuButton(props) {
    const { 
      buttonText,
      href,
      style={
        buttonColor: 'light',
        buttonSize: 'medium',
      },
      icon
    } = props;

  return (
    <a href={`${ href }`} className={`menu-button menu-button--${ style.buttonColor } menu-button--${ style.buttonSize || 'medium' }`}>
      { buttonText }
      { icon === 'arrow' && <FiArrowRight /> }
      <div className='menu-button--pixel-outline'>
      </div>
    </a>
  )
}

export default MenuButton