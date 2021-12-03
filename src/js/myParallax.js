//import $ from 'jquery'
//import "https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"
import Parallax from "parallax-js"
//import bgscroll from './bgscroll'

function parallax() {
    var scene = document.getElementById('parallax_logo');
    var parallax0 = new Parallax(scene);
}

    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 800) {
    //         $('#arrow_up').fadeIn();
    //         //$('.main_logo_mini').fadeIn();
    //         $('header').fadeIn();
    //     } else {
    //         $('#arrow_up').fadeOut();
    //         //$('.main_logo_mini').fadeOut();
    //         $('.header').fadeOut();
    //     }
    //
    //     //parallax ?
    //     $('.background1').bgscroll({direction: 'bottom'});
    //     $('.background2').bgscroll({direction: 'top'});
    // });
    // $('#arrow_up').click(function () {
    //     var _navmenu = $(this).attr("nav");
    //     $("html, body").animate({scrollTop: $(_navmenu).offset().top + "px"});
    //     return false;
    // });
    //
    // $(function () {
    //     $("a[href^='#']").click(function () {
    //         var _href = $(this).attr("href");
    //         $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
    //         return false;
    //     });
    // });


export default parallax;