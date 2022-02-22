import MenuCard from "@js/cakes/menu_card";

/**
 *  Капкейки
 **/

export default function tarts() {
    new MenuCard(
        "img/cakes/tarts/tart1_320.jpg",
        "img/cakes/tarts/big/tart1.jpg",
        "tart1",
        "Тарт шоколад-лимон",
        "190.-",
        "1 шт. (от 4шт.)",
        ".wrapper__tarts"
    ).render();
    new MenuCard(
        "img/cakes/tarts/tart2_320.jpg",
        "img/cakes/tarts/big/tart2.jpg",
        "tart2",
        `Песочные корзиночки "Как в детстве" с белковым кремом ( вареная сгущенка/вишня/яблочный джем)`,
        "70.-",
        "1 шт.",
        ".wrapper__tarts"
    ).render();
    new MenuCard(
        "img/cakes/tarts/tart3_320.jpg",
        "img/cakes/tarts/big/tart3.jpg",
        "tart2",
        `Тарт шоколад-банан`,
        "190.-",
        "1 шт. (от 4шт.)",
        ".wrapper__tarts"
    ).render();
}