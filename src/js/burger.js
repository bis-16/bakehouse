// $(document).ready(function() {
// 	$('.menu-burger__header').click(function(){
//         $('.menu-burger__header').toggleClass('open-menu');
//         $('.header__nav').toggleClass('open-menu');
//         $('body').toggleClass('fixed-page');
// 	});
//     $('.burger_menu__btn').click(function(){
//         $('.menu-burger__header').toggleClass('open-menu');
//         $('.header__nav').toggleClass('open-menu');
//         $('body').toggleClass('fixed-page');
//     });
// });

document.addEventListener('DOMContentLoaded',()=> {
    document.querySelector('.menu-burger__header').addEventListener('click',()=>{
        document.querySelector('.menu-burger__header').classList.toggle('open-menu');
        document.querySelector('.header__nav').classList.toggle('open-menu');
        document.querySelector('body').classList.toggle('fixed-page');
    });
    document.querySelector('.burger_menu__btn').addEventListener('click',()=>{
        document.querySelector('.menu-burger__header').classList.toggle('open-menu');
        document.querySelector('.header__nav').classList.toggle('open-menu');
        document.querySelector('body').classList.toggle('fixed-page');
    });

});