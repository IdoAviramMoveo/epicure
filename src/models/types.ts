export type CardProps = {
  title: string;
  image: string;
  subtitle?: string;
  description?: string;
  foodIcon?: string;
  price?: number;
  className?: string;
  rating?: string;
};

export type Section = {
  title: string;
  cards: CardProps[];
};

export type CardsGalleryProps = {
  cardsData: Section;
  cardType: number;
};

export enum CardType {
  RestaurantType = 1,
  DishType = 2,
  YossiRestaurantType = 3,
}

export type ChefData = {
  title: string;
  chefName: string;
  image: string;
  chefDescription: string;
  restaurants: Section;
};
