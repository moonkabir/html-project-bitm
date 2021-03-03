$(function() {
"use strict";

 /*  =====  magnificPopup  =====  */
 function m_popup_select () {
    $('#product-thumbnail').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }

  })
}
/* ===== Search  =====   */
function search(){
   var i = $("#search-overlay-btn");
   var a = $(".search-overlay, .search-overlay .search-overlay-close");
    i.on('click', function(event) {
        $(".search-overlay").addClass("open"),
        $('.search-overlay > form > input[type="search"]').focus();
    });
    a.on('click', function(event) {
        event.target != this && "search-overlay-close" != event.target.className && 32 != event.keyCode || $(this).removeClass("open");
    });
}

function owl_carousel () {
    $('.main-banner').owlCarousel({
        autoplay:false,
        responsiveClass:true,
        dots:true,
        items : 1, //10 items above 1000px browser width
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false,
            }
        }
    });

    $('.nArrivals , .Bestsellers , .Featured').owlCarousel({
        autoplay:false,
        responsiveClass:true,
        items : 4, //10 items above 1000px browser width
        responsive:{
            0:{
                items:2,
                nav:true
            },
            400:{
                items:2,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true
            },
            1200:{
                items:4,
                nav:true,
            }
        }
    });

    $('#featu-pro , #bests-pro , #new-pro').owlCarousel({
        autoplay:false,
        responsiveClass:true,
        items : 1, //10 items above 1000px browser width
        responsive:{
            0:{
                items:1,
                nav:true
            },
            480:{
                items:2,
                nav:true
            },
            767:{
                items:2,
                nav:true
            },
            1000:{
                items:1,
                nav:true,
            }
        }
    });
    /* ===== client carousel =====   */
    $('.client').owlCarousel({
        autoplay:false,
        responsiveClass:true,
        items : 1, //10 items above 1000px browser width
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:true,
            }
        }
    });

    /* ===== Product Thumbnail =====   */
    $('#product-thumbnail').owlCarousel({
        loop:false,
        thumbs: true,
        autoplay:false,
        items : 5, //10 items above 1000px browser width
        nav:true,
    })

    /* ===== Brand carousel =====   */
    $('.brand').owlCarousel({
        loop:true,
        autoplay:true,
        responsiveClass:true,
        items : 6, //10 items above 1000px browser width
        responsive:{
            0:{
                items:2,
                nav:true
            },
            400:{
                items:3,
                nav:true
            },
            600:{
                items:4,
                nav:true
            },
            1000:{
                items:6,
                nav:true,
                loop:true
            }
        }
    })
    /* ===== Team carousel =====   */
    $('.team3col').owlCarousel({
        autoplay:false,
        responsiveClass:true,
        items : 3, //10 items above 1000px browser width
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
            }
        }
    });
}

/* ---- Page Scrollup JS Start ---- */
   //When distance from top = 250px fade button in/out
 $(window).on("scroll",function(){
    if ($(this).scrollTop() > 250) {

        $('#scrollup').fadeIn(300);
        }
    else {
        $('#scrollup').fadeOut(300);
        }
   });
        $('#scrollup').on("click",function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

/* ===== Event for windows and document =====   */
    $(document).ready(function(){
        jQuery('.header nav').meanmenu();
        search();
        m_popup_select ();
    });

    $( window ).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
        owl_carousel ();
    });
    $( window ).on("resize", function() {
        search();
    });
});
jQuery( window ).on("load",function() {
     $(".loder").fadeOut("slow");    
});