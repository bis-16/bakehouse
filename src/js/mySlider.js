import $ from 'jquery'
// global.jQuery = $;
// global.$ = $;

// <!--    <link rel="stylesheet" type="text/css" href="css/slick.css"/>-->
// <!--    <link rel="stylesheet" type="text/css" href="css/slick-theme.css"/>-->
import 'slick-carousel'
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");

function slider() {
    $(document).ready(function () {
        let adaptiveSlidesToShow = 1, adaptiveSlidesToScrool = 1;

        console.log('slick!')

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
//        $(window).resize( () => {
            $('.slider-track').slick('unslick');
//            document.querySelector('.slider-track').slick('unslick');
            sliderReShow();
        });

    });
}

export default slider;