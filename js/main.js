$(".globalAdvisor").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
});

jQuery('.latest-article').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: false,
    dots: false,
    nav: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    animateOut: 'fadeOut',
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

jQuery('.g-literacy').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: false,
    dots: false,
    nav: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
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

jQuery('.rajnath-img').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: false,
    dots: false,
    nav: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
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

// On window scroll 100px i want icon at bootom right which can take us to top from anywhere of viewport

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
    $('#scroll-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});
