import "./AboutUs.scss";
import AboutUsData from "../../constants/AboutUsData";

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <img className='app-logo' src={AboutUsData.logo} alt='Epicure Logo' />
      <div className='store-buttons'>
        {AboutUsData.storeButtons.map((button, index) => (
          <div key={index} className={"store-button"}>
            <img className='store-icon' src={button.icon} alt={`${button.store} Icon`} />
            <div className='store-text'>
              <div className='first-line'>{button.text}</div> <div className='second-line'>{button.store}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='about-us'>
        <h3 className='about-us-title'>{AboutUsData.title}</h3>
        <p className='about-us-description part-one'>{AboutUsData.descriptionOne}</p>
        <p className='about-us-description part-two'>{AboutUsData.descriptionTwo}</p>
      </div>
    </div>
  );
};

export default AboutUs;
