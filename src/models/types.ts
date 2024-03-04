export type CardProps = {
  title: string;
  image: string;
  subtitle?: string;
  description?: string;
  foodIcons?: string[];
  price?: number;
  className?: string;
  rating?: string;
  isPopular?: boolean;
  _id?: string;
};

export type Section = {
  title: string;
  cards: CardProps[];
};

export type CardsGalleryProps = {
  cardsData: Section;
  cardType: number;
  isSearch?: boolean;
};

export enum CardType {
  RestaurantType = 1,
  DishType = 2,
  ChefRestaurantType = 3,
}

export type StoreButtonProps = {
  icon: string;
  text: string;
  store: string;
};

export type AboutUsDataType = {
  title: string;
  logo: string;
  storeButtons: StoreButtonProps[];
  descriptionOne: string;
  descriptionTwo: string;
};

export type ChefData = {
  title: string;
  chefName: string;
  image: string;
  chefDescription: string;
  restaurants: Section;
  _id?: string;
};

export type ModalProps = {
  card: CardProps;
  onClose: () => void;
};

export type ChefOfTheWeekProps = {
  chefData: ChefData;
};
