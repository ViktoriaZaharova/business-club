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

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".filter-box__dropdown"); // тут указываем ID элемента
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

    $("[name='phone']").mask("8 (999) - 9999 - 999");

    $('.filter-box__drop .block-result').click(function () {
        $(this).siblings('.filter-box__dropdown').fadeIn();
    });

    $('.btn-edit').click(function (e) {
        e.preventDefault();
        $(this).parents('.filter-box__dropdown').fadeOut();
    });

    $('.list-room li a').click(function () {
        $(this).toggleClass('active');
    });


    $('.slider-range').slider({
        range: true,
        min: 0,
        max: 1250000,
        values: [ 0, 0 ],
        classes: {
            "ui-slider-handle": "ui-corner-all"
        },
        slide: function (event, ui) {
            //Поле минимального значения
            $(".dec1").val(ui.values[0]);
            //Поле максимального значения
            $(".dec2").val(ui.values[1]);
        }
    });

    $(".dec1").val($(".slider-range").slider("value"));
    $(".dec2").val($(".slider-range").slider("value"));


    $('.photo-slider').slick({
        slidesToShow: 1,
        dots: true,
        arrows: false
        // autoplay: true,
        // autoplaySpeed: 2000
    });

    $('.more-options').click(function (e) {
        e.preventDefault();
        $('.advanced-filter').fadeIn();
    });

    $('.advanced-filter .btn-close').click(function (e) {
        e.preventDefault();
        $('.advanced-filter').fadeOut();
    });

    $('.similar-properties__slider').slick({
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        infinite: false,
        responsive: [
            {
                breakpoint: 1296,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('[data-fancybox="images"], .popup-video').fancybox();

    $('.object-photo-max').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        asNavFor: '.object-photo-min',
        infinite: true,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('.object-photo-min').slick({
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        asNavFor: '.object-photo-max',
        infinite: true,
        responsive: [
            {
                breakpoint: 1390,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1296,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // var srcValue = $('.product-image__max img').attr('src');
    var penImg = $('.object-photo-max .popup-img img');
    var linksImg = $('.object-photo-max .popup-img');

    $('.object-photo-min div.min-preview').on('click', function () {
        $('.object-photo-min div.min-preview').removeClass('click-item');
        $(this).addClass('click-item');
        var imgPath;

        imgPath = $(this).attr('data-img-path');

        penImg.attr('src', imgPath);
        linksImg.attr('href', imgPath);

    });
});
