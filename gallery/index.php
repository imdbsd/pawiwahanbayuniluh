<?php
include "../components/header.php";
?>
<body>
<?php include __DIR__."/../components/navbar.php"; ?>     
    <div class="container">    
        <h1 class="main__title title-margin">Gallery</h1>                        
        <div class="row" id="gallery__grid-wrapper">
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12" id="gallery-grid-1"></div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12" id="gallery-grid-2"></div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12" id="gallery-grid-3"></div>
            <!-- <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div class="gallery__image-wrapper">
                    <div class="gallery__image" style="background-image: url(<?php echo $env[$envStatus]["site_url"]; ?>/assets/images/prewed/WP1_7972.jpg)">                    
                    </div>
                </div>                
            </div>             -->
        </div>
        <div class="row">
            <div class="col-lg-12 loader__main-wrapper">
                <?php include __DIR__."/../assets/images/loader.svg"; ?>
            </div>            
        </div>        
        <!-- Modal -->
        <div id="myModal" class="modal fade" role="dialog">
            <div class="lightbox__header"><button type="button" class="close" data-dismiss="modal">&times;</button></div>
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Modal Header</h4>
                </div>
                <div class="modal-body">
                    <p>Some text in the modal.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                </div>

            </div>
        </div>

    </div>
</body>
</html>