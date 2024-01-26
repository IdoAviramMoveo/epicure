import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";

import claroRestaurant from "../../assets/images/claroRestaurant.png";
import onzaRestaurant from "../../assets/images/onzaRestaurant.png";
import spicyFoodIcon from "../../assets/images/spicyFoodIcon.svg";

const HomePage = () => {
  return (
    <>
      <Header />
      <Card title='Claro' subtitle='Ran Shmueli' image={claroRestaurant} />
      <Card
        title='Pad Ki Mao'
        description='Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut'
        image={claroRestaurant}
        foodIcon={spicyFoodIcon}
        price={88}
      />
      <Card title='Onza' image={onzaRestaurant} />
      <Footer />
    </>
  );
};

export default HomePage;
