import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

export const SwiperConfig = (spaceBetween: number) => ({
  modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
  initialSlide: 0,
  spaceBetween: 24,
  slidesPerView: 1.4,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 0,
    modifier: 0,
    slideShadows: true,
  },
  breakpoints: {
    900: {
      spaceBetween: spaceBetween,
      slidesPerView: 3,
    },
  },
  watchOverflow: true,
});
