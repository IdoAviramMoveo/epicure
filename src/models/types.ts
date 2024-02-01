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
  onDishClick?: (dish: CardProps) => void;
};

export enum CardType {
  RestaurantType = 1,
  DishType = 2,
  YossiRestaurantType = 3,
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
};

export type ModalProps = {
  card: CardProps;
  onClose: () => void;
};
