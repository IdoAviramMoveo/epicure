import "./ChefOfTheWeek.scss";

import CardsGallery from "../../components/CardsGallery/CardsGallery";
import ChefOfTheWeekData from "../../constants/ChefOfTheWeekData";
import { CardType } from "../../models/types";

const ChefOfTheWeek = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${ChefOfTheWeekData.image})`,
  };
  return (
    <>
      <div className='chef-container'>
        <h3 className='chef-title'>{ChefOfTheWeekData.title}</h3>
        <div className='image-description-container'>
          <div className='chef-image-container' style={backgroundImageStyle}>
            <h3 className='chef-name'>{ChefOfTheWeekData.chefName}</h3>
          </div>
          <p className='chef-description'>{ChefOfTheWeekData.chefDescription}</p>
        </div>
      </div>
      <div className='chef-restaurants'>
        <CardsGallery cardsData={ChefOfTheWeekData.restaurants} cardType={CardType.YossiRestaurantType} />
      </div>
    </>
  );
};

export default ChefOfTheWeek;
