import React from 'react';
// import MenuButton from '../MenuButton/MenuButton';
import './_multi-column.scss';


export function IconCard(props) {
  const {
    icon,
    title,
    text
  } = props;

  return (
    <div className='icon-card-spacing'>
      <div className='icon-card'>
        { icon && 
          <div className='icon-card__icon'>
            { icon }
          </div>
        }

        <h2 className='icon-card__title'>{ title }</h2>
        <p className="icon-card__text">
          { text }
        </p>
      </div>
    </div>
  )
}

export function ProjectCard(props) {
  const {
    image,
    title,
    description,
    liveSiteLink
  } = props;
  
  return (
    <div className='project-card-spacing'>
      <a className='project-card' href={ liveSiteLink } alt={ title } target='_blank' rel='noreferrer'>
        { image && 
          <div className='project-card__image'>
            <img src={ image }  alt={ title }/>          
            <div className='project-card__image-overlay'></div>
            <div className='project-card__image-glare'></div>
          </div>
        }

        <div className='project-card__text'>
          <div className='project-card__text--top'>
            <h2 className='project-card__title'>{ title }</h2>
            <p className="project-card__description">
              { description }
            </p>
          </div>

          <div className='project-card__text--bottom'>
            <button className="menu-button menu-button--primary menu-button--small">
              Visit site                
            </button>
          </div>
        </div>        
      </a>
    </div>
  )
}


function MultiColumn(props) {
  const {
    columns,
    columnStyle,
    columnCount,
    columnGap,
    columnPadding,
  } = props;

  return (
    <div className={`multi-column multi-column--${ columnStyle } multi-column--${columnCount} multi-column--spacing-${columnGap} multi-column--padding-${columnPadding}`}>      
      {columns}
    </div>
  )
}

export default MultiColumn