import React from 'react';
import './_project.scss';

// import MenuButton from '../MenuButton/MenuButton';

function Project(props) {
  const { image, title, description, liveSiteLink, padding, button_color, button_size, overlay_strength, info_position, card_radius } = props;
  
  return (
    <div className={`project__padding project__padding--${ padding } project__card-radius--${ card_radius }`}>
      <a className='project__container'  href={ liveSiteLink } target='_blank' rel='noreferrer'>
        <div className='project__photo'>
          <img src={ image }  alt={ title }/>
          <div className={`project__overlay project__overlay--${ overlay_strength }`}></div>
          
          <div className='project__info'>
            <div className={`project__info--${ info_position }`}>
              <div className='project__text-container'>        
                <h2>
                  { title }
                </h2>
                <p>
                  { description }
                </p>
              </div>
              
              <button className={`menu-button menu-button--${ button_color } menu-button--${ button_size || 'medium' }`}>
                Visit site                
              </button>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Project