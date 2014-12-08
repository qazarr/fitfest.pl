(function ($) {
$(document).foundation();

    var App = {
        init: function () {
            this.slickStart();
            this.footer();
            this.menu();
            this.clock();
            this.smooth_scroll();
        },
        slickStart: function () {
            if ($('.brands').length > 0) {
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
            }
            if($('.slider').length>0){
                $('.slider').slick({
                    dots:true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                });
            }

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

            $('#home').css('padding-top', menuH + "px");
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
            if ($(window).width() > 699) {
                var menu_pos = $('.nav-btn').offset().top;
                $('.fix-size').height(menu_pos - $('.fix-size').offset().top + $('.nav-btn').height());
                var pos_fix = $('.up').offset().top - menu_pos;
                $('.up').css('bottom', pos_fix);
                //var h_fix= $('.nav-btn').height()+menu_pos;

            }
        },
        smooth_scroll: function () {
            $(document).on('click', 'a[href^="#"]', function (e) {
                // target element id
                var id = $(this).attr('href');

                // target element
                var $id = $(id);
                if ($id.size() === 0) {
                    return;
                }

                // prevent standard hash navigation (avoid blinking in IE)
                e.preventDefault();

                // top position relative to the document
                var pos = $(id).offset().top - $('.top-menu').height();

                // animated top scrolling
                $('body, html').animate({scrollTop: pos});
            });
        }
    }
    $(window).load(function () {
        App.box_fix();
    });

    var lastWindowHeight = $(window).height();
    var lastWindowWidth = $(window).width();
    $(window).on("resize orientationchange", function () {
        if ($(window).height() != lastWindowHeight || $(window).width() != lastWindowWidth) {

            //set this windows size
            lastWindowHeight = $(window).height();
            lastWindowWidth = $(window).width();
            if (window.RT)
                clearTimeout(window.RT);
            window.RT = setTimeout(function ()
            {
                this.location.reload(false); /* false to get page from cache */
            }, 200);
            // location.reload();
        }
    })
    App.init();

})(jQuery);