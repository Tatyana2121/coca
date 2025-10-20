import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useBlogSlider = () => {
  new Swiper('.blog__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
  });
};

export const useArticlesSlider = () => {
  new Swiper('.articlesSlider__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    navigation: {
      prevEl: '.articlesSlider__btn--prev',
      nextEl: '.articlesSlider__btn--next',
    },
  });
};
