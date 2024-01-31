import React from "react";
import { Fade } from "react-awesome-reveal";

import "./Modal.scss";

import { ModalProps } from "../../models/types";
import ilsLogo from "../../assets/images/ilsLogo.svg";
import xModal from "../../assets/images/xModal.svg";

const Modal: React.FC<ModalProps> = ({ dish, onClose }) => {
  return (
    <div className='modal-backdrop' onClick={onClose}>
      <Fade cascade duration={300}>
        <div className='modal-btn-container'>
          <button className='modal-close-btn' onClick={onClose}>
            <img src={xModal} alt='Close' />
          </button>
        </div>
        <div className='modal-container' onClick={(event) => event.stopPropagation()}>
          <img className='modal-image' src={dish.image} alt={dish.title} />
          <div className='modal-content'>
            <h3 className='modal-title'>{dish.title}</h3>
            <p className='card-description'>{dish.description} </p>
            <img src={dish.foodIcon} alt='Food Icon' className='modal-food-icon' />
            <div className='modal-price'>
              <div className='modal-line'></div>
              <div className='value-logo-container'>
                <img src={ilsLogo} alt='ILS' className='modal-ils-icon' />
                <span className='modal-price-value'>{dish.price} </span>
              </div>
              <div className='modal-line'></div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Modal;
