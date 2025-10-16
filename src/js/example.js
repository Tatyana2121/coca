// Импорт Swiper (если через модули в Vite)
import Swiper from 'swiper';
import 'swiper/css';

// Инициализация Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,  // Три видимых слайда
  spaceBetween: 10,  // Пробел между слайдами (опционально)
  // Другие опции: autoplay, navigation и т.д.
  on: {
    init: function() {
      updateSlideClasses(this);  // Обновить классы при инициализации
    },
    slideChange: function() {
      updateSlideClasses(this);  // Обновить классы при переключении
    }
  }
});

// Функция для обновления классов
function updateSlideClasses(swiper) {
  // Убрать старые классы со всех слайдов
  swiper.slides.forEach(slide => {
    slide.classList.remove('first-visible', 'middle-visible', 'other');
  });

  // Получить активный индекс (первый видимый слайд)
  const activeIndex = swiper.activeIndex;
  const slides = swiper.slides;

  // Добавить классы
  // Первый видимый: activeIndex
  if (slides[activeIndex]) {
    slides[activeIndex].classList.add('first-visible');
  }
  // Средний видимый: activeIndex + 1 (если есть)
  if (slides[activeIndex + 1]) {
    slides[activeIndex + 1].classList.add('middle-visible');
  }
  // Все остальные: other (третий видимый activeIndex + 2 и все невидимые)
  slides.forEach((slide, index) => {
    if (index !== activeIndex && index !== activeIndex + 1) {
      slide.classList.add('other');
    }
  });
}


export const useAboutSlider = () => {
//   const swiper = new Swiper('.hero__slider', {
//     slidesPerView: 'auto',
//     spaceBetween: 32,
//     loop: true,
//     centeredSlides: true,
//       on: {
//     init: function() {
//       console.log('Swiper init');
//       updateSlideClasses(this);  // Обновить классы при инициализации
//     },
//     slideChange: function() {
//       updateSlideClasses(this);  // Обновить классы при переключении
//     }
//   },
//     breakpoints: {
//       993: {
//         centeredSlides: false,
//       },
//     },
//   });
//   return swiper;
// };

// function updateSlideClasses(swiper) {
//   console.log('updateSlideClasses called, swiper:', swiper); 

//   if (!swiper || !swiper.slides) {
//     console.error('Swiper not ready');
//     return;
//   }

//   swiper.slides.forEach (slide => {
//     slide.classList.remove('hero__slide-first', 'hero__slide-middle');
//     // Если 'hero__slide' — базовый, не трогаем: slide.classList.remove('hero__slide'); // Уберите эту строку
//   });

//   const realIndex = swiper.realIndex;
//   const slides = swiper.slides;
//   const isCentered = window.innerWidth < 993 ? swiper.params.centeredSlides : false; 
//   let firstIndex, middleIndex;

//   if (isCentered) {
//     middleIndex = swiper.getSlideIndexByData(swiper.slides[swiper.activeIndex]) || realIndex; 
//     firstIndex = (realIndex - 1 + slides.length) % slides.length; 
//   } else {

//     firstIndex = realIndex;
//     middleIndex = realIndex + 1;
//   }

//   const firstSlide = slides.find(slide => {
//     const slideRealIndex = parseInt(slide.dataset.swiperSlideIndex) || swiper.getSlideIndexByData(slide);
//     return slideRealIndex === firstIndex;
//   });
//   if (firstSlide) {
//     firstSlide.classList.add('hero__slide-first');
//     console.log('Added first to index:', firstIndex);  
//   }

//   const middleSlide = slides.find(slide => {
//     const slideRealIndex = parseInt(slide.dataset.swiperSlideIndex) || swiper.getSlideIndexByData(slide);
//     return slideRealIndex === middleIndex;
//   });
//   if (middleSlide) {
//     middleSlide.classList.add('hero__slide-middle');
//     console.log('Added middle to index:', middleIndex);  // Отладка
//   }

//   // Остальные: other (но в вашем коде это 'hero__slide' — если нужно отдельный класс, добавьте 'hero__slide-other')
//   slides.forEach((slide) => {
//     const slideRealIndex = parseInt(slide.dataset.swiperSlideIndex) || swiper.getSlideIndexByData(slide);
//     if (slideRealIndex !== firstIndex && slideRealIndex !== middleIndex) {
//       slide.classList.add('hero__slide');  // Или 'hero__slide-other' для явного класса
//     }
//   });

//   console.log('Classes updated');  // Отладка
// }



import { useAboutSlider, useOurTeamSlider } from './components/about/slider.js';