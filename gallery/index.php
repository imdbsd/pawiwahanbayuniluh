<?php
include "../components/header.php";
?>
<body>
<script src="<?php echo $env[$envStatus]["site_url"]; ?>/assets/vendor/isotope/isotope.pkgd.min.js"></script>
    <section class="slider__main-wrapper">
        <h1 class="slider__main-title">Our Moments</h1>
        <div class="slider__slider-rail">
            <div class="slider__content-image half" style="background-image: url(http://localhost/pawiwahanbayuniluh/assets/images/prewed/WP1_7972.jpg);"></div>
            <div class="slider__content-image half" style="background-image: url(http://localhost/pawiwahanbayuniluh/assets/images/prewed/WP2_9571.jpg);"></div>
            <div class="slider__content-image half" style="background-image: url(http://localhost/pawiwahanbayuniluh/assets/images/prewed/WP2_9606.jpg);"></div>
        </div>
        <?php include __DIR__."/../components/navbar.php"; ?>     
    </section>        
    <div class="container">    
        <h1 class="main__title title-margin">Gallery</h1>                        
        <div class="row" id="gallery__grid-wrapper">
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 grid-item" data-gallery="0">
                <div class="gallery__image-wrapper">
                    <div id="image-0" class="gallery__image loaded" style="background-image: url(http://localhost/pawiwahanbayuniluh/assets/images/prewed/WP1_7972.jpg)"></div>
                </div>
            </div>            
        </div>
        <div class="row">
            <div class="col-lg-12 loader__main-wrapper">
                <?php include __DIR__."/../assets/images/loader.svg"; ?>
                <a class="btn__btn-small btn__btn-maron" id="gallery-load">Load More</a>
            </div>            
        </div>        
        <!-- Modal -->
        <div id="lightbox-modal" class="modal fade" role="dialog">
            <div class="lightbox__header"><button type="button" class="close" data-dismiss="modal">&times;</button></div>
            <div class="modal-dialog">
                <!-- Modal content-->
                <?php include __DIR__."/../assets/images/spinner.svg"; ?>
                <div class="modal-content" style="display: none;">                
                    <div class="modal-body">    
                        <div class="lightbox__close" data-dismiss="modal"><i class="glyphicon glyphicon-remove"></i></div>                
                        <img src="" class="lightbox__image" id="lightbox-image"/>
                        <div class="lightbox__nav left"><i class="glyphicon glyphicon-chevron-left" alt="next image"></i></div>
                        <div class="lightbox__nav right"><i class="glyphicon glyphicon-chevron-right" alt="next image"></i></div>
                    </div>
                    <div class="modal-footer">
                        <p class="lightbox__text"><span id="lightbox-current"></span> / <span id="lightbox-all"></span></p>
                        <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
                    </div>
                </div>

            </div>
        </div>

    </div>
</body>
</html>