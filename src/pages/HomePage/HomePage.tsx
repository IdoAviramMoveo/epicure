import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux-toolkit/store";
import { fetchHomePageData } from "../../redux-toolkit/thunks/homePageThunk";

import "./HomePage.scss";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import CardsGallery from "../../components/CardsGallery/CardsGallery";
import IconsMeaning from "../../components/IconsMeaning/IconsMeaning";
import ChefOfTheWeek from "../../components/ChefOfTheWeek/ChefOfTheWeek";
import AboutUs from "../../components/AboutUs/AboutUs";
import Modal from "../../components/Modal/Modal";
import Footer from "../../components/Footer/Footer";

import { CardType, CardProps } from "../../models/types";
import IconsData from "../../constants/IconsData";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardProps | null>(null);

  const restaurantsData = useSelector((state: RootState) => state.homePage.restaurants);
  const dishesData = useSelector((state: RootState) => state.homePage.dishes);
  const chefsOfTheWeekData = useSelector((state: RootState) => state.homePage.chefsOfTheWeek);

  const chefOfTheWeekData = chefsOfTheWeekData.length > 0 ? chefsOfTheWeekData[0] : null;

  const handleDishClick = (card: CardProps) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  useEffect(() => {
    dispatch(fetchHomePageData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className='homepage-container'>
        <Hero />
        <div className='cards-gallery'>
          <CardsGallery cardsData={restaurantsData} cardType={CardType.RestaurantType} />
          <CardsGallery cardsData={dishesData} cardType={CardType.DishType} onDishClick={handleDishClick} />
        </div>
        <IconsMeaning icons={IconsData} />
        <div className='cards-gallery'>{chefOfTheWeekData && <ChefOfTheWeek chefData={chefOfTheWeekData} />}</div>
        <AboutUs />
      </div>
      <Footer />

      {isModalOpen && selectedCard && <Modal card={selectedCard} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default HomePage;
