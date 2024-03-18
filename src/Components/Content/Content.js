import React from 'react';
import './_content.scss';
import About from '../About/About';
import Module from '../Module/Module';
import Footer from '../Footer/Footer';
import HeroContainer from '../HeroContainer/HeroContainer';
import '../About/_about.scss';

import IdealsCardsTop from '../IdealsCardsTop/IdealsCardsTop';
import IdealsCardsBottom from '../IdealsCardsBottom/IdealsCardsBottom';
import IdealsCardsFinal from '../IdealsCardsFinal/IdealsCardsFinal';
import MultiColumn, { ProjectCard } from '../MultiColumn/MultiColumn';

import { Hagerman, Mazevo, Frangrowth, Beck } from '../ProjectImports/ProjectImports'

import hagermanMobile from '../../assets/projects/mobile/hagerman.png';
import mazevoMobile from '../../assets/projects/mobile/mazevo.png';
import beckMobile from '../../assets/projects/mobile/beck.png';
import frangrowthMobile from '../../assets/projects/mobile/frangrowth.png';


const Content = () => {
  return (
    <div className='content'>  
      <div id="top"></div>    

      <Module 
        content={<HeroContainer />} 
        style={{
          show_section_header_: false,
          text_color: 'on-light',
          constrain: 'xxl',
          top_padding: 'xxl',
          bottom_padding: 'xxl',
          background_color: 'transparent',
          show_background_svg_: true,
          svg_color: 'secondary-light',
          background_svg_side: 'top-right',
          hide_overflow_: false,
        }} 
      />

      <div id="about"></div>

      <Module 
        content={<About />} 
        style={{
          show_section_header_: false,
          text_color: 'on-dark',
          constrain: 'xxl',
          top_padding: 'xl',
          bottom_padding: 'xxxl',
          background_color: 'secondary',
          show_background_svg_: true,       
          svg_color: 'secondary-light',
          background_svg_side: 'bottom-right',
          hide_overflow_: true,
        }} 
      />

      <Module 
        content={<IdealsCardsBottom />}
        sectionHeader={
          <div>
            <h2 className='ideal-cards-bottom__section-header display--2'>
              <span>You need a website.</span>
            </h2>
            <p className='large'>
              Let's face it. Why else would you be here? But you don't want just any website. You want a website that will support your strategy and your customers.
            </p>
          </div>
        }
        style={{
          header_alignment: 'left',
          header_width: 'half',
          show_section_header_: true,
          text_color: 'on-light',          
          constrain: 'xxl',
          top_padding: 'xxl',
          bottom_padding: 'xl',
          background_color: 'transparent',
          show_background_svg_: false,       
          svg_color: 'secondary-light',
          background_svg_side: 'bottom-left',      
          hide_overflow_: false, 
        }} 
      />

      
      <Module 
        content={<IdealsCardsTop />}
        sectionHeader={
          <div>
            <h2 className='display--2'>
              Tight Deadline?
            </h2>
            <p className='large'>
              I understand. Time is your most valuable resource. Save it for the things you really care about.
            </p>
          </div>
        }
        style={{
          header_alignment: 'right',
          header_width: 'half',
          show_section_header_: true,
          text_color: 'on-light',
          constrain: 'xxl',
          top_padding: 'small',
          bottom_padding: 'xxl',
          background_color: 'transparent',
          show_background_svg_: false,       
          svg_color: 'primary',
          background_svg_side: 'top-left',
          hide_overflow_: false,
        }} 
      />

      <div id="projects"></div>

      <Module 
        sectionHeader={
          <div>
            <h2 className='display--2'>
              Previous Work.
            </h2>
            <p className='large'>
              Here are a few of my favorite website builds. All developed from the ground up in HubSpot.
            </p>
          </div>
        }
        content={<MultiColumn 
          columns={[
            <ProjectCard
              image={ hagermanMobile }
              title={ Hagerman.props.title }
              description={ Hagerman.props.description }
              liveSiteLink={ Hagerman.props.liveSiteLink }
            />,
            <ProjectCard 
              image={ mazevoMobile }
              title={ Mazevo.props.title }
              description={ Mazevo.props.description }
              liveSiteLink={ Mazevo.props.liveSiteLink }      
            />,
            <ProjectCard 
              image={ frangrowthMobile }
              title={ Frangrowth.props.title }
              description={ Frangrowth.props.description }
              liveSiteLink={ Frangrowth.props.liveSiteLink }       
            />,
            <ProjectCard 
              image={ beckMobile }
              title={ Beck.props.title }
              description={ Beck.props.description }
              liveSiteLink={ Beck.props.liveSiteLink }       
            />
          ]}
          columnStyle='project-card'
          columnCount='four-column'
          columnGap='xxs'
          columnPadding='none'
        />}
        style={{
          header_alignment: 'left',
          header_width: 'one-third',
          show_section_header_: true,
          text_color: 'on-dark',
          constrain: 'xxl',
          top_padding: 'xxl',
          bottom_padding: 'xxl',
          background_color: 'primary',
          show_background_svg_: true,       
          svg_color: 'secondary',
          background_svg_side: 'top-left',
          hide_overflow_: true,     
        }} 
      />

      <Module 
        content={<IdealsCardsFinal />}
        sectionHeader={
          <div>
            <h2 className='ideal-cards-bottom__section-header display--2'>
              You're not getting rid of me that easily.
            </h2>
            <p className='large'>
              After a launch, you may have questions. I have a dedicated post-launch support window to make sure things go smoothly and you get the help and answers you need.
            </p>
          </div>
        }
        style={{
          header_alignment: 'right',
          header_width: 'half',
          show_section_header_: true,
          text_color: 'on-light',          
          constrain: 'xxl',
          top_padding: 'xxl',
          bottom_padding: 'xxl',
          background_color: 'transparent',
          show_background_svg_: false,       
          svg_color: 'secondary-light',
          background_svg_side: 'bottom-left', 
          hide_overflow_: false,       
        }} 
      />

      <Module 
        sectionHeader={
          <div>
            <h2 className='pitch-close__section-header display--2'>
              Everyone needs a website these days.
            </h2>
            <h2 className='pitch-close__section-header display--2'>
              Does yours suit <span class='pitch-close__emphasis'>your</span> needs?
            </h2>
            <p className='large'>
              Thanks for visiting!
            </p>
          </div>
        }
        style={{
          header_alignment: 'left',
          header_width: 'full',
          show_section_header_: true,
          text_color: 'on-light',          
          constrain: 'xxl',
          top_padding: 'medium',
          bottom_padding: 'large',
          background_color: 'transparent',
          show_background_svg_: false,       
          svg_color: 'secondary-light',
          background_svg_side: 'bottom-left',        
          hide_overflow_: false,
        }} 
      />

  
      <Module content={<Footer />} 
        style={{
          header_alignment: 'right',
          header_width: 'half',
          show_section_header_: false,
          text_color: 'on-dark',          
          constrain: 'xxl',
          top_padding: 'medium',
          bottom_padding: 'medium',
          background_color: 'secondary',
          show_background_svg_: true,       
          svg_color: 'secondary-light',
          background_svg_side: 'bottom-right',   
          hide_overflow_: true,     
        }} 
      />
    </div>
  )
}

export default Content