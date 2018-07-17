<?php
include "../components/header.php";
?>
<body>
<?php include __DIR__."/../components/navbar.php"; ?>     
    <div class="container">    
        <h1 class="main__title title-margin">Gallery</h1>                        
        <div class="row" id="gallery__grid-wrapper">
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
    </div>
</body>
</html>