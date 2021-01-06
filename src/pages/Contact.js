import React from 'react';
import Hero from '../components/Hero';
import JForm from '../components/JForm';

function Contact(props) {
  return (
    <div>
      <Hero title={props.contact} />
      <JForm />
    </div>
  )
}

export default Contact;
