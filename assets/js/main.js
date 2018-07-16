$(document).ready(function(){
    var windowHeight = $(window).outerHeight();
    var windowWidth = $(window).outerWidth();
    
    // resizing slider image
    $.map($(".slider__content-image"), function(element){
        $(element).css("height", windowHeight + 50 + "px");
        $(element).css("width", windowWidth + "px");
    })        

    var resize_timeout;
    $(window).on('resize', function(){
        clearTimeout(resize_timeout);
        resize_timeout = setTimeout(function(){
            windowHeight = $(window).outerHeight();            
            windowWidth = $(window).outerWidth();                        
            $.map($(".slider__content-image"), function(element){
                $(element).css("height", windowHeight + 50 + "px");
                $(element).css("width", windowWidth + "px");
            })        
        }, 150);
    });
    
    $(window).on("scroll", function(){
        var scrollPosition =  $(window).scrollTop();        
        if(scrollPosition >= windowHeight){
            $("#main-navbar").addClass("navbar__stick-top");
        }
        else{
            $("#main-navbar").removeClass("navbar__stick-top");
        }
    })

    $('.slider__slider-rail').slick({    
        arrows: false,
        fade: true,
        draggable: true,
        autoplay: true
    });

    $(".navbar-toggle").click(function(e){
        $("#mobile-menu").addClass("open");
        $(".navbar__mobile-menu").addClass("open");
    })

    $("#menu-close").click(function(e){
        $("#mobile-menu").addClass("unopen");
        $(".navbar__mobile-menu").addClass("unopen");
        setTimeout(function(){
            $("#mobile-menu").removeClass("open unopen");
            $(".navbar__mobile-menu").removeClass("open unopen");
        }, 1000)
    })
})
