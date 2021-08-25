import React from 'react';

import { Buttons } from '../button/buttons';
import './modal.css';

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const source = localStorage.getItem("detail-gif")
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-child">
          <div>
            <img src={source} alt="gif-detail" className="gif-image" />
          </div>
          <div style={{padding: "1rem"}} />
          <Buttons title="Close" onClick={handleClose} color="bg-blue" />
        </div>
      </section>
    </div>
  );
}

export default Modal;