(function () {

    $(".slider").slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 860,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    dotsClass: "dots-style",
                    centerMode: false,
                    variableWidth: true,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    dotsClass: "dots-style",
                    centerMode: false,
                    variableWidth: true,
                }
            }
        ]
    });
})();