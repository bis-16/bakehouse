//import images from "./images";

'use strict'
document.addEventListener('DOMContentLoaded',()=> {

    const btnMenulist = document.querySelectorAll('.menulist_item'),
        menulistContent = document.querySelectorAll('.js_cakes');

    function hideMenulistContent() {
        menulistContent.forEach(item => {
            //item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
    }

    function showMenulistContent(i = 0) {
        //menulistContent[i].style.display = 'flex';
        menulistContent[i].classList.add('show', 'fade');
        menulistContent[i].classList.remove('hide');
    }

/*    function btnMenu(i) {
        btnMenulist[i].addEventListener('click', ev => {
            ev.preventDefault();
//            clearInterval(timerIdRandomImg);
            hideMenulistContent();
            showMenulistContent(i);
        });
    }*/

    hideMenulistContent();
    for (let i = 0; i < 4; i++) {
//        btnMenu(i);
        btnMenulist[i].addEventListener('click', ev => {
            ev.preventDefault();
            hideMenulistContent();
            showMenulistContent(i);
        });

    }



    const cakeImg = document.querySelectorAll('.cake_img'),
        wrapperHide = document.querySelector('.wrapper_hide');

//    const cloneCakeImg = { ...cakeImg };

    class MenuCard {
        constructor(src, srcBig = "img/cakes/cakes/cake9.jpg", alt, text, price, wt, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.text = text;
            this.price = price;
            this.wt = wt;
            this.parent = document.querySelector(parentSelector);
            this.srcBig = srcBig;
        }

        render(i = 0/*, className*/) {
            const element = document.createElement('div')
            //let pathToBigImg = "img/cakes/cakes/cake9.jpg"
            let pathToBigImg = this.srcBig;
            if (i === 0) {
            element.innerHTML = `
                <div class="img_item view view-first">
                    <a href=${pathToBigImg}>
                        <img src=${this.src} alt=${this.alt} class="cake_img">
                        <div class="mask">
    <!--                        <h2>Заголовок</h2>-->
    <!--                        <h3>Текст</h3>-->
                            <div class="price">${this.price}</div>
                            <div class="wt">${this.wt}</div>
                        </div>                    
                    </a>  
                    <div class="descr"><p>${this.text}</div>         
                </div>
            `;
            } else {
            element.innerHTML = `
                <div class="img_item view view-first">
                    <img src=${this.src} alt=${this.alt} class="cake_img">
                    <div class="descr"><p>${this.text}</div>
                    <div class="mask2">
<!--                        <h2>Заголовок</h2>-->
<!--                        <h3>Текст</h3>-->
                        <div class="price">${this.price}</div>
                        <div class="wt">${this.wt}</div>
                    </div>
                </div>
            `;
            }
            this.parent.append(element)
        }
    }

//random
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function addRandomElements() {
        wrapperHide.innerHTML = ``;
        let random1 = getRandomInt(5) + 1;
        new MenuCard(
            `"img/cakes/cakes/cake${random1}_320.jpg"`,
            "",
            "cake1",
            "",
            "",
            "",
            ".wrapper_hide"
        ).render(1);
        new MenuCard(
            `"img/cakes/cupcakes/cupcake${random1}_320.jpg"`,
            "",
            "cupcake1",
            "",
            "",
            "",
            ".wrapper_hide"
        ).render(1);
        new MenuCard(
            `"img/cakes/macarons/macarons${random1}_320.jpg"`,
            "",
            "macarone1",
            "",
            "",
            "",
            ".wrapper_hide"
        ).render(1);
    }

    addRandomElements();
    setInterval(addRandomElements, 5000)

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
            ".wrapper_cakes"
        ).render();
    }
*/
    new MenuCard(
        "img/cakes/cakes/cake1_320.jpg",
        "img/cakes/cakes/big/cake1.jpg",
        "cake1",
        "Сливочно-карамельный медовик",
        "1300.-",
        "от 1 кг.",
        ".wrapper_cakes"
    ).render();

    new MenuCard(
        "img/cakes/cakes/cake2_320.jpg",
        "img/cakes/cakes/big/cake2.jpg",
        "cake2",
        "Изысканный трюфельный торт на темном шоколаде с абрикосовой пропиткой",
        "1400.-",
        "от 1 кг.",
        ".wrapper_cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake3_320.jpg",
        "img/cakes/cakes/big/cake3.jpg",
        "cake3",
        "RAW-птичье молоко",
        "1500.-",
        "700 гр.",
        ".wrapper_cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake4_320.jpg",
        "img/cakes/cakes/big/cake4.jpg",
        "cake4",
        "Меренговый рулет",
        '1600.-<font size="0.8rem"> свежие ягоды</font><p>1300.-<font size="0.5rem"> альтернативное украшение</font>',
        "1.2 кг.<p>1 кг.",
        ".wrapper_cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake5_320.jpg",
        "img/cakes/cakes/big/cake5.jpg",
        "cake5",
        "Сметанный шоколадный торт ИЗ ДЕТСТВА с вишней",
        "1400.-",
        "от 1 кг.",
        ".wrapper_cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake6_320.jpg",
        "img/cakes/cakes/big/cake6.jpg",
        "cake6",
        "Шоколадный RAW с манго<p>(без муки, яиц, молочки, сахара)",
        "1750.-",
        "от 1,5 кг.",
        ".wrapper_cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake7_320.jpg",
        "img/cakes/cakes/big/cake7.jpg",
        "cake7",
        "Классический сметанный торт со сливочно-сметанным кремом",
        "1300.-",
        "от 1 кг.",
        ".wrapper_cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake8_320.jpg",
        "img/cakes/cakes/big/cake8.jpg",
        "cake8",
        "Шоколадно-вишневый торт со сливочным чизкейком внутри и печеньем Орео",
        "1400.-",
        "от 1,5 кг.",
        ".wrapper_cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake9_320.jpg",
        "img/cakes/cakes/big/cake9.jpg",
        "cake9",
        "Сникерс с жареным арахисом, карамелью и арахисовым чизкейком внутри",
        "1400.-",
        "от 1,5 кг.",
        ".wrapper_cakes"
    ).render();
    new MenuCard(
        "img/cakes/yummy/yummy4_320.jpg",
        "img/cakes/yummy/big/yummy4.jpg",
        "yummy4",
        "Торт-цифра",
        "1300.-",
        "от 1кг.",
        ".wrapper_cakes"
    ).render();

//капкейки
    new MenuCard(
        "img/cakes/cupcakes/cupcake1_320.jpg",
        "img/cakes/cupcakes/big/cupcake1.jpg",
        "cupcake1",
        "Ванильные капкейки с нежным фисташковым кремом и кисленьким малиновым курдом",
        "600.-<p>900.-<p>1800.-",
        "4 шт.<p>6 шт.<p>12 шт.",
        ".wrapper_cupcakes"
    ).render();
    new MenuCard(
        "img/cakes/cupcakes/cupcake2_320.jpg",
        "img/cakes/cupcakes/big/cupcake2.jpg",
        "cupcake2",
        "RAW капкейки (без муки, яиц, молочки, сахара) клубничные на кокосовых сливках",
        "800.-<p>1200.-<p>2400.-",
        "4 шт.<p>6 шт.<p>12 шт.",
        ".wrapper_cupcakes"
    ).render();
    new MenuCard(
        "img/cakes/cupcakes/cupcake3_320.jpg",
        "img/cakes/cupcakes/big/cupcake3.jpg",
        "cupcake3",
        "Шоколадные, с вишней и шапочкой из крема на основе печенья Орео",
        "600.-<p>900.-<p>1800.-",
        "4 шт.<p>6 шт.<p>12 шт.",
        ".wrapper_cupcakes"
    ).render();
    new MenuCard(
        "img/cakes/cupcakes/cupcake4_320.jpg",
        "img/cakes/cupcakes/big/cupcake4.jpg",
        "cupcake4",
        "Ванильные капкейки с домашней карамелью / манго / шоколадным ганашем",
        "600.-<p>900.-<p>1800.-",
        "4 шт.<p>6 шт.<p>12 шт.",
        ".wrapper_cupcakes"
    ).render();
    new MenuCard(
        "img/cakes/cupcakes/cupcake5_320.jpg",
        "img/cakes/cupcakes/big/cupcake5.jpg",
        "cupcake5",
        "Красный бархат с клюквой / вишней / манго",
        "600.-<p>900.-<p>1800.-",
        "4 шт.<p>6 шт.<p>12 шт.",
        ".wrapper_cupcakes"
    ).render();
    new MenuCard(
        "img/cakes/cupcakes/cupcake6_320.jpg",
        "img/cakes/cakes/big/cake5.jpg",
        "cupcake6",
        "Капкейки с имбирем и домашней апельсиновой карамелью",
        "600.-<p>900.-<p>1800.-",
        "4 шт.<p>6 шт.<p>12 шт.",
        ".wrapper_cupcakes"
    ).render();

//макароны
    new MenuCard(
        "img/cakes/macarons/macarons1_320.jpg",
        "img/cakes/macarons/big/macarons1.jpg",
        "macarone1",
        "Кокос - клубника / вишня",
        "85.- Франция<p>80.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper_macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons2_320.jpg",
        "img/cakes/macarons/big/macarons2.jpg",
        "macarone2",
        "Клубничные",
        "85.- Франция<p>80.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper_macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons3_320.jpg",
        "img/cakes/macarons/big/macarons3.jpg",
        "macarone3",
        "Двойное манго",
        "85.- Франция<p>80.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper_macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons4_320.jpg",
        "img/cakes/macarons/big/macarons4.jpg",
        "macarone4",
        "Солёная карамель - арахис",
        "85.- Франция<p>80.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper_macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons5_320.jpg",
        "img/cakes/macarons/big/macarons5.jpg",
        "macarone5",
        "Фисташка - вишня",
        "90.- Франция<p>85.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper_macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons6_320.jpg",
        "img/cakes/macarons/big/macarons6.jpg",
        "macarone6",
        "Черника - лаванда",
        "90.- Франция<p>85.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper_macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons0_320.jpg", //7
        "",
        "macarone7",
        "Абрикос - розмарин",
        "85.- Франция<p>80.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper_macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons0_320.jpg", //8
        "",
        "macarone7",
        "Шоколад - смородина",
        "90.- Франция<p>85.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper_macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons0_320.jpg", //9
        "",
        "macarone7",
        "Черника - лимон",
        "90.- Франция<p>85.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper_macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons0_320.jpg", //10
        "",
        "macarone7",
        "Груша - дор-блю",
        "90.- Франция<p>85.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper_macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons11_320.jpg", //11
        "img/cakes/macarons/big/macarons11.jpg",
        "macarone11",
        "Малина - мята",
        "90.- Франция<p>85.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper_macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons12_320.jpg", //12
        "img/cakes/macarons/big/macarons12.jpg",
        "macarone12",
        "Брусника",
        "85.- Франция<p>80.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper_macarons"
    ).render();

//вкусняхи
    new MenuCard(
        "img/cakes/yummy/yummy1_320.jpg",
        "",
        "yummy1",
        "Тирамису десерт с натуральным крепким горьковатым свежесваренным кофе, амаретто и алкализованным какао",
        "1500.-",
        "от 1 кг.",
        ".wrapper_yummy"
    ).render();
    new MenuCard(
        "img/cakes/yummy/yummy2_320.jpg",
        "",
        "yummy2",
        "Чизкейк сникерс",
        "1400.-",
        "от 1 кг.",
        ".wrapper_yummy"
    ).render();
    new MenuCard(
        "img/cakes/yummy/yummy3_320.jpg",
        "",
        "yummy3",
        "Трюфели апельсиновые /с сыром дор блю / с вишней",
        "550.-",
        "9 шт.",
        ".wrapper_yummy"
    ).render();
    new MenuCard(
        "img/cakes/yummy/yummy5_320.jpg",
        "",
        "yummy5",
        "Набор авторских конфет «Птичье молоко» и Манго-кешью",
        "420.-",
        "9 шт.",
        ".wrapper_yummy"
    ).render();
    new MenuCard(
        "img/cakes/yummy/yummy6_320.jpg",
        "",
        "yummy6",
        "Авторские цветочные наборы со сладостями",
        "от 1700.-",
        "",
        ".wrapper_yummy"
    ).render();
    new MenuCard(
        "img/cakes/yummy/yummy7_320.jpg",
        "img/cakes/yummy/big/yummy7.jpg",
        "yummy7",
        "Профитроли",
        "80.-",
        "1 шт.<p>(от 4 шт.)",
        ".wrapper_yummy"
    ).render();
    new MenuCard(
        "img/cakes/yummy/yummy8_320.jpg",
        "img/cakes/yummy/big/yummy8.jpg",
        "yummy8",
        "Эклеры",
        "80.-",
        "1 шт.<p>(от 4 шт.)",
        ".wrapper_yummy"
    ).render();


    function random3(arr) {
        for (let i = 0; i < 3; i++) {
            arr[0] = cakeImg[getRandomInt(10)].src;
            arr[1] = cakeImg[getRandomInt(10)].src;
            arr[2] = cakeImg[getRandomInt(10)].src;
            if (arr[0] === arr[1] || arr[1] === arr[2] || arr[2] === arr[0]) {
                i--;
            }
        }
    }
/*
    function Interval() {
        // wrapperHide.innerHTML = ``
        // showMenulistContent(4);
        //  let arrRandom = [];
        // random3 (arrRandom);
        //   for (let i = 0; i<3 ; i++) {
        //       wrapperHide.innerHTML += `<img src="${arrRandom[i]}" alt="Random_image_${i}" class="cake_img cake_img_js fade_slow">`
        //   }
    }
*/
//    Interval();
    showMenulistContent(4);


    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.arrow_up').fadeIn();
                //$('.main_logo_mini').fadeIn();
                $('header').fadeIn();
            } else {
                $('.arrow_up').fadeOut();
                //$('.main_logo_mini').fadeOut();
                $('.header').fadeOut();
            }

            /*            if ($(this).scrollTop() > 500) {
                            $('.main_logo_mini').fadeIn();
                        } else {
                            $('.main_logo_mini').fadeOut();
                        }*/

            //parallax ?
            $('.background1').bgscroll({direction: 'bottom'});
            $('.background2').bgscroll({direction: 'top'});
        });
        $('.arrow_up').click(function () {
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

    });

    $(document).ready(function () {
        let adaptiveSlidesToShow = 1, adaptiveSlidesToScrool = 1;

        function sliderReShow() {
            if (window.innerWidth <= 1000) {
                adaptiveSlidesToShow = 1;
                adaptiveSlidesToScrool = 1;
            } else {
                adaptiveSlidesToShow = 3;
                adaptiveSlidesToScrool = 3;
            }
            $('.slider-track').slick({
                infinite: true,
                slidesToShow: adaptiveSlidesToShow,
                slidesToScroll: adaptiveSlidesToScrool,
                dots: true,
            });
        };

        sliderReShow();
        $(window).resize(() => {
            $('.slider-track').slick('unslick');
            sliderReShow();
        });

    });


