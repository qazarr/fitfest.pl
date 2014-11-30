$(document).foundation();
(function ($) {
    var App = {
        init: function () {
            this.slickStart();
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

        }
    }
    App.init();
    
})(jQuery);