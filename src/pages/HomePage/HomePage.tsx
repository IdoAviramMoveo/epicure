import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux-toolkit/store";

import "./HomePage.scss";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import CardsGallery from "../../components/CardsGallery/CardsGallery";
import IconsMeaning from "../../components/IconsMeaning/IconsMeaning";
import ChefOfTheWeek from "../../components/ChefOfTheWeek/ChefOfTheWeek";
import AboutUs from "../../components/AboutUs/AboutUs";
import Modal from "../../components/Modal/Modal";
import Footer from "../../components/Footer/Footer";

import { fetchHomePageData } from "../../redux-toolkit/thunks/homePageThunk";
import { openModal } from "../../redux-toolkit/slices/homePageSlice";
import { CardType, CardProps } from "../../models/types";
import IconsData from "../../constants/IconsData";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { popularRestaurants, signatureDishes, chefOfTheWeek, isModalOpen } = useSelector(
    (state: RootState) => state.homePage
  );

  const handleDishClick = (card: CardProps) => {
    dispatch(openModal(card));
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
          <CardsGallery cardsData={popularRestaurants} cardType={CardType.RestaurantType} />
          <CardsGallery cardsData={signatureDishes} cardType={CardType.DishType} onDishClick={handleDishClick} />
        </div>
        <IconsMeaning icons={IconsData} />
        <div className='cards-gallery'>
          {" "}
          <ChefOfTheWeek chefData={chefOfTheWeek} />
        </div>
        <AboutUs />
      </div>
      <Footer />

      {isModalOpen && <Modal />}
    </>
  );
};

export default HomePage;
