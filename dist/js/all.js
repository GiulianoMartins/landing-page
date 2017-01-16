$(document).ready(function(){

    (function() {
        "use strict";

        var toggles = document.querySelectorAll(".c-hamburger");

        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        };

        function toggleHandler(toggle) {
            toggle.addEventListener( "click", function(e) {
                e.preventDefault();
                (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
            });
        }
    })();

    $(function() { 
        $(window).scroll(function() { 
            if($(this).scrollTop() != 0) { 
                $('#toTop').fadeIn();   
            } else { 
                $('#toTop').fadeOut(); 
            } 
        }); 
        $('#toTop').click(function() { 
            $('body,html').animate({scrollTop:0},800); 
        });
    });

    $(".list-banner").slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        // nextArrow: '<div class="class-to-style"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',
        // // nextArrow: '.slick-next:before',
        // // prevArrow: '.slick-prev:before',
        // prevArrow: '<div class="class-to-style"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
        responsive: [
            {
            breakpoint: 768,
                settings: {
                    arrows: false
                }
            },
            {
             breakpoint: 480,
                settings: {
                    arrows: false
                }
            },
            {
             breakpoint: 480,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $(".img-servico").css('background-image', 'url(dist/imgs/service.png)');
    $(".img-portfolio").css('background-image', 'url(dist/imgs/portfolio.png)');
    $(".img-clientes").css('background-image', 'url(dist/imgs/clientes.png)');

    $( ".link-servico" ).hover(
        function() {
            $(".img-servico").css('background-image', 'url(dist/imgs/service-hover.png)');
        }, function() {
            $(".img-servico").css('background-image', 'url(dist/imgs/service.png)');
        }
    );

    $( ".link-portfolio" ).hover(
        function() {
            $(".img-portfolio").css('background-image', 'url(dist/imgs/portfolio-hover.png)');
        }, function() {
            $(".img-portfolio").css('background-image', 'url(dist/imgs/portfolio.png)');
        }
    );

    $( ".link-clientes" ).hover(
        function() {
            $(".img-clientes").css('background-image', 'url(dist/imgs/clientes-hover.png)');
        }, function() {
            $(".img-clientes").css('background-image', 'url(dist/imgs/clientes.png)');
        }
    );
    $("#one .picture").css('border', '11px solid transparent');
    $("#two .picture").css('border', '11px solid transparent');
    $("#three .picture").css('border', '11px solid transparent');

    $("#one .play").css('background-image', 'url(dist/imgs/youtube.png)');
    $("#two .play").css('background-image', 'url(dist/imgs/youtube.png)');
    $("#three .play").css('background-image', 'url(dist/imgs/youtube.png)');

    $("#one .call-to-action")
    .mouseenter(function() {
        $("#one .picture").css('border', '11px solid #f90a3d');
        $("#one .play").css('background-image', 'url(dist/imgs/youtube-hover.png)');
    })
    .mouseleave(function() {
        $("#one .picture").css('border', '11px solid transparent');
        $("#one .play").css('background-image', 'url(dist/imgs/youtube.png)');
    });

    $("#two .call-to-action")
    .mouseenter(function() {
        $("#two .picture").css('border', '11px solid #f90a3d');
        $("#two .play").css('background-image', 'url(dist/imgs/youtube-hover.png)');
    })
    .mouseleave(function() {
        $("#two .picture").css('border', '11px solid transparent');
        $("#two .play").css('background-image', 'url(dist/imgs/youtube.png)');
    });

    $("#three .call-to-action")
    .mouseenter(function() {
        $("#three .picture").css('border', '11px solid #f90a3d');
        $("#three .play").css('background-image', 'url(dist/imgs/youtube-hover.png)');
    })
    .mouseleave(function() {
        $("#three .picture").css('border', '11px solid transparent');
        $("#three .play").css('background-image', 'url(dist/imgs/youtube.png)');
    });
});