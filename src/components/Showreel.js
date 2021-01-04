import React, {useState} from 'react';

import ski from '../assets/ski.png';
import eWallet from '../assets/e-wallet.png';
import memory from '../assets/memory.png';
import starWars from '../assets/star.png';


function Showreel() {

  const [items, setItems] = useState(
[    {
    id: 0,
    title: 'Memory',
    description: 'Ett spel gjort i vanilla javascript.',
    img:'',
    link:'',
    selected: false
  },
    {
    id: 2,
    title: 'Star Wars',
    description: 'Jag gjorde ett arbetsprov där jag lekte runt i ett star wars API.',
    img:'',
    link:'',
    selected: false
  },
    {
    id: 3,
    title: 'E-Wallet',
    description: 'Slutprojekt i Morderna Ramverk, React Campus Varberg',
    img:'',
    link:'',
    selected: false
  }]
  )
  const handleCardClick = (id,card) => {
    let item = [...items];

    item[id].selected = item[id].selected ? false : true;

    item.forEach(i => {
      if(i.id !== id){
        i.selected = false;
      }
    });
  };

  return (
    <div>
      Showreel
    </div>
  )
}

export default Showreel;
