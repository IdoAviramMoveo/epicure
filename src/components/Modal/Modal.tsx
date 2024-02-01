import React from "react";
import { Fade } from "react-awesome-reveal";

import "./Modal.scss";

import Card from "../Card/Card";
import { ModalProps } from "../../models/types";
import xModal from "../../assets/images/xModal.svg";

const Modal: React.FC<ModalProps> = ({ card, onClose }) => {
  return (
    <div className='modal-backdrop' onClick={onClose}>
      <Fade cascade duration={300}>
        <div className='modal-container'>
          <div className='modal-btn-container'>
            <button className='modal-close-btn' onClick={onClose}>
              <img src={xModal} alt='Close' />
            </button>
          </div>
          <Card {...card} className='modal' />
        </div>
      </Fade>
    </div>
  );
};

export default Modal;
