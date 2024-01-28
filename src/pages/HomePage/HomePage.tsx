import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";

import claroRestaurant from "../../assets/images/claroRestaurant.png";
import onzaRestaurant from "../../assets/images/onzaRestaurant.png";
import padKiMao from "../../assets/images/padKiMao.png";
import spicyFoodIcon from "../../assets/images/spicyFoodIcon.svg";
import fourStars from "../../assets/images/fourStars.svg";

const HomePage = () => {
  return (
    <>
      <Header />
      <Card title='Claro' subtitle='Ran Shmueli' image={claroRestaurant} rating={fourStars} className='first-type' />
      <Card
        title='Pad Ki Mao'
        description='Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut'
        image={padKiMao}
        foodIcon={spicyFoodIcon}
        price={88}
      />
      <Card title='Onza' image={onzaRestaurant} className='third-type' />
      <Footer />
    </>
  );
};

export default HomePage;
