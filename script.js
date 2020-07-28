$(function () {

    $(".discount_card").each(function () {
        console.log($(this).find(".progress_info .already span").text(), $(this).find(".progress_info .available span").text());
        var alreadySold = parseInt($(this).find(".progress_info .already span").text());
        var avalible = parseInt($(this).find(".progress_info .available span").text());
        var percent = (alreadySold / (avalible + alreadySold)) * 100;
        $(this).find(".progress .progress-bar").css("width", percent + "%");
    });

    $('.dropdown-menu-content a').on('click', function () {
        $('.dropdown.dropdown-currency').find('button>p').text($(this).text());
    });

    $('.dropdown-menu-col a').on('click', function () {
        var selectedFlag = $(this).find('span').attr('class');
        $('.dropdown.dropdown-lang').find('button>p').text($(this).text());
        $('.dropdown.dropdown-lang').find('button>span').removeClass();
        $('.dropdown.dropdown-lang').find('button>span').addClass(selectedFlag);
    });

    $('.nav-item').on('click', function () {
        $('.navigation .navbar .nav-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.slick_banner').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    });

    $('.card_slide').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
    });

    $('.top_category_slick').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.card_slide .slick_controls .btn_next').on('click', () => {
        $('.card_slide .slick-next').click();
    });

    $('.card_slide .slick_controls .btn_prev').on('click', () => {
        $('.card_slide .slick-prev').click();
    });

    $.syotimerLang.neng = {
        second: ['SECS'],
        minute: ['MINS'],
        hour: ['HOURS'],
        day: ['DAYS'],
        handler: 'nengNumeral'
    };


    $.syotimerLang.nengNumeral = function (number) {
        return 0;
    };


    $('.counter_timer').syotimer({
        year: 2020,
        month: 7,
        day: 31,
        hour: 0,
        minute: 0,
        second: 0,
        lang: 'neng',

        timeZone: 'local',
        ignoreTransferTime: false,

        periodic: false,
        periodInterval: 7,
        periodUnit: 'd',

        dayVisible: true,

        doubleNumbers: true, // показывать часы, минуты и секунды с ведущими нолями ( 2часа 5минут 4секунды = 02:05:04)

        effectType: 'none',


        headTitle: '',

        footTitle: '',

        afterDeadline: function (timerBlock) {
            timerBlock.bodyBlock.html('<p style="font-size: 1.2em;">The countdown is finished!</p>');
        }
    });

    $('.category_header .slick_controls .btn_prev').on('click', () => {
        $('.top_category_slick .slick-prev').click();
    });
    $('.category_header .slick_controls .btn_next').on('click', () => {
        $('.top_category_slick .slick-next').click();
    });

    $('.filter_list .filter_item').on('click', function () {
        $(this).siblings().removeClass("active");
        $(this).addClass('active');
    });

    $('.bestseller_header .slick_controls .btn_prev').on('click', () => {
        $('.best_seller_slick .slick-prev').click();
    });
    $('.bestseller_header .slick_controls .btn_next').on('click', () => {
        $('.best_seller_slick .slick-next').click();
    });

    var grid = $('.filter_products').isotope({
        itemSelector: '.grid',
    });

    var fillterValue = '';

    $('.filterable_gallery .filter_list .filter_item').on('click', function () {
        fillterValue = $(this).attr('data-filter');
        grid.isotope({
            filter: fillterValue
        })
    });

    $('.best_seller_slick').slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.advertise').isotope({
        itemSelector: '.ad_card',
        layoutMode: 'masonry'
    });

    $('.electronics_slick').slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [{
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.appliance_slick').slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.blog_slick').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: []
    });
    $('.latest_blogs .slick_controls .btn_prev').on('click', () => {
        $('.blog_slick .slick-prev').click();
    });
    $('.latest_blogs .slick_controls .btn_next').on('click', () => {
        $('.blog_slick .slick-next').click();
    });

    $('.recently_prod_slick').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [{
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.recently_prod .slick_controls .btn_prev').on('click', () => {
        $('.recently_prod_slick .slick-prev').click();
    });
    $('.recently_prod .slick_controls .btn_next').on('click', () => {
        $('.recently_prod_slick .slick-next').click();
    });

    $('.companies_logo').isotope({
        itemSelector: '.img-fluid'
    });


    $(".new_star_rating").each(function () {
        score = $(this).parent().find('.star_marks').text().replace("(", "").replace(")", "");
        flag = 1;

        $(this).find(".star_wrap").each(function (index) {
            if (index < score - 1) {
                $(this).find(".mask").css("width", "100%");
            } else if (flag) {
                img_width = $(this).find('img').width();
                var changepercent = score - parseInt(score);
                if(changepercent == 0) {
                    changepercent = 1;
                }
                meta = changepercent * img_width;
                $(this).find(".mask").css("width", meta + "px");
                flag = 0;
            }
        })
    });

    $('.latest_product_slick').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: []
    });

    $('.latest_pro .slick_controls .btn_prev').on('click', () => {
        $('.latest_product_slick .slick-prev').click();
    });
    $('.latest_pro .slick_controls .btn_next').on('click', () => {
        $('.latest_product_slick .slick-next').click();
    });
});