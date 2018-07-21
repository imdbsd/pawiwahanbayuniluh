<style>
* { box-sizing: border-box; }

body { font-family: sans-serif; }

/* ---- grid ---- */

.grid {
  background: #DDD;
  max-width: 1200px;
}

/* clear fix */
.grid:after {
  content: '';
  display: block;
  clear: both;
}

/* ---- .grid-item ---- */

.grid-item {
  float: left;
  width: 80px;
  height: 80px;
  background: #0D8;
  border: 2px solid #333;
  border-color: hsla(0, 0%, 0%, 0.7);
}

.grid-item--width2 { width: 160px; }
.grid-item--height2 { height: 160px; }

.grid-item--width3 { width: 240px; }
.grid-item--height3 { height: 240px; }

button { font-size: 20px; }

</style>
<?php
include "../components/header.php";
?>
<script src="<?php echo $env[$envStatus]["site_url"]; ?>/assets/vendor/isotop/isotope.pkgd.min.js"></script>
<h1>Isotope - appended</h1>

<p><button class="append-button">Append items</button></p>

<div class="grid">
  
</div>

<script>
// external js: isotope.pkgd.js

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: 80
  }
});

$('.append-button').on( 'click', function() {
  // create new item elements
//   var $items = getItemElement().add( getItemElement() ).add( getItemElement() );
    $items = $('<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 grid-item"><div class="gallery__image-wrapper" style="height: 334px;"><div id="image-2" class="gallery__image loaded" style="background-image: url(http://localhost/pawiwahanbayuniluh/assets/images/prewed/WP1_7978.jpg)"></div></div></div>');
  // append elements to container
  $grid.append( $items )
    // add and lay out newly appended elements
    .isotope( 'appended', $items );
});


// make <div class="grid-item grid-item--width# grid-item--height#" />
function getItemElement() {
  var $item = $('<div class="grid-item"></div>');
  // add width and height class
  var wRand = Math.random();
  var hRand = Math.random();
  var widthClass = wRand > 0.85 ? 'grid-item--width3' : wRand > 0.7 ? 'grid-item--width2' : '';
  var heightClass = hRand > 0.85 ? 'grid-item--height3' : hRand > 0.5 ? 'grid-item--height2' : '';
  $item.addClass( widthClass ).addClass( heightClass );
  return $item;
}</script>