//parallax bg in promo section
    var scene = document.getElementById('parallax_logo');
    var parallax0 = new Parallax(scene);

    const animateCSS = (element, animation, duration = 20, delay = 10, offset = 0) => {
            //duraion = duration:)
            //delay = delay before the animation starts
            //offset = distance to start animation (related to the browser bottom)

        // We create a Promise and return it
        let prefix = 'animate__';
        new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const node = document.querySelector(element);

            node.classList.add(`${prefix}animated`, animationName, 'wow');
            node.setAttribute(`data-wow-duration`,duration);
            node.setAttribute(`data-wow-delay`,delay);

            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd(event) {
                event.stopPropagation();
                node.classList.remove(`${prefix}animated`, animationName, 'wow');
                resolve('Animation ended');
            }

            node.addEventListener('animationend', handleAnimationEnd, {once: true});
        });
    }

    function fAnimation()
    {
        const animationType_TypeInY = 'flipInY';
        const animationType_Bounce = 'bounce'

        //панель с кнопками
        const animationType2 = 'fadeIn';
        animateCSS('.nav_menu', animationType2);
        animateCSS('.nav_title', animationType2);


        //десерты
        const animationType3 = 'fadeIn';
        animateCSS('.menulist_title', 'fadeInUp');
        animateCSS('.menulist_item0', animationType3);
        animateCSS('.menulist_item1', animationType3);
        animateCSS('.menulist_item2', animationType3);
        animateCSS('.menulist_item3', animationType3);
        animateCSS('.button_more_menulist', 'fadeInUp');

        //автор
        const animationType5 = 'fadeInUp';

        animateCSS('.wrapper_about0', animationType5);
        animateCSS('.wrapper_about', animationType5);
        animateCSS('.author_img', animationType_TypeInY);
        animateCSS('.item0', animationType_TypeInY);
        // animateCSS('.item0__round__img', animationType_Bounce);
        animateCSS('.item1', animationType_TypeInY);
        //animateCSS('.item1__round__img', animationType_Bounce);
        animateCSS('.item2', animationType_TypeInY);
        // animateCSS('.item2__round__img', animationType_Bounce);

        animateCSS('.bg2_text', animationType5);

        //доставка
        const animationType6 = 'fadeInUp';
        animateCSS('.deliver_title', animationType6);

        animateCSS('.deliver_round0', animationType_TypeInY);
        animateCSS('.car0', 'bounce');
        animateCSS('.deliver_text0', animationType6);

        animateCSS('.deliver_round1', animationType_TypeInY);
        animateCSS('.car1', 'bounce');
        animateCSS('.deliver_text1', animationType6);

        //Отзывы
        const animationType7 = 'fadeInUp';
        animateCSS('.feedback_title', animationType7);
        animateCSS('.slider-container', 'fadeInRight');

        //Контакты
        const animationType8 = 'fadeInUp';
        animateCSS('.contacts_title', animationType8);

        //рассыпанные элементы
        const animationType9 = 'fadeInRight';
        animateCSS('.almonds', animationType8);
        animateCSS('.huzlenut', animationType8);
        animateCSS('.green', animationType8);
    }
    fAnimation();

    //кнопка заказа в футере
    setInterval(() => {
        animateCSS('.promo_btn_footer', 'pulse');
    },100);


