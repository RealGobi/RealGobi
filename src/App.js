import React, {useState} from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  const [siteTitle, setSiteTitle] = useState('Jimmy Svensson');
  const [siteHederLink, setsiteHederLink] = useState({
    headerLink: [
      {title: 'Home', path:'/'},
      {title: 'About', path:'/about'},
      {title: 'Contact', path:'/contact'}
    ]
  });

  const [home, setHome] = useState({
    title:'Projekt jag gjort',
    subTitle:'Med fokus på Front end, men gärna lite Back end.',
    tagLine: 'Kolla här under, för att se lite av vad jag gjort.',
    tagLineRes: 'Scrolla ner här under, för att se lite av vad jag gjort.'
  });

  const [about, setAbout] = useState('Om mig');
  const [contact, setContact] = useState('Låt oss ta det över en kaffe.');
  
  return (
    <Router className="App">
      <Container className="p-0" fluid={true}>
        <Header title={siteTitle} />
            <Route path="/" exact render={()=> <Home title={home.title} subTitle={home.subTitle} tagLine={home.tagLine} tagLineRes={home.tagLineRes} /> } />
            <Route path="/about" render={()=> <About about={about} /> } />
            <Route path="/contact" render={()=> <Contact contact={contact} /> } />
            <Redirect to="/" />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
