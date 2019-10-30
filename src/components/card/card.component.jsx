import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='monster'
      src={props.monster.image}
      onClick={()=>{props.clicks(props.monster.id)}}
    />
  </div>
);