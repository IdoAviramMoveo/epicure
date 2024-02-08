import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";

import "./Modal.scss";

import Card from "../Card/Card";
import { closeModal } from "../../redux-toolkit/slices/homePageSlice";
import { RootState } from "../../redux-toolkit/store";
import xModal from "../../assets/images/xModal.svg";

const Modal = () => {
  const dispatch = useDispatch();
  const selectedCard = useSelector((state: RootState) => state.homePage.selectedCard);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className='modal-backdrop' onClick={handleClose}>
      <Fade cascade duration={300}>
        <div className='modal-container' onClick={(e) => e.stopPropagation()}>
          <div className='modal-btn-container'>
            <button className='modal-close-btn' onClick={handleClose}>
              <img src={xModal} alt='Close' />
            </button>
          </div>
          {selectedCard && <Card {...selectedCard} className='modal' />}
        </div>
      </Fade>
    </div>
  );
};

export default Modal;
