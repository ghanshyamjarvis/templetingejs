/* Loader Code Start */
jQuery(window).load(function () {
    "use strict";
    jQuery(".section-loader").fadeOut("slow");
});
/* Loader Code End */


$(function () {
    "use strict";
    $('body').prepend('<div id="progress-bar"><span></span></div>');
    $(window).scroll(function (e) {
        e.preventDefault();
        var windowScrollTop = $(window).scrollTop();
        var windowHeight = $(window).outerHeight();
        var bodyHeight = $(document).height();
        var total = (windowScrollTop / (bodyHeight - windowHeight)) * 100;
        $("#progress-bar span").css("width", total + "%")
    })

    $('.sidebar-dismiss, .sidebar-overlay').on('click', function () {
        // hide sidebar
        $('.sidebar').removeClass('active');
        // hide overlay
        $('.sidebar-overlay').removeClass('active');
    });
    $('#sidebarCollapse').on('click', function () {
        // open sidebar
        $('.sidebar').addClass('active');
        // fade in the overlay
        $('.sidebar-overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('.owl-clients').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    $('.owl-portfolio').owlCarousel({
        loop: true,
        margin: 10,
        merge: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1000: {
                items: 3,
                //mergeFit:true
            }
        }
    });
    $('.owl-works').owlCarousel({
        loop: true,
        margin: 20,
        merge: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1000: {
                items: 3,
                //mergeFit:true
            }
        }
    });


    /* Nice Select Code Start */
    $("select").niceSelect();
    /* Nice Select Code End */

// Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                        ;
                    });
                }
            }
        });

    loadSideNav();
});

function loadSideNav() {
    var heroHeight = $('#intro').outerHeight();
    var offsetTop = (heroHeight / 2) - ($('#side-nav').outerHeight() / 2);
    var offsetBottom = (heroHeight / 2) + ($('#side-nav').outerHeight() / 2);
    //$('#side-nav').css({top: offsetTop, visibility: 'visible'});
    $(window).scroll(function (e) {
        e.preventDefault();
        var windowScroll = $(window).scrollTop();
        if (windowScroll > offsetBottom) {
            $("#side-nav").addClass('dark')
        } else {
            $("#side-nav").removeClass('dark')
        }
    })
}




