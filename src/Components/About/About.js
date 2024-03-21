import React from 'react';
import TwoColumn from '../TwoColumn/TwoColumn';
import MultiColumn from '../MultiColumn/MultiColumn';
import { IconCard } from '../MultiColumn/MultiColumn';
import UnityLogo from '../../assets/unitylogo.png';
import UnrealLogo from '../../assets/unreallogo.png';
import './_about.scss';


function About() {
  
  return (
    <div className='about'>
      <TwoColumn columns={[         
        <div className='about__text-column'>
          <div className='about__header-container'>
            <h1 className='about__header'>Who am I?</h1>
            <div className='about__underline'/>
          </div> 

          <div className='about__bio-text'>
            <p className='about__bio-text--top large'>
              A game developer with a passion for making quality games.  I've developed games using <span className='about__highlight-yellow'>Unity</span> and <span className='about__highlight-yellow'>Unreal</span> engine.  I've also created my own game engine called <span className='about__highlight-yellow'>FlatEngine</span>, which I've used to make several 2D games.
            </p>
            <p className='about__bio-text--bottom large'>
              I'm currently working on a passion project code named <span className='about__highlight-red'>Project Arcane.</span>  
            </p>
          </div>
        </div>
        ,
        <MultiColumn 
          columns={[
              <div className='about__photo-container icon-card-spacing'>       
                <img className='about__photo' alt='Unity Logo' src={ UnityLogo }/> 
              </div>,
              <div className='about__photo-container icon-card-spacing'>       
                <img className='about__photo' alt='Unreal Logo' src={ UnrealLogo }/> 
              </div>
          ]}
          columnStyle='icon-card'
          columnCount='two-column'
          columnGap='xxs'
          columnPadding='xxs'
        />
      ]}
      column_gap='xxl'
      vertical_align='stretch'
      show_first_bg_card_={false}
      first_bg_card_color
      show_second_bg_card_={false}
      second_bg_card_color      
      />
    </div>
  )
}

export default About