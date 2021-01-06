import React from 'react';
import CardInfo from './CardInfo';

function Card(props) {
  return (
    <div className="j-card" onClick={(e) => props.click(props.item)}>
      <img src={props.item.img} alt={props.item.img} />
      { props.item.selected && <CardInfo  title={props.item.title} description={props.item.description} link={props.item.link} /> }
    </div>
  )
}

export default Card;
