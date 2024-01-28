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
  rating?: string;
};

const Card: React.FC<CardProps> = ({ title, image, subtitle, description, foodIcon, price, className, rating }) => {
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
            {foodIcon && <img src={foodIcon} alt='Food Icon' className='food-icon' />}
          </div>
          {rating && <img src={rating} alt='Rating Stars' className='rating-image' />}
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
