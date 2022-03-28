import MenuCard from "@js/cakes/menu_card";

/**
 *  Капкейки
 **/

const price = "680.-<p>1020.-<p>1530.-<p>2040.-";
const num = "4 шт.<p>6 шт.<p>9 шт.<p>12 шт.";

export default function cupcakes() {
    new MenuCard(
        "img/cakes/cupcakes/cupcake1_320.jpg",
        "img/cakes/cupcakes/big/cupcake1.jpg",
        "cupcake1",
        "Ванильные капкейки с нежным фисташковым кремом и кисленьким малиновым курдом",
        `${price}`,
        `${num}`,
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
        `${price}`,
        `${num}`,
        ".wrapper__cupcakes"
    ).render();
    new MenuCard(
        "img/cakes/cupcakes/cupcake4_320.jpg",
        "img/cakes/cupcakes/big/cupcake4.jpg",
        "cupcake4",
        "Ванильные с домашней карамелью / манго / шоколадным ганашем",
        `${price}`,
        `${num}`,
        ".wrapper__cupcakes"
    ).render();
    new MenuCard(
        "img/cakes/cupcakes/cupcake5_320.jpg",
        "img/cakes/cupcakes/big/cupcake5.jpg",
        "cupcake5",
        "Красный бархат с клюквой / вишней / манго",
        `${price}`,
        `${num}`,
        ".wrapper__cupcakes"
    ).render();
    new MenuCard(
        "img/cakes/cupcakes/cupcake6_320.jpg",
        "img/cakes/cupcakes/big/cupcake6.jpg",
        "cupcake6",
        "С имбирем и домашней апельсиновой карамелью",
        `${price}`,
        `${num}`,
        ".wrapper__cupcakes"
    ).render();
    new MenuCard(
        "img/cakes/cupcakes/cupcake7_320.jpg",
        "img/cakes/cupcakes/big/cupcake7.jpg",
        "cupcake7",
        "RAW капкейки шоколад-брусника-матча, шоколад-апельсин-специи, двойной шоколад-вишня-мускатный орех",
        "260.-<p>1040.-",
        "1 шт (от 4 шт.)<p>4 шт.",
        ".wrapper__cupcakes"
    ).render();
    new MenuCard(
        "img/cakes/cupcakes/cupcake8_320.jpg",
        "img/cakes/cupcakes/big/cupcake8.jpg",
        "cupcake8",
        "Красный бархат с манго",
        `${price}`,
        `${num}`,
        ".wrapper__cupcakes"
    ).render();
    new MenuCard(
        "img/cakes/cupcakes/cupcake9_320.jpg",
        "img/cakes/cupcakes/big/cupcake9.jpg",
        "cupcake9",
        "Ванильные с фисташковым кремом и малиновым курдом",
        `${price}`,
        `${num}`,
        ".wrapper__cupcakes"
    ).render();

    new MenuCard(
        "img/cakes/cupcakes/cupcake10_320.jpg",
        "img/cakes/cupcakes/big/cupcake10.jpg",
        "cupcake",
        "Капкейки красный бархат с манго и с вишней",
        `${price}`,
        `${num}`,
        ".wrapper__cupcakes"
    ).render();
}