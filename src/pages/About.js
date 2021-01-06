import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

function About(props) {
  return (
    <div style={{marginBottom:"100px"}}>
      <Hero title={props.about} />
      <Content>
        <p>Hej Jag heter Jimmy och är en nyexad/omskolad till Front End Developer. Jag har erfarenhet i bl a JavaScrips, TypeScript, PHP och Node.js. Jag läser helatiden ny kurser för att fördjupa och utöka mitt kunskapsområde. Sörsta fokus ligger i JavaScript och React, men även testat på en hel del av både Vue och Angular+2.</p>
        <p>Det mesta jag bygger och lär mig just nu kretsar runt React i frontend och Node och MongoDB i backend. <a href="www.realgobi.se">Här</a> på hemsidan finner du en del projekt jag jobbat med som ligger online, jag har även en hel del projekt på min <a href="https://github.com/RealGobi">github</a>.</p>
      </Content>
    </div>
  )
}

export default About;
