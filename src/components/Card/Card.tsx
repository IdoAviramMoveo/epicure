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
      <div className='image-container'>
        <img src={image} alt={title} className='card-image' />
      </div>
      <div className='card-content'>
        <h3 className='card-title'>{title}</h3>
        <div className='description-icon-price'>
          <div className='description-icon'>
            {subtitle && <h4 className='card-subtitle'>{subtitle}</h4>}
            {description && <p className='card-description'>{description}</p>}
            {foodIcon && <img src={foodIcon} alt='food icon' className='food-icon' />}
          </div>
          {price && (
            <div className='card-price'>
              <img src={ilsLogo} alt='ILS' className='ils-icon' />
              {price}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
