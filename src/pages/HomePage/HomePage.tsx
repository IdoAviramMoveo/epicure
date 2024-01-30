import "./HomePage.scss";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import CardsGallery from "../../components/CardsGallery/CardsGallery";
import ChefOfTheWeek from "../../components/ChefOfTheWeek/ChefOfTheWeek";
import Footer from "../../components/Footer/Footer";

import { CardType } from "../../models/types";
import RestaurantsData from "../../constants/RestaurantsData";
import DishesData from "../../constants/DishesData";
import YossiRestaurantsData from "../../constants/YossiRestaurantsData";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className='homepage-container'>
        <Hero />
        <CardsGallery cardsData={RestaurantsData} cardType={CardType.RestaurantType} />
        <CardsGallery cardsData={DishesData} cardType={CardType.DishType} />
        <ChefOfTheWeek />
        {/* <CardsGallery cardsData={YossiRestaurantsData} cardType={CardType.YossiRestaurantType} /> */}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
