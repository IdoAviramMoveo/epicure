import { AboutUsDataType } from "../models/types";

import epicureLogo from "../assets/images/epicureLogo.png";
import googlePlayIcon from "../assets/images/googlePlayIcon.svg";
import appleIcon from "../assets/images/appleIcon.svg";

const AboutUsData: AboutUsDataType = {
  title: "ABOUT US:",
  logo: epicureLogo,
  storeButtons: [
    {
      icon: googlePlayIcon,
      text: "Get it on",
      store: "Google Play",
    },
    {
      icon: appleIcon,
      text: "Download on the",
      store: "App Store",
    },
  ],
  descriptionOne:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blanditturpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, dignissim a vestibulum.",
  descriptionTwo:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.",
};

export default AboutUsData;
