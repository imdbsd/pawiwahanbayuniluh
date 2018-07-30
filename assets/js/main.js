$(document).ready(function(){
    var windowHeight = $(window).outerHeight();
    var windowWidth = $(window).outerWidth();
    
    // resizing slider image
    $.map($(".slider__content-image"), function(element){
        if($(".slider__content-image.half").length > 0){
            $(element).css("height", windowHeight * 3/4  + 50 + "px");
        }           
        else{
            $(element).css("height", windowHeight + 50 + "px");
        }        
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
    if($("#gallery__grid-wrapper").length > 0){
        var $grid = $('#gallery__grid-wrapper').isotope({            
            itemSelector: '.grid-item',
            layoutMode: 'masonry'
          });
          var imageGallery = [
            {
                "url": "http://localhost/pawiwahanbayuniluh/assets/images/prewed/WP1_7972.jpg",
                "size": ["1","2"]
            }
          ];
          var galleryIndex = 0;
        loadGallery();
    }

    function loadGallery(){               
        if(!doLoad && page != -1){
            doLoad = true;
            $("#gallery-load").css("display","none");                            
            $("#loading-bar").css("display", "inline-block");
            requestGallery(function(result){
                var templateWrapper = '';            
                for(var index = 0; index < result.images.length; index++){
                    var imageUrl = result.site_url + result.images[index].name;                   
                    var size =  result.images[index].size.split("x");
                    var templateImage = '<div class="col-lg-' + parseInt(size[0]) * 4 + ' col-md-' + parseInt(size[0]) * 4 + ' col-sm-6 col-xs-12 grid-item" data-gallery="' + imageGallery.length + '"><div class="animated-background"><div class="gallery__image-wrapper" style="height: ' + parseInt(size[1]) * 250 + 'px;"><img src="http://localhost/pawiwahanbayuniluh/assets/images/picture.png" alt="image icon"/><div id="image-" class="gallery__image loaded" style="background-image: url(' + imageUrl + ')"></div></div></div></div>';
                    templateWrapper += templateImage;
                    imageGallery.push(
                        {
                            "url": imageUrl,
                            "size": size
                        }
                    )
                    if(index == result.images.length - 1){                        
                        var $items = $(templateWrapper);
                        $grid.append( $items )                        
                        .isotope( 'appended', $items );
                        doLoad = false;
                        $("#loading-bar").css("display", "none");                        
                        if(page != -1){
                            $("#gallery-load").css("display","inline-block");                            
                        }
                    }
                }                
            })
        }
    }

    function requestGallery(callback){
        $.ajax({
            type: "GET",            
            // url: "http://localhost:3000/api/getImages/" + page,
            url: "https://pwhbn-api.herokuapp.com/api/getImages/" + page,
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

    $("#gallery-load").click(function(e){
        loadGallery();
    })  

    $(document).on("click", ".grid-item", function(e){        
        $("#spinner").css("display","block");
        $(".modal-content").css("display","none");
        $("#lightbox-modal").modal({
            "backdrop": "static"
        });
        var selectedImageIndex = parseInt($(this).data("gallery"));
        galleryIndex = selectedImageIndex;
        var image = new Image();
        image.src = imageGallery[selectedImageIndex].url;
        $("#lightbox-image").attr("src", image.src);        
        if(image.naturalHeight > image.naturalWidth){            
            $("#lightbox-image").addClass("potrait");
            $("#lightbox-image").removeClass("landscape");
            if($(window).innerWidth() <= 900){
                var browserWidth = $(window).innerWidth();            
                $("#lightbox-image").css("height", browserWidth);                
            }
            else{
                var browserHeight = $(window).innerHeight() - 100;            
                $("#lightbox-image").css("height", browserHeight);                                                
            }                        
        }
        else{            
            $("#lightbox-image").addClass("landscape");
            $("#lightbox-image").removeClass("potrait");      
            $("#lightbox-image").css("height", "");      
            $(".lightbox__text").css("padding-right", 0);                     
        }
        setTimeout(function(){
            $(".modal-content").css("display","block");
            $("#spinner").css("display","none");                
            var margin = $("#lightbox-image").css("margin-right").split("px")[0];
            $(".lightbox__text").css("right", margin + "px");
            $(".lightbox__close").css("right", margin - 10 + "px");
            $(".lightbox__nav.left").css("left", margin + "px");
            $(".lightbox__nav.right").css("right", margin + "px");
        }, 1000)            
        changeActiveLightbox();
    })

    $(".lightbox__nav.left").click(function(e){
        changeImage(-1);
    })

    $(".lightbox__nav.right").click(function(e){
        changeImage(1);
    })

    function changeImage(action){
        galleryIndex += action;
        if(galleryIndex < 0){
            galleryIndex = imageGallery.length - 1;
        }
        else if(galleryIndex >= imageGallery.length){
            galleryIndex = 0;
        }
        var newImage = new Image();
        newImage.src = imageGallery[galleryIndex].url;
        $("#lightbox-image").attr("src", newImage.src);    
        if(newImage.naturalHeight > newImage.naturalWidth){            
            $("#lightbox-image").addClass("potrait");
            $("#lightbox-image").removeClass("landscape");
            if($(window).innerWidth() <= 900){
                var browserWidth = $(window).innerWidth();            
                $("#lightbox-image").css("height", browserWidth);                
            }
            else{
                var browserHeight = $(window).innerHeight() - 100;            
                $("#lightbox-image").css("height", browserHeight);                                                
            }            
        }
        else{            
            $("#lightbox-image").addClass("landscape");
            $("#lightbox-image").removeClass("potrait");      
            $("#lightbox-image").css("height", "");                                   
        }
        var margin = $("#lightbox-image").css("margin-right").split("px")[0];
        $(".lightbox__text").css("right", margin + "px");
        $(".lightbox__close").css("right", margin - 10 + "px");
        $(".lightbox__nav.left").css("left", margin + "px");
        $(".lightbox__nav.right").css("right", margin + "px");
        changeActiveLightbox();
    }

    function changeActiveLightbox(){
        $("#lightbox-current").html(galleryIndex + 1);
        $("#lightbox-all").html(imageGallery.length);
    }
    
    $(window).on("scroll", function(){
        var scrollPosition =  $(window).scrollTop();        
        var height = windowHeight;
        if($(".slider__content-image.half").length > 0){
            height = height * 3/4;
        }
        if(scrollPosition >= height){
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
