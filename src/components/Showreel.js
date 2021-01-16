import React, {useState} from 'react';
import Card from './Card';
import Modal from './Modal'

import ski from '../assets/ski.png';
import eWallet from '../assets/e-wallet.png';
import memory from '../assets/memory.png';
import starWars from '../assets/star.png';
import dinner from '../assets/dinner.png';
import CardInfo from './CardInfo';


function Showreel() {

  const [items, setItems] = useState(
[{
    id: 0,
    title: 'Star Wars',
    description: 'Jag gjorde ett arbetsprov där jag lekte runt i ett star wars API. Gjort i React. Jag fick en färdig design att jobba efter och beskrivning av funktioner.',
    img:starWars,
    link:'star/index.html',
    githubFront: 'https://github.com/RealGobi/star-wars'
  },
  {
    id: 10,
    title: 'Let\'s do Dinner',
    description: 'Examensarbete på Medieinstitutet. Gjort av mig och Åsa. Gjort i React med Redux, React Router, Scss på frontend och med Node.js, Express, MongoDB mm på backend. (OBS, gjord för Ipad och mobil)',
    img:dinner,
    link:'/dinner',
    githubFront: 'https://github.com/RealGobi/Project-X',
    githubBack: 'https://github.com/RealGobi/Backitup'
  },
    {
    id: 1,
    title: 'E-Wallet',
    description: 'Slutprojekt i Morderna Ramverk, React Campus Varberg. Gjord med React, React Router, Context mm',
    img:eWallet,
    link:'cards/build/index.html',
    githubFront: 'https://github.com/React-Campus-Varberg/inlamningsuppgft-e-wallet-RealGobi'
  },
/*     {
    id: 9,
    title: 'Memory',
    description: 'Memory i vanilla JavaScript.',
    img:memory,
    link:'Memory/index.html',
  }, */
/*   {
    id: 2,
    title: 'Fjällgården',
    description: 'Projekt med både frontend och backend. Vi var 3 personer som på kort tid skulle lösa en boknings app. Gjord med Vue och dess ekosystem och Node.js',
    img:ski,
    link:'ski/index.html#/home',
  } */
]
  );


  return (
    <div className="show-reel">
      <div className="j-row">
        {
        items.map(item =>{
          return (
              <Card item={item} key={item.id} />
          )
        })
        }
      </div>
    </div>
  )
};

export default Showreel;
