//import images from "./images";

//import * as $ from 'jquery'
//import * as $ from 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'
// import 'animate.css'

//import $ from "jquery";
import allCakes from "@js/cakes/allcakes";
import MenuCard from "@js/cakes/menu_card";
import 'slick-carousel';
//import './bgscroll'


'use strict'

document.addEventListener('DOMContentLoaded',()=> {
    console.log('script.js')
    const btnMenulist = document.querySelectorAll('.menulist__item'),
      menulistContent = document.querySelectorAll('.js_cakes'),
          wrapperHide = document.querySelector('.wrapper__hide');
    let prevWrapperIndex = btnMenulist.length;

    function MenulistContent(i) {
         function hideMenulistContent() {
            menulistContent.forEach(item => {
                item.classList.add('hide')
                item.classList.remove('show', 'hide-animation');
            });
        }
        function showMenulistContent(i = 0) {
            menulistContent[i].classList.add('show');
            menulistContent[i].classList.remove('hide', 'hide-animation');
        }
        menulistContent[prevWrapperIndex].classList.add('hide-animation')
        setTimeout(() => {
            hideMenulistContent();
            showMenulistContent(i)
        }, 400);
    }

    function menulistButtons() {
        for (let i = 0; i < btnMenulist.length; i++) {
            btnMenulist[i].addEventListener('click', event => {
                event.preventDefault();
                MenulistContent(i);
                prevWrapperIndex = i;
                btnMenulist.forEach(item => item.classList.remove('menulist-btn__active') )
                btnMenulist[i].classList.add('menulist-btn__active');
            });
        }
    }

    function f(x) {

        let item1 = 0;
        item1 = document.querySelectorAll(".item")
        item1.forEach(subItem => {

        })


    }

    /*
    function foxyFlowers() {
        const element = document.createElement('div')

        element.innerHTML = `
                <a href="https://www.instagram.com/flower_fox_nsk/" target="_blank">
                    <button class="button-more button_more_menulist">
                        <div class="text">Цветы от flower_fox_nsk&nbsp;</div>
                        <i class="fab fa-instagram"></i>
                    </button>
                </a>`
        const parent = document.querySelector('.wrapper__cakes')
        parent.append(element);
    }*/

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function addRandomElements() {
        console.log('addRandomElements');
        wrapperHide.innerHTML = ``;
        let random0 = getRandomInt(32) + 1;
        let random1 = getRandomInt(6) + 1;
        let random2 = getRandomInt(13) + 1;
        new MenuCard(
            `"img/cakes/cakes/cake${random0}_320.jpg"`,
            "",
            `cake${random0}`,
            "",
            "",
            "",
            ".wrapper__hide"
        ).render(1);
        new MenuCard(
            `"img/cakes/cupcakes/cupcake${random1}_320.jpg"`,
            "",
            `cupcake${random1}`,
            "",
            "",
            "",
            ".wrapper__hide"
        ).render(1);
        new MenuCard(
            `"img/cakes/flowers/flowers${random2}_320.jpg"`,
            "",
            `flowers${random2}`,
            "",
            "",
            "",
            ".wrapper__hide"
        ).render(1);
    }



//торты
/*    let cakesName = {
        1: "сливочно-медовый",
        2: "медовый",
        3: "сливочный",
    }
    let cakesPrice = {
        1: "1000",
        2: "2000",
        3: "3000",
    }
    for (let i=1;i<=50;i++){
        new MenuCard(
            `img/cakes/cakes/cake${i}_320.jpg`,
            "img/cakes/cakes/cake1.jpg",
            "cake1",
            cakesName[i],
            cakesPrice[i],
            "от 1 кг.",
            ".wrapper__cakes"
        ).render();
    }
*/

    /*****************************************************
     * карточки со всеми тортами, пирожными и пр.
     * allcakes.js < ( cakes.js && choko.js && etc.)
     * {cakes.js < menu_card.js}
    *****************************************************/
    allCakes();

/*
    $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('#arrow_up').fadeIn();
                //$('.main_logo_mini').fadeIn();
                $('header').fadeIn();
            } else {
                $('#arrow_up').fadeOut();
                //$('.main_logo_mini').fadeOut();
                $('.header').fadeOut();
            }

            //parallax ?
            $('.background1').bgscroll({direction: 'bottom'});
            $('.background2').bgscroll({direction: 'top'});
        });
        $('#arrow_up').click(function () {
            var _navmenu = $(this).attr("nav");
            $("html, body").animate({scrollTop: $(_navmenu).offset().top + "px"});
            return false;
        });

        $(function () {
            $("a[href^='#']").click(function () {
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
                return false;
            });
        });
*/
    /*
     *   timer
     */
    /*const deadline = '2021-05-31';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / (1000) % 60)),
              seconds = Math.floor((t / 1000) % 60);

        return{
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };

    }

    function getZero(num) {
        console.log(num);
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }
        else return num;
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#day'),
              hours = timer.querySelector('#hour'),
              minutes = timer.querySelector('#min'),
              seconds = timer.querySelector('#sec'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            console.log(t);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.wrapper_timer', deadline);*/





    addRandomElements();
//    setInterval(addRandomElements, 5000)

    menulistButtons();
    MenulistContent(btnMenulist.length)

    //allAnimation();
    // popupBigImages();

});
