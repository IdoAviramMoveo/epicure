//import { Link } from "react-router-dom";

import "./Card.scss";

type CardProps = {
  title: string;
  image: string;
  subtitle?: string;
  description?: string;
  foodIcon?: string;
  price?: number;
};

const Card: React.FC<CardProps> = ({ title, image, subtitle, description, foodIcon, price }) => {
  return (
    <div className='card'>
      <img src={image} alt={title} className='card-image' />
      <div className='card-content'>
        <h3 className='card-title'>{title}</h3>
        {subtitle && <h4 className='card-subtitle'>{subtitle}</h4>}
        {description && <p className='card-description'>{description}</p>}
        {foodIcon && <img src={foodIcon} alt='food icon' className='food-icon' />}
        {price && <div className='card-price'>₪{price}</div>}
      </div>
    </div>
  );
};

export default Card;
