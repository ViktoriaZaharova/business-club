$(document).ready(function() {
    $('.dropdown').hover(function () {
        $('.overlay').fadeToggle();
        $(this).toggleClass('on');
    });

    $('.block-search > form').click(function () {
        $(this).siblings('.block-search__dropdown').fadeIn();
    });

    $('.drop-close').click(function () {
        $('.block-search__dropdown').fadeOut();
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".block-search__dropdown"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.fadeOut(); // скрываем его
        }
    });


    $('.top-banner__content .btn-close').click(function (e) {
        e.preventDefault();
       $('.top-banner').fadeOut();
    });

    $('.license-slider').slick({
        slidesToShow: 2,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        infinite: false
    });
});
