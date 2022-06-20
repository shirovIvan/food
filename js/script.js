import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/timer";
import forms from "./modules/timer";
import slider from './modules/slider';
import {openModal} from './modules/modal'

window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabs();
    modal('[data-modal]', '.modal', modalTimerId);
    timer();
    cards();
    forms(modalTimerId);
    slider();

});