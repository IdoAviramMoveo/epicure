import "./AboutUs.scss";

import StoreButton from "./components/StoreButton/StoreButton";
import AboutUsData from "../../constants/AboutUsData";

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <img className='app-logo' src={AboutUsData.logo} alt='Epicure Logo' />
      <div className='description-and-buttons'>
        <div className='store-buttons'>
          {AboutUsData.storeButtons.map((button, index) => (
            <StoreButton key={index} icon={button.icon} text={button.text} store={button.store} />
          ))}
        </div>
        <div className='about-us'>
          <h3 className='about-us-title'>{AboutUsData.title}</h3>
          <p className='about-us-description part-one'>{AboutUsData.descriptionOne}</p>
          <p className='about-us-description part-two'>{AboutUsData.descriptionTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
