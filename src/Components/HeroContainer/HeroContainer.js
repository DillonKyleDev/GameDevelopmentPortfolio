import React from 'react';
import profilePicture from '../../assets/main-photo.jpg';
import './_heroContainer.scss';
import MenuButton from  '../MenuButton/MenuButton';

function HeroContainer() {
  return (
    <div className='hero-container'>
      <div className='hero-container__photo-container'>       
        <img className='hero-container__photo' alt='Dillon Kyle and partner' src={ profilePicture }/>       
      </div>

      <div className='hero-container__introduction'>      
        <h1>Meet <span class="hero-container__name">Dillon Kyle</span>,</h1>
        <h1 className='hero-container__subtext'>a front-end developer.</h1>    

        <MenuButton buttonText='See more' 
          href='#about'
          style={{
            buttonColor: 'primary-stroke',
            buttonSize: 'large'
          }}
          icon='arrow' />        
      </div>
    </div>
  )
}

export default HeroContainer