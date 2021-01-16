import React, {useRef} from 'react';
import CardInfo from './CardInfo';
import Modal from './Modal';

import useWindowDimensions from '../Hooks/useWindowDimensions';

function Card(props) {
  const { width } = useWindowDimensions();
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
        console.log('card');
  }

  return (
    <div className="j-card">
      <img src={props.item.img} alt={props.item.img} onClick={openModal} />
      <Modal ref={modalRef} >
        <div className="modal-container">
            <div className="close-modal" onClick={()=> modalRef.current.close()} >{width > 768 ? <p>X</p> : <p className="close-model-responsive">Stäng</p>}</div>
          <div className="card-j">
            <img src={props.item.img} alt={props.item.img} />
          </div>
          <div className="info">
            { <CardInfo  title={props.item.title} description={props.item.description} link={props.item.link} githubFront={props.item.githubFront} githubBack={props.item.githubBack} /> }
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Card;
