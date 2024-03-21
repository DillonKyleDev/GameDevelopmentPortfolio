import React from 'react';
import './_heroContainer.scss';
import MenuButton from  '../MenuButton/MenuButton';
import GameCubeController from '../../assets/Player.png';

function HeroContainer() {
  return (
    <div className='hero-container'>
      <div className='hero-container__photo-container'>       
        {/* <img className='hero-container__photo' alt='Dillon Kyle and partner' src={ profilePicture }/>        */}
        <img className='hero-container__photo' alt='Dillon Kyle and partner' src={ GameCubeController }/> 
      </div>

      <div className='hero-container__introduction'>      
        <h1>Meet <span class="hero-container__name">Dillon</span>,</h1>
        <h1 className='hero-container__subtext'>a gameplay engineer.</h1>    

        <MenuButton buttonText='See more' 
          href='#about'
          style={{
            buttonColor: 'gc-green',
            buttonSize: 'medium'
          }}
          icon='' />        
      </div>
    </div>
  )
}

export default HeroContainer