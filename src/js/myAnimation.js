// import 'animate.css'
//
// const animateCSS = (element, animation, duration = 20, delay = 10, offset = 0) => {
//     //duraion = duration:)
//     //delay = delay before the animation starts
//     //offset = distance to start animation (related to the browser bottom)
//     // We create a Promise and return it
//     const prefix = 'animate__';
//     new Promise((resolve, reject) => {
//         const animationName = `animate__${animation}`;
//         const node = document.querySelector(element);
//         //console.log("node=", node);
//         node.classList.add(`animate__animated`, animationName);
//         //node.setAttribute(`data-wow-duration`,duration);
//         //node.setAttribute(`data-wow-delay`,delay);
//         // When the animation ends, we clean the classes and resolve the Promise
//         function handleAnimationEnd(event) {
//             event.stopPropagation();
//             node.classList.remove(`${prefix}animated`, animationName, 'wow');
//             resolve('Animation ended');
//         }
//         node.addEventListener('animationend', handleAnimationEnd, {once: true});
//     });
// }
//
// function allAnimation() {
//     console.log('allAnimation: on');
//     const animationType_TypeInY = 'flipInY',
//         animationType_Bounce = 'bounce',
//         animationType2 = 'fadeIn',
//         animationType_InUp = 'fadeInUp';//,
//     // animationType9 = 'fadeInRight';
//
//     //панель с кнопками
//     animateCSS('.nav__menu', animationType2);
//     animateCSS('.nav__title', animationType2);
//     //десерты
//     animateCSS('.menulist__title', animationType_InUp);
//     animateCSS('.menulist__item0', animationType2);
//     animateCSS('.menulist__item1', animationType2);
//     animateCSS('.menulist__item2', animationType2);
//     animateCSS('.menulist__item3', animationType2);
//     animateCSS('.menulist__item4', animationType2);
//     animateCSS('.menulist__item5', animationType2);
//
//     animateCSS('.button-more-menulist', animationType_InUp);
//     //автор
//     animateCSS('.about__title', animationType_InUp);
//     animateCSS('.about__title-mini', animationType_InUp);
//     //animateCSS('.wrapper__about0', animationType_InUp);
//     //animateCSS('.wrapper__about', animationType_InUp);
//     //animateCSS('.wrapper__about2', animationType_InUp);
//     animateCSS('.about__text', animationType_InUp);
//     animateCSS('.about__author-img', animationType_TypeInY);
//     animateCSS('.about2__round0', animationType_TypeInY);
//     animateCSS('.about2__round1', animationType_TypeInY);
//     animateCSS('.about2__round2', animationType_TypeInY);
//     //animateCSS('.about__item0', animationType_InUp);
//     //animateCSS('.about__item1', animationType_InUp);
//     //animateCSS('.about__item2', animationType_InUp);
//     animateCSS('.about2__text0', animationType_InUp);
//     animateCSS('.about2__text1', animationType_InUp);
//     animateCSS('.about2__text2', animationType_InUp);
//     //animateCSS('.item0__round__img', animationType_Bounce);
//     //animateCSS('.item1__round__img', animationType_Bounce);
//     //animateCSS('.item2__round__img', animationType_Bounce);
//     animateCSS('#bg2_text', animationType_InUp);
//     //доставка
//     animateCSS('.deliver__title', animationType_InUp);
//     animateCSS('.deliver__round0', animationType_TypeInY);
//     animateCSS('.car0', 'bounce');
//     animateCSS('.deliver__text0', animationType_InUp);
//     animateCSS('.deliver__round1', animationType_TypeInY);
//     animateCSS('.car1', 'bounce');
//     animateCSS('.deliver__text1', animationType_InUp);
//     //Отзывы
//     //animateCSS('.feedback__title', animationType_InUp);
//     //animateCSS('.slider-container', 'fadeInRight');
//     //Контакты
//     animateCSS('.contacts__title', animationType_InUp);
//     //рассыпанные элементы
//     animateCSS('#almonds', animationType_InUp);
//     animateCSS('#huzlenut', animationType_InUp);
//     animateCSS('#green', animationType_InUp);
//     //кнопка заказа в футере
//    /* setInterval(() => {
//         animateCSS('.promo-btn-footer', 'pulse');
//     },100);*/
// }
//
// allAnimation();
//
// export default allAnimation;
import 'aos/dist/aos.css';

let addDataAttr = (element, animation) => {
        let node = document.querySelector(element);
        console.log("node=", node);
        node.classList.add("aos-init");
        node.classList.add("aos-animate");
        node.setAttribute("data-aos", animation);

        // new Promise((resolve, reject) => {
        //     const animationName = `animate__${animation}`;
        //     const node = document.querySelector(element);
        //     //console.log("node=", node);
        //     node.classList.add(`animate__animated`, animationName);
        //     //node.setAttribute(`data-wow-duration`,duration);
        //     //node.setAttribute(`data-wow-delay`,delay);
        //     // When the animation ends, we clean the classes and resolve the Promise
        //     function handleAnimationEnd(event) {
        //         event.stopPropagation();
        //         node.classList.remove(`${prefix}animated`, animationName, 'wow');
        //         resolve('Animation ended');
        //     }
        //     node.addEventListener('animationend', handleAnimationEnd, {once: true});
        // });
};


function anim(){
    addDataAttr(".deliver__title", "zoom-in")
    addDataAttr(".deliver__round0", "zoom-in")
}

export default anim;