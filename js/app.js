$(document).foundation();
(function ($) {
    var App = {
        init: function () {
            //this.slickStart();
            this.footer();
            this.menu();
            this.clock();
            this.box_fix();
        },
        slickStart: function () {
            $('.brands').slick({
                slidesToShow: 8,
                slidesToScroll: 8
            });

            var filtered = false;
            $('.filter-sport').on('click', function () {
                if (filtered === false) {
                    $('.brands').slickFilter('.sport');
                    filtered = true;
                } else {
                    $('.sport').slickUnfilter();
                    filtered = false;
                }
            });
            $('.filter-uslugi').on('click', function () {
                if (filtered === false) {
                    $('.brands').slickFilter('.uslugi');
                    filtered = true;
                } else {
                    $('.uslugi').slickUnfilter();
                    filtered = false;
                }
            });
            $('.filter-suplementy').on('click', function () {
                if (filtered === false) {
                    $('.brands').slickFilter('.suplementy');
                    filtered = true;
                } else {
                    $('.suplementy').slickUnfilter();
                    filtered = false;
                }
            });

        },
        footer: function () {
            $('#footer-info-btn').click(function (event) {
                $('html, body').animate({
                    scrollTop: $(document).height()
                });
                $('#footer-info').toggle(300, 'swing');
                event.preventDefault();
            });
        },
        menu: function () {
            var totalH = $(window).height();
            var menuH = $('.top-menu').height();
            var logoH = $('#logo').outerHeight();
            console.log(logoH);
            var h = totalH - menuH;

            $('#home').css('margin-top',menuH+"px");
            $('.total-menu').height(h);
            $('.total-menu').css('top', menuH + "px");

            $(window).scroll(function () {
                if ($(this).scrollTop() > logoH) {
                    $('#menu-logo').css('visibility', 'visible');
                } else {
                    $('#menu-logo').css('visibility', 'hidden');
                }
            });
            $('.menu-btn').click(function (event) {
                $('.total-menu').toggle(300, 'swing');
                event.preventDefault();
            });
        },
        clock: function () {
//            var currentDate = new Date();
//            $('div#clock').countdown(15 * 24 * 60 * 60 * 1000 + currentDate.valueOf(), function (event) {
//                $this = $(this);
//                switch (event.type) {
//                    case "seconds":
//                    case "minutes":
//                    case "hours":
//                    case "days":
//                    case "weeks":
//                    case "daysLeft":
//                        $this.find('span#' + event.type).html(event.value);
//                        break;
//                    case "finished":
//                        $this.fadeTo('slow', .5);
//                        break;
//                }
            $('#clock').countdown('2015/06/20', function (event) {
                $(this).html(event.strftime('<div><span>%D</span>dni</div> : <div><span>%H</span>godz.</div> : <div><span>%M</span>min.</div> : <div><span>%S</span>sek.</div>'));
            });

        },
        box_fix: function () {

            $('.up').css('bottom', $('.nav-btn').height());
        }
    }
    $(window).load(function () {
        App.init();
    });

//    var lastWindowHeight = $(window).height();
//    var lastWindowWidth = $(window).width();
//    $(window).on("resize orientationchange", function () {       
//            if ($(window).height() != lastWindowHeight || $(window).width() != lastWindowWidth) {
//
//                //set this windows size
//                lastWindowHeight = $(window).height();
//                lastWindowWidth = $(window).width();
//                if (window.RT)
//                    clearTimeout(window.RT);
//                window.RT = setTimeout(function ()
//                {
//                    this.location.reload(false); /* false to get page from cache */
//                }, 200);
//                // location.reload();
//            }
//    })
//    App.init();

})(jQuery);