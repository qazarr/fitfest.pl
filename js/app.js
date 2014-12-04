$(document).foundation();
(function ($) {
    var App = {
        init: function () {
            //this.slickStart();
            this.footer();
            this.menu();
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
        footer:function(){
            $('#footer-info-btn').click(function(event) {
                $('html, body').animate({
                    scrollTop: $(document).height()
                });
                $('#footer-info').toggle(300, 'swing');
                event.preventDefault();
            });
        },
        menu: function(){
            var totalH=$(window).height();
            var menuH=$('.menu').height();            
            var logoH=$('#logo').outerHeight();
            console.log(logoH);
            var h = totalH-menuH;
            
            //$('#home').css('margin-top',menuH+"px");
            $('.total-menu').height(h);
            $('.total-menu').css('top',menuH+"px");
            
            $(window).scroll(function(){
                if($(this).scrollTop()>logoH){
                    $('#menu-logo').css('visibility','visible');
                }else{
                    $('#menu-logo').css('visibility','hidden');
                }
            });            
            $('.menu-btn').click(function(event){
                $('.total-menu').toggle(300, 'swing');
                event.preventDefault();
            });
        },
    }
    App.init();
    
})(jQuery);