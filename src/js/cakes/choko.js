import MenuCard from "@js/cakes/menu_card";
/**
 *  Шоколад
 **/


export default function choko() {
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
}