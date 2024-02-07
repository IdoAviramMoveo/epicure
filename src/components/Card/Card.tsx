import "./Card.scss";
import { CardProps } from "../../models/types";

import ilsLogo from "../../assets/images/ilsLogo.svg";
import oneStar from "../../assets/images/oneStar.svg";
import twoStars from "../../assets/images/twoStars.svg";
import threeStars from "../../assets/images/threeStars.svg";
import fourStars from "../../assets/images/fourStars.svg";
import fiveStars from "../../assets/images/fiveStars.svg";
import spicyFoodIcon from "../../assets/images/spicyFoodIcon.svg";
import veganFoodIcon from "../../assets/images/veganFoodIcon.svg";
import vegiFoodIcon from "../../assets/images/vegiFoodIcon.svg";

const Card: React.FC<CardProps> = ({ title, image, subtitle, description, foodIcon, price, className, rating }) => {
  const getRatingImage = (rating: string) => {
    switch (rating.length) {
      case 1:
        return oneStar;
      case 2:
        return twoStars;
      case 3:
        return threeStars;
      case 4:
        return fourStars;
      case 5:
        return fiveStars;
      default:
        return oneStar;
    }
  };

  const getFoodIcon = (foodIcon: string): string | undefined => {
    switch (foodIcon) {
      case "Spicy":
        return spicyFoodIcon;
      case "Vegan":
        return veganFoodIcon;
      case "Vegi":
        return vegiFoodIcon;
      default:
        return undefined;
    }
  };

  return (
    <div className={`card ${className || ""}`}>
      <div className='image-container'>
        <img src={image} alt={title} className='card-image' />
      </div>
      <div className='card-content'>
        <h3 className='card-title'>{title}</h3>
        <div className='description-icon-price'>
          <div className='description-icon'>
            {subtitle && <h4 className='card-subtitle'>{subtitle}</h4>}
            {description && <p className='card-description'>{description}</p>}
            {foodIcon && <img src={getFoodIcon(foodIcon)} alt='Food Icon' className='food-icon' />}
          </div>
          {rating && <img src={getRatingImage(rating)} alt='Rating Stars' className='rating-image' />}
          {price && (
            <div className='card-price'>
              <div className='line'></div>
              <div className='value-logo-container'>
                <img src={ilsLogo} alt='ILS' className='ils-icon' />
                <span className='price-value'>{price} </span>
              </div>
              <div className='line'></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
