jQuery(document).ready(function() {

    //ripple-effect
    $('.slider').ripples({
        dropRadius: 5,
        perturbance: 0.01,
    });

    //owl-carousel
    $(".team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
        }
    });

    //counter-up
    $('.counter').counterUp({
        delay: 5,
        time: 1000
    });


    //smooth-scroll
    $('a').smoothScroll();
});


function scrolled() {
    if (scrollY >= 60) {
        let navbar = document.getElementById("navbar");
        navbar.classList.add("nav-secondary");
    } else {
        let cl = navbar.classList;
        if (cl.contains("nav-secondary")) {
            navbar.classList.remove("nav-secondary");
        }
    }
}