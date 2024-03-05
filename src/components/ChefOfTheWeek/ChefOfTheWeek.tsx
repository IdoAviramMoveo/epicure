import "./ChefOfTheWeek.scss";

import CardsGallery from "../../components/CardsGallery/CardsGallery";
import { CardType, ChefOfTheWeekProps } from "../../models/types";
import { Fade } from "react-awesome-reveal";

const ChefOfTheWeek: React.FC<ChefOfTheWeekProps> = ({ chefData }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${chefData.image})`,
  };
  return (
    <>
      <Fade>
        <div className='chef-container'>
          <h3 className='chef-title'>{chefData.title}</h3>
          <div className='image-description-container'>
            <div className='chef-image-container' style={backgroundImageStyle}>
              <h3 className='chef-name'>{chefData.chefName}</h3>
            </div>
            <p className='chef-description'>{chefData.chefDescription}</p>
          </div>
        </div>
        <div className='chef-restaurants'>
          <CardsGallery cardsData={chefData.restaurants} cardType={CardType.ChefRestaurantType} />
        </div>
      </Fade>
    </>
  );
};

export default ChefOfTheWeek;
