import React from 'react';
import './_ideals-cards-top.scss';
import MultiColumn, { IconCard } from '../MultiColumn/MultiColumn';
import TwoColumn from '../TwoColumn/TwoColumn';
import Project from '../Project/Project';

import { Mazevo } from '../ProjectImports/ProjectImports'


function IdealsCardsTop() {
  
  return (
    <div className='ideals-cards'>
      <TwoColumn columns={[         
        <MultiColumn 
          columns={[
            <IconCard 
              icon={<span class="material-symbols-sharp">calendar_month</span>}
              title='Forecast'
              text="You have a tight deadline and you need someone who can deliver quickly and effectively. I understand that blockers are every development cycle's worst enemy so I address those concerns before they become problems."
            />,
            <IconCard 
              icon={<span class="material-symbols-sharp">chat</span>}
              title='Feedback'
              text="It takes feedback and iteration to make something truly special. I work directly with designers and implimenters to get the results you're looking for."
            />
          ]}
          columnStyle='icon-card'
          columnCount='two-column'
          columnGap='xxs'
          columnPadding='xxs'
        />
        ,
        <Project 
          image={ Mazevo.props.image }
          title={ Mazevo.props.title }
          description={ Mazevo.props.description }
          liveSiteLink={ Mazevo.props.liveSiteLink }
          button_color='primary'
          button_size='large'          
          padding='regular'
          overlay_strength='medium'
          info_position='bottom'  
          card_radius='small'
        />
      ]} 
      column_gap='large'
      vertical_align='stretch'
      show_first_bg_card_={ true }
      first_bg_card_color='secondary-light'
      show_second_bg_card_={ false }
      second_bg_card_color='primary'
      />
    </div>
  )
}

export default IdealsCardsTop