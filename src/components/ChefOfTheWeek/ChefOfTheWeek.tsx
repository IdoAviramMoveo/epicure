import "./ChefOfTheWeek.scss";

import CardsGallery from "../../components/CardsGallery/CardsGallery";
import ChefYossiData from "../../constants/ChefYossiData";
import { CardType } from "../../models/types";

const ChefOfTheWeek = () => {
  return (
    <>
      <div className='chef-container'>
        <h3 className='chef-title'>{ChefYossiData.title}</h3>
        <div className='image-description-container'>
          <div className='chef-image-container '>
            <img src={ChefYossiData.image} alt='Chef Yossi' className='chef-image' />
            <h3 className='chef-name'>{ChefYossiData.chefName}</h3>
          </div>
          <p className='chef-description'>{ChefYossiData.chefDescription}</p>
        </div>
      </div>
      <div className='yossi-restaurants'>
        <CardsGallery cardsData={ChefYossiData.restaurants} cardType={CardType.YossiRestaurantType} />
      </div>
    </>
  );
};

export default ChefOfTheWeek;
