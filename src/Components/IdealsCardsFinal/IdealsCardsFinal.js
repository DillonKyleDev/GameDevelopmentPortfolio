import React from 'react';
import './_ideals-cards-final.scss';
import MultiColumn, { IconCard } from '../MultiColumn/MultiColumn';
import TwoColumn from '../TwoColumn/TwoColumn';
import Project from '../Project/Project';

import { Frangrowth } from '../ProjectImports/ProjectImports'

export function IdealsCard(props) {
  const {
    icon,
    title,
    text
  } = props;

  return (
    <div className='ideal-cards__card'>
      <div className='ideal-cards__icon'>
        { icon }
      </div>

      <h1 className='ideal-cards__title'>{ title }</h1>
      <p className="ideal-cards__text">
        { text }
      </p>
    </div>
  )
}

function IdealsCardsBottom() {
  
  return (
    <div className='ideals-cards'>
      <TwoColumn columns={[         
        <MultiColumn 
          columns={[
            <IconCard        
              icon={<span class="material-symbols-sharp">savings</span>}       
              title='Cost'
              text="I go toe-to-toe with leaders in the industry in every way, but not when it comes to your wallet. Drop me a line for pricing details."
            />,
            <IconCard      
              icon={<span class="material-symbols-sharp">support_agent</span>}         
              title='Support'
              text="Just because the site is done, doesn't mean we aren't friends anymore. I've got your back and am always here to help answer questions and keep you up and running."
            />
          ]}
          columnStyle='icon-card'
          columnCount='two-column'
          columnGap='xxs'
          columnPadding='xxs'
        />,
        <Project 
          image={ Frangrowth.props.image }
          title={ Frangrowth.props.title }
          description={ Frangrowth.props.description }
          liveSiteLink={ Frangrowth.props.liveSiteLink }
          button_color='primary'
          button_size='medium'
          padding='regular'
          overlay_strength='medium'
          info_position='bottom'  
          card_radius='small'
        />
      ]} 
      column_gap='large'
      vertical_align='stretch'
      show_first_bg_card_={true}
      first_bg_card_color='primary'
      show_second_bg_card_={false}
      second_bg_card_color='primary'
      />
    </div>
  )
}

export default IdealsCardsBottom