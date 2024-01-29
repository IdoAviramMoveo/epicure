import "./HomePage.scss";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import CardsSection from "../../components/CardsSection/CardsSection";
import IconsMeaning from "../../components/IconsMeaning/IconsMeaning";
import Footer from "../../components/Footer/Footer";

import RestaurantsData from "../../constants/RestaurantsData";
import DishesData from "../../constants/DishesData";
import YossiRestaurantsData from "../../constants/YossiRestaurantsData";
import IconsData from "../../constants/IconsData";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className='homepage-container'>
        <Hero />
        <CardsSection cardsData={RestaurantsData} cardType={1} />
        <CardsSection cardsData={DishesData} cardType={2} />
        <IconsMeaning icons={IconsData} />
        <CardsSection cardsData={YossiRestaurantsData} cardType={3} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
