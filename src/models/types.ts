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

export type StoreButton = {
  icon: string;
  text: string;
  store: string;
};

export type AboutUsDataType = {
  title: string;
  logo: string;
  storeButtons: StoreButton[];
  descriptionOne: string;
  descriptionTwo: string;
};
