import React, {useState, forwardRef, useImperativeHandle} from 'react';
import ReactDOM from 'react-dom';

import './modal.css';

const Modal = forwardRef((props, ref) => {
  const [openModal, setOpenModal] = useState(false);
  
  useImperativeHandle(ref, ()=>{
    return {
      openModal:()=>open(),
      close: ()=> close()
    }
  });

  const open = () => {
    setOpenModal(true);
    console.log('modal');
  }

  const close = () => {
    setOpenModal(false);
  }

  if (openModal) {
    return ReactDOM.createPortal(
      <div className='modal-wrapper'>
      <div onClick={()=>close()} className='modal-backdrop-j' />
        <div className='modal-box'>
          {props.children}
        </div>
      </div>,
      document.getElementById('modal-root')
    )
  }
  return null;
});

export default Modal;
