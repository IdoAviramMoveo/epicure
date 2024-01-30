import { Section } from "../models/types";

import claroRestaurant from "../assets/images/claroRestaurant.png";
import kabKemRestaurant from "../assets/images/kabKemRestaurant.png";
import luminaRestaurant from "../assets/images/luminaRestaurant.png";
import messaRestaurant from "../assets/images/messaRestaurant.png";
import nitanThaiRestaurant from "../assets/images/nitanThaiRestaurant.png";
import onzaRestaurant from "../assets/images/onzaRestaurant.png";
import tigerLillyRestaurant from "../assets/images/tigerLillyRestaurant.png";
import yaPanRestaurant from "../assets/images/yaPanRestaurant.png";

import fourStars from "../assets/images/fourStars.svg";

const RestaurantsData: Section = {
  title: "POPULAR RESTAURANT IN EPICURE:",
  cards: [
    {
      title: "Claro",
      image: claroRestaurant,
      subtitle: "Ran Shmueli",
      rating: fourStars,
    },
    {
      title: "Kab Kem",
      image: kabKemRestaurant,
      subtitle: "Yariv Malili",
      rating: fourStars,
    },

    {
      title: "Messa",
      image: messaRestaurant,
      subtitle: "Aviv Moshe",
      rating: fourStars,
    },
    {
      title: "Nitan Thai",
      image: nitanThaiRestaurant,
      subtitle: "Shahaf Shabtay",
      rating: fourStars,
    },
    {
      title: "Tiger Lilly",
      image: tigerLillyRestaurant,
      subtitle: "Yanir Green",
      rating: fourStars,
    },
    {
      title: "Ya Pan",
      image: yaPanRestaurant,
      subtitle: "Yuval Ben Moshe",
      rating: fourStars,
    },
    {
      title: "Lumina",
      image: luminaRestaurant,
      subtitle: "Chef Name",
      rating: fourStars,
    },
    {
      title: "Onza",
      image: onzaRestaurant,
      subtitle: "Chef Name",
      rating: fourStars,
    },
  ],
};

export default RestaurantsData;
