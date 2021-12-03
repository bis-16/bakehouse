console.log('webpack. index.js')

import '../scss/style.scss'
import './script'
/*
import WOW from 'wowjs'
console.log('wow1!');

let wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default

        // callback:     function(box) {
        //     // the callback is fired every time an animation is started
        //     // the argument that is passed in is the DOM node being animated
        // },
        // scrollContainer: null,    // optional scroll container selector, otherwise use window,
        // resetAnimation: true,     // reset animation on end (default is true)
    }
)
wow.init();
//new WOW().init()
console.log('wow2!');
*/
//aos

import AOS from 'aos'
//require("aos/dist/aos.css");


AOS.init();

import popupBigImages from "@js/myPopUpBigImage";
import parallax from "@js/myParallax";
import slider from "@js/mySlider";
import anim from "@js/myAnimation";

slider();
popupBigImages();
parallax()
anim()

// import './myAnimation';




//import json from './assets/json'
//console.log('JSON:', json)

//import WebpackLogo from './assets/webpack-logo.png'