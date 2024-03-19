import React from 'react';
import './_module.scss';

function Module(props) {
  const { 
    content,
    sectionHeader,
    style={
      header_alignment: 'left',
      header_width: 'half',
      show_section_header_: false,
      text_color: 'on-light',
      constrain: 'large',
      top_padding: 'medium',
      bottom_padding: 'medium',
      background_color: 'transparent',
      show_background_svg_: false,
      svg_color: 'secondary-light',
      background_svg_side: 'top-right',
      hide_overflow_: false,
    }
  } = props;

  return (
    <div className={`module ${ style.text_color } ${ style.hide_overflow_ && 'module--hide-overflow' }`}>      
      <div className={`module__bg-container module__bg-color--${style.background_color}`}></div>
      { style.show_background_svg_ &&
        <div className={`module__background-svg ${`module__background-svg--${style.background_svg_side}`} module__background-svg--${ style.svg_color }`}>
          <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill" fill="#424668" fill-opacity="1"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill" fill="#424668" fill-opacity=".1"/></svg>
        </div>
      }
      <div className={ `module__constrain module__constrain--${ style.constrain } module__padding-top--${style.top_padding} module__padding-bottom--${style.bottom_padding}` }>
        { style.show_section_header_ &&
          <div className={`module__section-header module__section-header--align-${ style.header_alignment } module__section-header--width-${ style.header_width }`}>
            { sectionHeader }
          </div>
        }
        { content }
      </div>
    </div>
  )
}

export default Module