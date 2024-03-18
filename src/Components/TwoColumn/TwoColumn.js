import React from 'react';
import './_two-column.scss';


export function ColorCard(props) {
  const {
    color,
    side,
  } = props;

  return (
    <div className={`color-card color-card--${ side }`}>
      <div className='color-card-anchor'>
        <div className={`color-card__background-color color-card__background-color--${ color }`}></div>        
      </div>
    </div>
  )
}

function TwoColumn(props) {
  const {
    columns,
    column_gap,
    vertical_align,
    show_first_bg_card_=false,
    first_bg_card_color,
    show_second_bg_card_=false,
    second_bg_card_color,
  } = props;

  return (
    <div className={`two-column two-column--spacing-${ column_gap } two-column--vertical-align-${ vertical_align }`}>
      <div className='two-column__column'>
        { show_first_bg_card_ && <ColorCard color={ first_bg_card_color } side='left' /> }
        { columns[0] }
      </div>
      <div className='two-column__column'>
        { show_second_bg_card_ && <ColorCard color={ second_bg_card_color } side='right' /> }
        { columns[1] }
      </div>
    </div>
  )
}

export default TwoColumn