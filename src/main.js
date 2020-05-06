import './styles/style.scss';
import script from './script.js';
import 'jquery';
import 'popper.js';
import 'bootstrap';

import { scrollFunc, scrollToTop , currentDateUpdate} from "./mainModules";



document.addEventListener("DOMContentLoaded", function () {

    const scrollArrow = document.querySelector('.scroll-arrow');

    scrollArrow.onclick = function (e) {
        e.preventDefault();
        scrollToTop();
    }
    window.addEventListener("scroll", scrollFunc);

    currentDateUpdate();
});


script();



