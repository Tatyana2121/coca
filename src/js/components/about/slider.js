import Swiper from 'swiper';
import 'swiper/css';

export const useAboutSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    slideActiveClass: 'hero__slide-middle',
    slidePrevClass: 'hero__slide-first',
    // slideNextClass: 'my-next-slide'
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