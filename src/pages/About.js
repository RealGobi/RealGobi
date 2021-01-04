import React from 'react';
import Hero from '../components/Hero';

function About(props) {
  return (
    <div>
      <Hero title={props.about} />
    </div>
  )
}

export default About;
