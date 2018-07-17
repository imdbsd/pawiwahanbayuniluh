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

    var doLoad = false;
    var page = 1;
    if($(".loader__main-wrapper").length > 0){
        loadGallery();
    }

    function loadGallery(){
        if(!doLoad && page != -1){
            requestGallery(function(result){
                // var templateWrapper = '';            
                for(var index = 0; index < result.images.length; index++){
                    var imageUrl = result.site_url + result.images[index];
                    var newImage = new Image();
                    newImage.src = imageUrl;
                    newImage.onload = function(){
                        console.log(this.src + " is Loaded");
                        var templateImage = '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12"><div class="gallery__image-wrapper"><div class="gallery__image" style="background-image: url(' + this.src +')"></div></div></div>';
                        setTimeout(function(){
                            $("#gallery__grid-wrapper").append(templateImage);
                        }, 1500);
                    }
                    // var templateImage = '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12"><div class="gallery__image-wrapper"><div class="gallery__image" style="background-image: url(' + imageUrl +')"></div></div></div>';
                    // templateWrapper += templateImage;
                    // if(index == result.images.length - 1){
                    //     $("#gallery__grid-wrapper").append(templateWrapper);
                    // }
                }                
            })
        }
    }

    function requestGallery(callback){
        $.ajax({
            type: "GET",            
            url: "http://localhost/pawiwahanbayuniluh/api/?page=" + page,
            success: function(result){
                if(result.next){
                    page = result.next_index;
                }
                else{
                    page = -1;
                }
                callback(result);                
            },
            error: function(){

            }
        })
    }
    
    $(window).on("scroll", function(){
        var scrollPosition =  $(window).scrollTop();        
        if(scrollPosition >= windowHeight){
            $("#main-navbar").addClass("navbar__stick-top");
        }
        else{
            $("#main-navbar").removeClass("navbar__stick-top");
        }
        if($(".loader__main-wrapper").length > 0){
            // alert("ada gallery");
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
