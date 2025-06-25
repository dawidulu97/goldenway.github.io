(function( $ ) {
    'use strict';

    //Sticky
    var $win = $(window);
    var $is_sticky = $('.is-sticky');
    if ($is_sticky.length > 0 ) {

        if ($win.width() < 992 && $is_sticky.hasClass('header-layout-2')) {
            var $navm = $('.site-header').offset();
        }else{
            var $navm = $('.main-header').offset();
        }

        $win.scroll(function(){
            var $scroll = $win.scrollTop();

            if($scroll > $navm.top){
                if( !$is_sticky.hasClass('has-fixed') ) { $is_sticky.addClass('has-fixed'); }
            } else {
                if( $is_sticky.hasClass('has-fixed') ) { $is_sticky.removeClass('has-fixed'); }
            }

        });
    }

    //Search Header
    $('#toggle-search').on('click', function () {
        $('.fa-search').toggleClass('fa-remove');
        $('#header-search-form').toggle();
        return false;
    });

    //Menu Mobile
    $('#menu-btn').on('click', function () {
        $('#site-navigation').stop().toggle();
    });
    $('#site-navigation li a').each(function() {
        if ($(this).next("ul").length > 0) {
            $("<span></span>").insertAfter($(this));
        }
    });
    $('#site-navigation li > span').on('click', function () {
        $(this).next('ul').stop().toggle();
        $(this).toggleClass('clicked');
    });

    //Counter
    $('.fun-facts .number').each(function() {
        var to = $(this).data('to'),
            speed = $(this).data('speed');

        $(this).countTo({
            to: to,
            speed: 3000
        });
    });

    //Features Hover
    $('.features-box.active').parent().addClass('onhover');
    $('.onhover .features-box').on( 'hover', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    //Process Hover
    $('.process .active').parent().addClass('onhover');
    $('.onhover .steps').on( 'hover', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    //Images Carousel
    $('.image-carousel').each( function () {
        var $show = $(this).data('show');
        var $arr = $(this).data('arrow');
        $(this).slick({
            infinite: false,
            slidesToShow: $show,
            slidesToScroll: 1,
            arrows: $arr,
            prevArrow: '<button type="button" class="prev-nav slider-nav"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="next-nav slider-nav"><i class="fas fa-chevron-right"></i></button>',
            autoplay: true,
            autoplaySpeed: 6000,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: $show,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });

    //Team Slider
    $('.team-slider').each( function () {
        var $show = $(this).data('show');
        var $arr = $(this).data('arrow');
        var $m_show = $show;
        if( $show == 4 ) $m_show = $show - 1;
        $(this).slick({
            infinite: false,
            slidesToShow: $show,
            slidesToScroll: 1,
            arrows: $arr,
            prevArrow: '<button type="button" class="prev-nav slider-nav"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="next-nav slider-nav"><i class="fas fa-chevron-right"></i></button>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: $m_show,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: $m_show - 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    //Testimonial Slider
    $('.testi-slider').each( function () {
        var $show = $(this).data('show');
        var $arr = $(this).data('arrow');
        var $m_show = $show;
        if( $show == 3 ) $m_show = $show - 1;
        $(this).slick({
            infinite: false,
            slidesToShow: $show,
            slidesToScroll: 1,
            arrows: $arr,
            autoplay: true,
            autoplaySpeed: 6000,
            prevArrow: '<button type="button" class="prev-nav slider-nav"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="next-nav slider-nav"><i class="fas fa-chevron-right"></i></button>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: $m_show,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });

    //Blog Slider
    $('.news-slider').each( function () {
        var $show = $(this).data('show');
        var $arr  = $(this).data('arrow');
        var $dot  = $(this).data('dot');
        var $auto = $(this).data('auto');
        var $m_show = $show;
        if( $show >= 3 ) $m_show = $show - 1;
        $(this).slick({
            infinite: false,
            slidesToShow: $show,
            slidesToScroll: 1,
            arrows: $arr,
            dots: $dot,
            autoplay: $auto,
            autoplaySpeed: 6000,
            prevArrow: '<button type="button" class="prev-nav slider-nav"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="next-nav slider-nav"><i class="fas fa-chevron-right"></i></button>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: $m_show,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: $m_show - 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });

    //Project Slider
    $('.project-slider').each( function () {
        var $show = $(this).data('show');
        var $arr  = $(this).data('arrow');
        var $dot  = $(this).data('dot');
        var $auto = $(this).data('auto');
        var $m_show = $show;
        if( $show >= 3 ) $m_show = $show - 1;
        $(this).slick({
            infinite: false,
            slidesToShow: $show,
            slidesToScroll: 1,
            arrows: $arr,
            dots: $dot,
            autoplay: $auto,
            autoplaySpeed: 6000,
            prevArrow: '<button type="button" class="prev-nav slider-nav"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="next-nav slider-nav"><i class="fas fa-chevron-right"></i></button>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: $m_show,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: $m_show - 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });

    //Project Filter
    $(window).load(function() {
        var $container = $('#projects');
        $container.isotope({
            itemSelector: '.project-item',
            filter: '*',
            masonry: {
                columnWidth: 1
            }
        });
        $('#filters a').on("click", function() {
            var $this = $(this);
            if ($this.hasClass('selected')) {
                return false;
            }
            var $optionSet = $this.parents();
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector
            });
            return false;
        });
    });

})( jQuery );