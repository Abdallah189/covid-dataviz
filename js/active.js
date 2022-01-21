$(document).ready(function () {



     // ?Fixed Navbar
      $(window).scroll(function(){
        var ourwindow = $(this).scrollTop();
        if(ourwindow>52){
            $('body').addClass('fixed_nav');
        } else{
            $('body').removeClass('fixed_nav');
        }
    })

    $("#sideBarNavOpen").click(function () {
        $("#sideBarNav").addClass("active");
        $("#sideBarNavClose").show();
        $(this).hide();
    });
    $("#sideBarNavClose").click(function () {
        $("#sideBarNav").removeClass("active");
        $("#sideBarNavOpen").show();
        $(this).hide();
    });

    // ?Smooth Section for Section

    $('a.section-scroll[href*="#"]:not([href="#"])').on('click', function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
            location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 750);
                return false;
            }
        }

    });

    // ?Smooth Section for Section

    // ?Go_To_Top
    $('.go_top').click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });

    $('.go_top').hide();

    $(window).scroll(function () {
        var ourwindow = $(this).scrollTop();
        if (ourwindow < 500) {
            $('.go_top').fadeOut();
        } else {
            $('.go_top').fadeIn();
        }
    });


});