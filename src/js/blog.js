import '/scss/blog.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useBlogSlider, useArticlesSlider } from './components/blog/slider.js';

useTheme();
useBurger();
useBlogSlider();
useArticlesSlider();
