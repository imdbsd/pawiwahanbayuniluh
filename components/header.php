<?php echo "<pre>";print_r($_SERVER);echo "</pre>"; ?>
<?php include "../env.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="<?php echo $env[$envStatus]["site_url"]; ?>/assets/vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo $env[$envStatus]["site_url"]; ?>/assets/vendor/slick/slick/slick.css">
    <link rel="stylesheet" href="<?php echo $env[$envStatus]["site_url"]; ?>/assets/css/main.css">
    <link rel="stylesheet" href="<?php echo $env[$envStatus]["site_url"]; ?>/assets/css/main.responsive.css">
    <script src="<?php echo $env[$envStatus]["site_url"]; ?>/assets/vendor/jquery/jquery-3.3.1.min.js"></script>
    <script src="<?php echo $env[$envStatus]["site_url"]; ?>/assets/vendor/slick/slick/slick.min.js"></script>
    <script src="<?php echo $env[$envStatus]["site_url"]; ?>/assets/js/main.js"></script>
    <script src="<?php echo $env[$envStatus]["site_url"]; ?>/assets/vendor/bootstrap/js/bootstrap.min.js"></script>
    <title><?php echo $env["site_name"] ?></title>
</head>