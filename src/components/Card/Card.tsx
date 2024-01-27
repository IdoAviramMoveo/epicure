import "./Card.scss";

import ilsLogo from "../../assets/images/ilsLogo.svg";

type CardProps = {
  title: string;
  image: string;
  subtitle?: string;
  description?: string;
  foodIcon?: string;
  price?: number;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, image, subtitle, description, foodIcon, price, className }) => {
  return (
    <div className={`card ${className || ""}`}>
      <img src={image} alt={title} className='card-image' />
      <div className='card-content'>
        <div className='title-description-container'>
          <h3 className='card-title'>{title}</h3>
          {subtitle && <h4 className='card-subtitle'>{subtitle}</h4>}
          {description && <p className='card-description'>{description}</p>}
        </div>
        {foodIcon && <img src={foodIcon} alt='food icon' className='food-icon' />}
        {price && (
          <div className='card-price'>
            <img src={ilsLogo} alt='ILS' className='ils-icon' />
            {price}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
