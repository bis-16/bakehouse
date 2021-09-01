//import images from "./images";

'use strict'
document.addEventListener('DOMContentLoaded',()=> {

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

                        <img src=${this.src} alt=${this.alt} class="cake-img flash">
                        <div class="mask">
                            <div class="flash data-flash">
                                <svg width="320px" height="320px"  class="border">
                                    <polyline points="319,1 319,319 1,319 1,1 319,1"  />
                                </svg>
        <!--                        <h2>Заголовок</h2>-->
        <!--                        <h3>Текст</h3>-->
                                <div class="price">${this.price}</div>
                                <div class="wt">${this.wt}</div>
                            </div>
                        </div>
                    </a>  
                    <div class="descr"><p>${this.text}</div>         
                </div>
            `;
            } else {
            element.innerHTML = `
                <div class="img_item view view-first flash">
                    <img src=${this.src} alt=${this.alt} class="cake-img">
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
        wrapperHide.innerHTML = ``;
        let random0 = getRandomInt(32) + 1;
        let random1 = getRandomInt(6) + 1;
        let random2 = getRandomInt(13) + 1;
        let random3 = getRandomInt(4) + 2;
        let random4 = getRandomInt(8) + 1;
        let random5 = getRandomInt(13) + 1;
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
            `"img/cakes/macarons/macarons${random2}_320.jpg"`,
            "",
            `macarone${random2}`,
            "",
            "",
            "",
            ".wrapper__hide"
        ).render(1);
        new MenuCard(
            `"img/cakes/choko/${random3}_320.jpg"`,
            "",
            `chocolate${random3}`,
            "",
            "",
            "",
            ".wrapper__hide"
        ).render(1);
        new MenuCard(
            `"img/cakes/yummy/yummy${random4}_320.jpg"`,
            "",
            `yummy${random4}`,
            "",
            "",
            "",
            ".wrapper__hide"
        ).render(1);
        new MenuCard(
            `"img/cakes/flowers/flowers${random5}_320.jpg"`,
            "",
            `flowers${random5}`,
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

    new MenuCard(
        "img/cakes/cakes/cake1_320.jpg",
        "img/cakes/cakes/big/cake1.jpg",
        "cake1",
        "Сливочно-карамельный медовик",
        "1300.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake2_320.jpg",
        "img/cakes/cakes/big/cake2.jpg",
        "cake2",
        "Изысканный трюфельный торт на темном шоколаде с абрикосовой пропиткой",
        "1400.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake3_320.jpg",
        "img/cakes/cakes/big/cake3.jpg",
        "cake3",
        "RAW-птичье молоко",
        "1500.-",
        "700 гр.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake4_320.jpg",
        "img/cakes/cakes/big/cake4.jpg",
        "cake4",
        "Меренговый рулет",
        '1600.-<font size="0.8rem"> свежие ягоды</font><p>1300.-<font size="0.5rem"> альтернативное украшение</font>',
        "1.2 кг.<p>1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake5_320.jpg",
        "img/cakes/cakes/big/cake5.jpg",
        "cake5",
        "Сметанный шоколадный торт ИЗ ДЕТСТВА с вишней",
        "1400.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake6_320.jpg",
        "img/cakes/cakes/big/cake6.jpg",
        "cake6",
        "Шоколадный RAW с манго<p>(без муки, яиц, молочки, сахара)",
        "1750.-",
        "от 1,5 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake7_320.jpg",
        "img/cakes/cakes/big/cake7.jpg",
        "cake7",
        "Классический сметанный торт со сливочно-сметанным кремом",
        "1300.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake26_320.jpg",
        "img/cakes/cakes/big/cake26.jpg",
        "cake26",
        "Сливочно-карамельный медовик",
        "1300.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake8_320.jpg",
        "img/cakes/cakes/big/cake8.jpg",
        "cake8",
        "Шоколадно-вишневый торт со сливочным чизкейком внутри и печеньем Орео",
        "1400.-",
        "от 1,5 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake9_320.jpg",
        "img/cakes/cakes/big/cake9.jpg",
        "cake9",
        "Сникерс с жареным арахисом, карамелью и арахисовым чизкейком внутри",
        "1400.-",
        "от 1,5 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/yummy4_320.jpg",
        "img/cakes/cakes/big/yummy4.jpg",
        "yummy4",
        "Торт-цифра",
        "1300.-",
        "от 1кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake10_320.jpg",
        "img/cakes/cakes/big/cake10.jpg",
        "cake10",
        "Классический сметанный торт со сливочно-сметанным кремом и вишней",
        "1300.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake11_320.jpg",
        "img/cakes/cakes/big/cake11.jpg",
        "cake11",
        "Изысканный трюфельный торт на темном шоколаде с абрикосовой пропиткой",
        "1400.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake12_320.jpg",
        "img/cakes/cakes/big/cake12.jpg",
        "cake12",
        "Освежающий черничный сливочный торт с нотками лимона",
        "1400.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake13_320.jpg",
        "img/cakes/cakes/big/cake13.jpg",
        "cake13",
        "Чернично-лимонный меренговый рулет",
        "1300.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake14_320.jpg",
        "img/cakes/cakes/big/cake14.jpg",
        "cake14",
        "Морковно-ореховый с маком, фундуком и карамелью",
        "1400.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake15_320.jpg",
        "img/cakes/cakes/big/cake15-1.jpg",
        "cake15",
        "Сливочно -карамельный медовик",
        "1300.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake16_320.jpg",
        "img/cakes/cakes/big/cake16.jpg",
        "cake16",
        "Морковный, с ореховым пралине, маком, корицей и вареной домашней карамелью",
        "1400.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake31_320.jpg",
        "img/cakes/cakes/big/cake31.jpg",
        "cake31",
        "Медовик на сметанном креме с карамелью",
        "1300.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake17_320.jpg",
        "img/cakes/cakes/big/cake17.jpg",
        "cake17",
        "Шоколадно-вишневый торт со сливочным чизкейком внутри и печеньем Орео",
        "1400.-",
        "от 1.5 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake18_320.jpg",
        "img/cakes/cakes/big/cake18.jpg",
        "cake18",
        "Шведский миндальный торт",
        "650.-",
        "от 0.5 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake19_320.jpg",
        "img/cakes/cakes/big/cake19.jpg",
        "cake19",
        "Нежнейший красный бархат с клюквой/вишней",
        "1300.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake20_320.jpg",
        "img/cakes/cakes/big/cake20.jpg",
        "cake20",
        "Карамельный сливочный медовик",
        "1300.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake21_320.jpg",
        "img/cakes/cakes/big/cake21.jpg",
        "cake21",
        "Грушевый со сливочно-творожным кремом, карамелью и грецким орехом",
        "1400.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake22_320.jpg",
        "img/cakes/cakes/big/cake22.jpg",
        "cake22",
        "Освежающий черносмородиновый с нотками лимона",
        "1300.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake23_320.jpg",
        "img/cakes/cakes/big/cake23.jpg",
        "cake23",
        "Нежный фисташковый с вишневым компоте",
        "1400.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake24_320.jpg",
        "img/cakes/cakes/big/cake24.jpg",
        "cake24",
        "Меренговый рулет из кисленьких ягод",
        '1300.-',
        "1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake25_320.jpg",
        "img/cakes/cakes/big/cake25.jpg",
        "cake25",
        "Грушевый со сливочно-творожным кремом, карамелью и фундуком",
        "1400.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake27_320.jpg",
        "img/cakes/cakes/big/cake27.jpg",
        "cake27",
        "Сникерс",
        "1400.-",
        "от 1,5 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake28_320.jpg",
        "img/cakes/cakes/big/cake28-1.jpg",
        "cake28",
        "Нежный черничный чизкейк с шапочкой из меренги",
        "1400.-",
        "от x кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake29_320.jpg",
        "img/cakes/cakes/big/cake29.jpg",
        "cake29",
        "Изысканный шоколадный торт со сливочным чизкейком внутри и печеньем Орео",
        "1400.-",
        "от 1,5 кг.",
        ".wrapper__cakes"
    ).render();
    new MenuCard(
        "img/cakes/cakes/cake30_320.jpg",
        "img/cakes/cakes/big/cake30.jpg",
        "cake30",
        "Нежный йогуртовый тортик с ягодной/фруктовой начинкой (манго/клубника/брусника)",
        "1300.-",
        "от 1 кг.",
        ".wrapper__cakes"
    ).render();

//капкейки
    new MenuCard(
        "img/cakes/cupcakes/cupcake1_320.jpg",
        "img/cakes/cupcakes/big/cupcake1.jpg",
        "cupcake1",
        "Ванильные капкейки с нежным фисташковым кремом и кисленьким малиновым курдом",
        "600.-<p>900.-<p>1800.-",
        "4 шт.<p>6 шт.<p>12 шт.",
        ".wrapper__cupcakes"
    ).render();
    new MenuCard(
        "img/cakes/cupcakes/cupcake2_320.jpg",
        "img/cakes/cupcakes/big/cupcake2.jpg",
        "cupcake2",
        "RAW капкейки (без муки, яиц, молочки, сахара) клубничные на кокосовых сливках",
        "800.-<p>1200.-<p>2400.-",
        "4 шт.<p>6 шт.<p>12 шт.",
        ".wrapper__cupcakes"
    ).render();
    new MenuCard(
        "img/cakes/cupcakes/cupcake3_320.jpg",
        "img/cakes/cupcakes/big/cupcake3.jpg",
        "cupcake3",
        "Шоколадные, с вишней и шапочкой из крема на основе печенья Орео",
        "600.-<p>900.-<p>1800.-",
        "4 шт.<p>6 шт.<p>12 шт.",
        ".wrapper__cupcakes"
    ).render();
    new MenuCard(
        "img/cakes/cupcakes/cupcake4_320.jpg",
        "img/cakes/cupcakes/big/cupcake4.jpg",
        "cupcake4",
        "Ванильные капкейки с домашней карамелью / манго / шоколадным ганашем",
        "600.-<p>900.-<p>1800.-",
        "4 шт.<p>6 шт.<p>12 шт.",
        ".wrapper__cupcakes"
    ).render();
    new MenuCard(
        "img/cakes/cupcakes/cupcake5_320.jpg",
        "img/cakes/cupcakes/big/cupcake5.jpg",
        "cupcake5",
        "Красный бархат с клюквой / вишней / манго",
        "600.-<p>900.-<p>1800.-",
        "4 шт.<p>6 шт.<p>12 шт.",
        ".wrapper__cupcakes"
    ).render();
    new MenuCard(
        "img/cakes/cupcakes/cupcake6_320.jpg",
        "img/cakes/cakes/big/cake5.jpg",
        "cupcake6",
        "Капкейки с имбирем и домашней апельсиновой карамелью",
        "600.-<p>900.-<p>1800.-",
        "4 шт.<p>6 шт.<p>12 шт.",
        ".wrapper__cupcakes"
    ).render();

//макароны
    new MenuCard(
        "img/cakes/macarons/macarons1_320.jpg",
        "img/cakes/macarons/big/macarons1.jpg",
        "macarone1",
        "Кокос - клубника / вишня",
        "85.- Франция<p>80.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper__macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons2_320.jpg",
        "img/cakes/macarons/big/macarons2.jpg",
        "macarone2",
        "Клубничные",
        "85.- Франция<p>80.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper__macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons3_320.jpg",
        "img/cakes/macarons/big/macarons3.jpg",
        "macarone3",
        "Двойное манго",
        "85.- Франция<p>80.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper__macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons4_320.jpg",
        "img/cakes/macarons/big/macarons4.jpg",
        "macarone4",
        "Солёная карамель - арахис",
        "85.- Франция<p>80.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper__macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons5_320.jpg",
        "img/cakes/macarons/big/macarons5.jpg",
        "macarone5",
        "Фисташка - вишня",
        "90.- Франция<p>85.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper__macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons6_320.jpg",
        "img/cakes/macarons/big/macarons6.jpg",
        "macarone6",
        "Черника - лаванда",
        "90.- Франция<p>85.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper__macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons0_320.jpg", //7
        "",
        "macarone7",
        "Абрикос - розмарин",
        "85.- Франция<p>80.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper__macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons0_320.jpg", //8
        "",
        "macarone7",
        "Шоколад - смородина",
        "90.- Франция<p>85.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper__macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons0_320.jpg", //9
        "",
        "macarone7",
        "Черника - лимон",
        "90.- Франция<p>85.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper__macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons0_320.jpg", //10
        "",
        "macarone7",
        "Груша - дор-блю",
        "90.- Франция<p>85.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper__macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons11_320.jpg", //11
        "img/cakes/macarons/big/macarons11.jpg",
        "macarone11",
        "Малина - мята",
        "90.- Франция<p>85.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper__macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons12_320.jpg", //12
        "img/cakes/macarons/big/macarons12.jpg",
        "macarone12",
        "Брусника",
        "85.- Франция<p>80.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper__macarons"
    ).render();
    new MenuCard(
        "img/cakes/macarons/macarons13_320.jpg", //12
        "img/cakes/macarons/big/macarons13.jpg",
        "macarone13",
        "Кокос",
        "85.- Франция<p>80.- Италия",
        "1 шт.<p>(от 6 шт.)",
        ".wrapper__macarons"
    ).render();
//вкусняхи
    new MenuCard(
        "img/cakes/yummy/yummy1_320.jpg",
        "img/cakes/yummy/big/yummy1.jpg",
        "yummy1",
        "Тирамису десерт с натуральным крепким горьковатым свежесваренным кофе, амаретто и алкализованным какао",
        "1500.-",
        "от 1 кг.",
        ".wrapper__yummy"
    ).render();
    new MenuCard(
        "img/cakes/yummy/yummy2_320.jpg",
        "img/cakes/yummy/big/yummy2.jpg",
        "yummy2",
        "Чизкейк сникерс",
        "1400.-",
        "от 1 кг.",
        ".wrapper__yummy"
    ).render();
    new MenuCard(
        "img/cakes/yummy/yummy3_320.jpg",
        "img/cakes/yummy/big/yummy3.jpg",
        "yummy3",
        "Трюфели апельсиновые /с сыром дор блю / с вишней",
        "550.-",
        "9 шт.",
        ".wrapper__yummy"
    ).render();
    new MenuCard(
        "img/cakes/yummy/yummy5_320.jpg",
        "img/cakes/yummy/big/yummy5.jpeg",
        "yummy5",
        "Набор авторских конфет «Птичье молоко» и Манго-кешью",
        "420.-",
        "9 шт.",
        ".wrapper__yummy"
    ).render();
    new MenuCard(
        "img/cakes/yummy/yummy7_320.jpg",
        "img/cakes/yummy/big/yummy7.jpg",
        "yummy7",
        "Профитроли",
        "80.-",
        "1 шт.<p>(от 4 шт.)",
        ".wrapper__yummy"
    ).render();
    new MenuCard(
        "img/cakes/yummy/yummy8_320.jpg",
        "img/cakes/yummy/big/yummy8.jpg",
        "yummy8",
        "Эклеры",
        "80.-",
        "1 шт.<p>(от 4 шт.)",
        ".wrapper__yummy"
    ).render();
    new MenuCard(
        "img/cakes/yummy/yummy9_320.jpg",
        "img/cakes/yummy/big/yummy9.jpg",
        "yummy9",
        "Безе",
        "80.-",
        "1 шт.<p>(от 5 шт.)",
        ".wrapper__yummy"
    ).render();
    new MenuCard(
        "img/cakes/yummy/yummy10_320.jpg",
        "img/cakes/yummy/big/yummy10.jpg",
        "yummy10",
        "Павлова",
        "120.-",
        "1 шт.<p>(от 2 шт.)",
        ".wrapper__yummy"
    ).render();
//шоколад
    new MenuCard(
        "img/cakes/choko/6_320.jpg",
        "img/cakes/choko/big/6.jpg",
        "chocolate6",
        "Крафтовый молочный бельгийский шоколад с кокосом",
        "400.-",
        "1 шт.<p>(~180-200гр)",
        ".wrapper__chocolate"
    ).render();
    new MenuCard(
        "img/cakes/choko/3_320.jpg",
        "img/cakes/choko/big/3.jpg",
        "chocolate3",
        "Крафтовый молочный бельгийский шоколад с малиной и миндальными лепестками",
        "400.-",
        "1 шт.<p>(~180-200гр)",
        ".wrapper__chocolate"
    ).render();
    new MenuCard(
        "img/cakes/choko/5_320.jpg",
        "img/cakes/choko/big/5.jpg",
        "chocolate5",
        "Крафтовый молочный шоколад с фундуком, карамелью и Бобом тонка",
        "400.-",
        "1 шт.<p>(~180-200гр)",
        ".wrapper__chocolate"
    ).render();
    new MenuCard(
        "img/cakes/choko/2_320.jpg",
        "img/cakes/choko/big/2.jpg",
        "chocolate5",
        "Клубника в шоколаде Кот-д'Ивуар",
        "500.-<br>750.-<br>1000.-",
        "6 шт.<br> 9 шт.<br>12шт.",
        ".wrapper__chocolate"
    ).render();
    new MenuCard(
        "img/cakes/choko/4_320.jpg",
        "img/cakes/choko/big/4.jpg",
        "chocolate5",
        "ТОП набор - клубника в шоколаде + шоколад на выбор",
        "1000.-",
        "1 шт.",
        ".wrapper__chocolate"
    ).render();
//цветы
    new MenuCard(
        "img/cakes/flowers/flowers1_320.jpg",
        "img/cakes/flowers/big/flowers1.jpg",
        "flowers1",
        "Средний цветочный бокс с макаронс",
        "от 2200.-",
        "",
        ".wrapper__flowers"
    ).render();
    new MenuCard(
        "img/lena/foxy_320.jpg",
        "img/lena/foxy_320.jpg",        //"https://www.instagram.com/flower_fox_nsk/",
        "flower_foxy_nsk logo",
        'Оформление цветами от @flower_foxy_nsk',
        "",
        "",
        ".wrapper__flowers"
    ).render();
    new MenuCard(
        "img/cakes/flowers/flowers2_320.jpg",
        "img/cakes/flowers/big/flowers2.jpg",
        "flowers2",
        'Набор "Романтика" с клубникой в шоколаде',
        "от 1500.-",
        "",
        ".wrapper__flowers"
    ).render();
    new MenuCard(
        "img/cakes/flowers/flowers11_320.jpg",
        "img/cakes/flowers/big/flowers11.jpg",
        "flowers3",
        "Крафтовый шоколад с цветочной корзинкой",
        "от 1250.-",
        "",
        ".wrapper__flowers"
    ).render();
    new MenuCard(
        "img/cakes/flowers/flowers12_320.jpg",
        "img/cakes/flowers/big/flowers12.jpg",
        "flowers3",
        "Набор для именника / к выписке",
        "от 2700.-",
        "",
        ".wrapper__flowers"
    ).render();
    new MenuCard(
        "img/cakes/flowers/flowers13_320.jpg",
        "img/cakes/flowers/big/flowers13.jpg",
        "flowers13",
        "Средний цветочный бокс ",
        "от 2200.-",
        "",
        ".wrapper__flowers"
    ).render();
    new MenuCard(
        "img/cakes/flowers/flowers14_320.jpg",
        "img/cakes/flowers/big/flowers14.jpg",
        "flowers14",
        "Большой цветочный бокс",
        "от 2790.-",
        "2-4 капкейка<br>или 12 макаронс",
        ".wrapper__flowers"
    ).render();
    new MenuCard(
        "img/cakes/flowers/flowers15_320.jpg",
        "img/cakes/flowers/big/flowers15.jpg",
        "flowers15",
        "Мини-бокс с цветами и макрон",
        "от 1700.-",
        "6 макарон",
        ".wrapper__flowers"
    ).render();
    new MenuCard(
        "img/cakes/flowers/flowers16_320.jpg",
        "img/cakes/flowers/big/flowers16.jpg",
        "flowers16",
        "Средний цветочный бокс",
        "от 2200.-",
        "",
        ".wrapper__flowers"
    ).render();
    // new MenuCard(
    //     "img/cakes/flowers/flowers17_320.jpg",
    //     "img/cakes/flowers/big/flowers17.jpg",
    //     "flowers17",
    //     "название",
    //     "от ХХХ.-",
    //     "",
    //     ".wrapper__flowers"
    // ).render();


//    Interval();
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



    /*
     *  slick - slider
     */
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

        $(window).resize( () => {
//        $(window).resize( () => {
            $('.slider-track').slick('unslick');
//            document.querySelector('.slider-track').slick('unslick');
            sliderReShow();
        });

    });


    /*
     *  parallax bg in promo section
     */
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

            //console.log("node=", node);
            node.classList.add(`${prefix}animated`, animationName);
            //node.setAttribute(`data-wow-duration`,duration);
            //node.setAttribute(`data-wow-delay`,delay);

            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd(event) {
                event.stopPropagation();
                node.classList.remove(`${prefix}animated`, animationName, 'wow');
                resolve('Animation ended');
            }

            node.addEventListener('animationend', handleAnimationEnd, {once: true});
        });
    }

    function allAnimation()
    {
        const animationType_TypeInY = 'flipInY',
               animationType_Bounce = 'bounce',
                     animationType2 = 'fadeIn',
                 animationType_InUp = 'fadeInUp';//,
                    // animationType9 = 'fadeInRight';

        //панель с кнопками
        animateCSS('.nav__menu', animationType2);
        animateCSS('.nav__title', animationType2);
        //десерты
        animateCSS('.menulist__title', animationType_InUp);
        animateCSS('.menulist__item0', animationType2);
        animateCSS('.menulist__item1', animationType2);
        animateCSS('.menulist__item2', animationType2);
        animateCSS('.menulist__item3', animationType2);
        animateCSS('.menulist__item4', animationType2);
        animateCSS('.menulist__item5', animationType2);

        animateCSS('.button_more_menulist', animationType_InUp);
        //автор
        animateCSS('.about__title', animationType_InUp);
        animateCSS('.about__title-mini', animationType_InUp);
        //animateCSS('.wrapper__about0', animationType_InUp);
        //animateCSS('.wrapper__about', animationType_InUp);
        //animateCSS('.wrapper__about2', animationType_InUp);
        animateCSS('.about__text', animationType_InUp);
        animateCSS('.about__author-img', animationType_TypeInY);
        animateCSS('.about2__round0', animationType_TypeInY);
        animateCSS('.about2__round1', animationType_TypeInY);
        animateCSS('.about2__round2', animationType_TypeInY);
        //animateCSS('.about__item0', animationType_InUp);
        //animateCSS('.about__item1', animationType_InUp);
        //animateCSS('.about__item2', animationType_InUp);
        animateCSS('.about2__text0', animationType_InUp);
        animateCSS('.about2__text1', animationType_InUp);
        animateCSS('.about2__text2', animationType_InUp);
        //animateCSS('.item0__round__img', animationType_Bounce);
        //animateCSS('.item1__round__img', animationType_Bounce);
        //animateCSS('.item2__round__img', animationType_Bounce);
        animateCSS('#bg2_text', animationType_InUp);
        //доставка
        animateCSS('.deliver__title', animationType_InUp);
        animateCSS('.deliver__round0', animationType_TypeInY);
        animateCSS('.car0', 'bounce');
        animateCSS('.deliver__text0', animationType_InUp);
        animateCSS('.deliver__round1', animationType_TypeInY);
        animateCSS('.car1', 'bounce');
        animateCSS('.deliver__text1', animationType_InUp);
        //Отзывы
        animateCSS('.feedback__title', animationType_InUp);
        animateCSS('.slider-container', 'fadeInRight');
        //Контакты
        animateCSS('.contacts__title', animationType_InUp);
        //рассыпанные элементы
        animateCSS('#almonds', animationType_InUp);
        animateCSS('#huzlenut', animationType_InUp);
        animateCSS('#green', animationType_InUp);
        //кнопка заказа в футере
        setInterval(() => {
            animateCSS('.promo_btn_footer', 'pulse');
        },100);
    }


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



    const popupBigImages = () => {

        const  imgPopup = document.createElement('div'),
            workSection = document.querySelector('.menulist'),
               bigImage = document.createElement('img');

        // console.log("imgPopup=",imgPopup);
        // console.log("workSection=",workSection);
        // console.log("bigImage=",bigImage);

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
                // console.log("windowWide=", typeof (windowWide), windowWide);
                if ((windowWide > 767) && (target && (target.classList.contains('cake_img'))
                    || (target.classList.contains('mask'))
                    || (target.classList.contains('data-flash'))
                    )) {
                    imgPopup.style.display = 'flex';
                    const path = target.parentNode.parentNode.getAttribute('href');
                    // console.log("path=", target.parentNode.parentNode)
                    bigImage.setAttribute('src', path)
                } else {
                    console.log("else");
                }
                // console.log("4");
                if (target && target.matches('div.popup') || target.matches('img')) {
                    //if (target.matches('div.popup') && target.matches('popup')){
                    imgPopup.style.display = 'none';
                }
            }
        })
    }

    addRandomElements();
    setInterval(addRandomElements, 5000)

    menulistButtons();
    MenulistContent(btnMenulist.length)

    allAnimation();
    popupBigImages();

});
