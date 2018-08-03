<?php ?>

<nav class="navbar navbar__navbar-maron" id="main-navbar">
    <div class="container-fluid">
        <ul class="navbar__menu-wrapper">
            <li>
                <a href="#">Keluarga</a></li>
            <li>
                <a href="#">Mepandes</a></li>
            <li>
                <a href="#">Acara</a></li>
            <li class="navbar__main-title">
                <a href="<?php echo $env[$envStatus]["site_url"]; ?>">Bayu & Ni Luh</a>
            </li>
            <li>
                <a href="#">Our Story</a></li>
            <li>
                <a href="<?php echo $env[$envStatus]["site_url"]; ?>/gallery">Gallery</a></li>
            <li>
                <a href="#">Lokasi</a></li>
        </ul>
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
    </div>       
    <div class="navbar__mobile-menu-wrapper" id="mobile-menu">
        <span class="navbar__close-toggler" id="menu-close">x</span>
        <ul class="navbar__mobile-menu">
            <li>
                <a href="#">Keluarga</a></li>
            <li>
                <a href="#">Mepandes</a></li>
            <li>
                <a href="#">Acara</a></li>                    
            <li>
                <a href="#">Our Story</a></li>
            <li>
                <a href="#">Gallery</a></li>
            <li>
                <a href="#">Lokasi</a></li>
        </ul>
    </div>     
</nav>