import React from 'react';
import {useSpring, animated} from 'react-spring';


function CardInfo(props) {

  const style = useSpring({opacity:1, from: {opacity: 0} });

  return (
    <animated.div className="j-card-container" style={style} >
      <p className="j-card-title">{props.title}</p>
      <p  className="j-card-description">{props.description}</p>
      <a href={props.link} target="_blank" rel="noreferrer">Klicka här för att se</a>
    </animated.div>
  )
}

export default CardInfo;
