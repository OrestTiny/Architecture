$(document).ready(function () {
    $('.hd.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    $('.brand-sl.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            450: {
                items: 2,
                nav: false,

            },
            750: {
                items: 3,

            },
            1000: {
                items: 5
            }
        }
    })



    $('.rev-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })



});

