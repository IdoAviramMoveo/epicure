import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

export const SwiperConfig = (spaceBetween: number) => ({
  modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
  initialSlide: 0,
  spaceBetween: 24,
  slidesPerView: "auto" as const,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    900: {
      spaceBetween: spaceBetween,
      slidesPerView: "auto" as const,
    },
  },
  watchOverflow: true,
});
