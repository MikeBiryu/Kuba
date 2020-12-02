$(function() {

    $('.photo__slider').slick({
        nextArrow: '<button type="button" class="slick-prev"><img src="images/aroow-l.svg" alt=""></button>',
        prevArrow: '<button type="button" class="slick-next"> <img src="images/aroow-r.svg" alt=""></button>'
    });

    $('.menu__btn').on('click', function() {
        $('.menu__list').slideToggle();
    });

});