import React from 'react';
import './_ideals-cards-bottom.scss';
import MultiColumn, { IconCard } from '../MultiColumn/MultiColumn';
import TwoColumn from '../TwoColumn/TwoColumn';
import Project from '../Project/Project';

import { Hagerman } from '../ProjectImports/ProjectImports'

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
        <Project 
          image={ Hagerman.props.image }
          title={ Hagerman.props.title }
          description={ Hagerman.props.description }
          liveSiteLink={ Hagerman.props.liveSiteLink }
          button_color='primary'
          button_size='large'
          padding='regular'
          overlay_strength='medium'
          info_position='bottom'  
          card_radius='small'
        />
        ,
        <MultiColumn 
          columns={[
            <IconCard      
              icon={<span class="material-symbols-sharp">videogame_asset</span>}         
              title='Strategy'
              text="What do you want to say to customers who land on your site? What should they do once they get here?"
            />,
            <IconCard        
              icon={<span class="material-symbols-sharp">rocket_launch</span>}       
              title='Accessibility'
              text="No matter who it is that finds you, their experience has to be frictionless and enjoyable, otherwise they won't stick around long enough for strategy to matter."
            />
          ]}
          columnStyle='icon-card'
          columnCount='two-column'
          columnGap='xxs'
          columnPadding='xxs'
        />
      ]} 
      column_gap='large'
      vertical_align='stretch'
      show_first_bg_card_={false}
      first_bg_card_color='secondary'
      show_second_bg_card_={true}
      second_bg_card_color='primary'
      />
    </div>
  )
}

export default IdealsCardsBottom