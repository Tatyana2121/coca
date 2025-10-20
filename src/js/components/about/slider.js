import Swiper from 'swiper';
import 'swiper/css';

export const useAboutSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    autoHeight: true,
    slideActiveClass: 'hero__slide-middle',
    slidePrevClass: 'hero__slide-first',
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
};

export const useOurTeamSlider = () => {
  new Swiper('.ourTeam__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    breakpoints: {
      993: {
        slidesPerView: 3,
      },
    },
  });
};
