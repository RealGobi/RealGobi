import React from 'react';
import Hero from '../components/Hero';
import Showreel from '../components/Showreel';

function Home(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} tagLine={props.tagLine} tagLineRes={props.tagLineRes} />
      <Showreel />
    </div>
  )
}

export default Home;
