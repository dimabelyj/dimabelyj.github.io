window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'),
        modal = require('./parts/modal.js'),
        form = require('./parts/form.js'),
        slider = require('./parts/slider.js'),
        calculator = require('./parts/calculator.js');

    tabs();
    timer();
    modal();
    form();
    slider();
    calculator();

    // !!! Added timer !!!
    //   Tabs
    //  Modal    
    // Send form
    // Slider
    //  Calculator    
});