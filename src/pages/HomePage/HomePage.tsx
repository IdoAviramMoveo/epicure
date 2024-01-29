import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import CardsSection from "../../components/CardsSection/CardsSection";
import Footer from "../../components/Footer/Footer";

import RestaurantsData from "../../constants/RestaurantsData";
import DishesData from "../../constants/DishesData";
import YossiRestaurantsData from "../../constants/YossiRestaurantsData";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <CardsSection cardsData={RestaurantsData} cardType={1} />
      <CardsSection cardsData={DishesData} cardType={2} />
      <CardsSection cardsData={YossiRestaurantsData} cardType={3} />
      <Footer />
    </>
  );
};

export default HomePage;