/*
    menulistContent[4].classList.add('show', 'fade');
    menulistContent[0].classList.remove('hide');
    menulistContent[1].classList.remove('hide');
    menulistContent[2].classList.remove('hide');
    menulistContent[3].classList.remove('hide');*/

    /*
//timer

    const deadline = '2021-05-31';

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

        setClock('.wrapper_timer', deadline);
    */


    const images = () => {

        const  imgPopup = document.createElement('div'),
            workSection = document.querySelector('.menulist'),
               bigImage = document.createElement('img');

        console.log("imgPopup=",imgPopup);
        console.log("workSection=",workSection);
        console.log("bigImage=",bigImage);

        imgPopup.classList.add('popup')
        workSection.appendChild(imgPopup)

        imgPopup.style.display = 'none';
        imgPopup.style.justifyContent = 'center';
        imgPopup.style.alignItems = 'center';
        imgPopup.style.zIndex = '50'
        //imgPopup.classList.add("popup_img");
        //imgPopup.style.width = '80%';

        imgPopup.appendChild(bigImage)

        workSection.addEventListener('click',(event) => {
            //
            let target = event.target

            if (target.classList.contains('button_more_menulist')
                || target.classList.contains('fa-instagram')
                || target.classList.contains('text'))
            {console.log("1");}
            else {
                event.preventDefault()
                let windowWide = window.innerWidth
                console.log("target=", target);
                console.log("windowWide=", typeof (windowWide), windowWide);
                if ((windowWide > 1000) && (target && (target.classList.contains('cake_img')) || (target.classList.contains('mask')))) {
                    imgPopup.style.display = 'flex';
                    const path = target.parentNode.getAttribute('href');
                    bigImage.setAttribute('src', path)
                } else {
                    console.log("else");
                }
                console.log("4");
                if (target && target.matches('div.popup') || target.matches('img')) {
                    //if (target.matches('div.popup') && target.matches('popup')){
                    imgPopup.style.display = 'none';
                }
            }
        })
    }

    //export default images;
    images();

});
