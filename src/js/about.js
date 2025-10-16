import '/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useAboutSlider, useOurTeamSlider } from './components/about/slider.js';

useTheme();
useBurger();
useAboutSlider();
useOurTeamSlider();
