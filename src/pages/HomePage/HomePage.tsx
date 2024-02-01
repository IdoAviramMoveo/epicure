import { useState } from "react";

import "./HomePage.scss";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import CardsGallery from "../../components/CardsGallery/CardsGallery";
import IconsMeaning from "../../components/IconsMeaning/IconsMeaning";
import ChefOfTheWeek from "../../components/ChefOfTheWeek/ChefOfTheWeek";
import AboutUs from "../../components/AboutUs/AboutUs";
import Modal from "../../components/Modal/Modal";
import Footer from "../../components/Footer/Footer";

import { CardType } from "../../models/types";
import RestaurantsData from "../../constants/RestaurantsData";
import DishesData from "../../constants/DishesData";
import IconsData from "../../constants/IconsData";
import { CardProps } from "../../models/types";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardProps | null>(null);

  const handleDishClick = (card: CardProps) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  return (
    <>
      <Header />
      <div className='homepage-container'>
        <Hero />
        <div className='cards-gallery'>
          <CardsGallery cardsData={RestaurantsData} cardType={CardType.RestaurantType} />
          <CardsGallery cardsData={DishesData} cardType={CardType.DishType} onDishClick={handleDishClick} />
        </div>
        <IconsMeaning icons={IconsData} />
        <div className='cards-gallery'>
          <ChefOfTheWeek />
        </div>
        <AboutUs />
      </div>
      <Footer />

      {isModalOpen && selectedCard && <Modal card={selectedCard} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default HomePage;
