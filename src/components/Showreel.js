import React, {useState} from 'react';
import Card from './Card';
import { Container, Row } from 'react-bootstrap';

import ski from '../assets/ski.png';
import eWallet from '../assets/e-wallet.png';
import memory from '../assets/memory.png';
import starWars from '../assets/star.png';


function Showreel() {

  const [items, setItems] = useState(
[{
    id: 0,
    title: 'Star Wars',
    description: 'Jag gjorde ett arbetsprov där jag lekte runt i ett star wars API. Gjort i React',
    img:starWars,
    link:'www.realgobi.se/star/index.html',
    selected: false
  },
    {
    id: 1,
    title: 'E-Wallet',
    description: 'Slutprojekt i Morderna Ramverk, React Campus Varberg. Gjord med React, React Router, Context mm',
    img:eWallet,
    link:'www.realgobi.se/cards/build/index.html',
    selected: false
  },{
    id: 2,
    title: 'Ski',
    description: 'Projekt med både frontend och backend. Vi var 3 personer som på kort tid skulle lösa en boknings app. Gjord med Vue och dess ekosystem och Node.js',
    img:ski,
    link:'www.realgobi.se/ski/index.html#/home',
    selected: false
  }]
  );

  const handleCardClick = (id,card) => {
    console.log(id);
    let item = [...items];


    item.forEach(i => {
      if(i.id !== id){
        i.selected = false;
      }else {
        i.selected = true;
      }
    });
    setItems(item);
  };

  const contentToItem = () => {
    return(
      items.map(item =>{
        return <Card key={item.id} item={item} click={e => handleCardClick(item.id, e)} />
      })
    )
  };

  return (
    <div className="show-reel">
      <div className="j-row">
        {contentToItem(items)}
      </div>
    </div>
  )
};

export default Showreel;
