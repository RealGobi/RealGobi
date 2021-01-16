import React from 'react';


function CardInfo(props) {


  return (
    <div className="j-card-container">
      <p className="j-card-title ">{props.title}</p>
      <p  className="j-card-description">{props.description}</p>
      <a href={props.link} target="_blank" rel="noreferrer">Klicka här för att se</a>
      <div>
        <hr />
      {props.githubFront && <a className="github-link" style={{float:'left'}} href={props.githubFront} target="_blank" rel="noreferrer">Github Front End</a> }
      {props.githubBack && <a className="github-link" style={{float:'right'}}  href={props.githubBack} target="_blank" rel="noreferrer">Github Back End</a>}
      </div>

    </div>
  )
}

export default CardInfo;
