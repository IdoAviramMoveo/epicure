import "./StoreButton.scss";
import { StoreButtonProps } from "../../../../models/types";

const StoreButton: React.FC<StoreButtonProps> = ({ icon, text, store }) => {
  return (
    <button className='store-button'>
      <img className='store-icon' src={icon} alt={`${store} Icon`} />
      <div className='store-text'>
        <div className='first-line'>{text}</div>
        <div className='second-line'>{store}</div>
      </div>
    </button>
  );
};

export default StoreButton;
