<?php
header('Content-Type: application/json');
ini_set('display_errors', 0);
$imagesJson = file_get_contents("images.json");
$imagesData = json_decode($imagesJson);
$siteUrl = "";
$isHttps = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != "off"? true: false;

if(!isset($_GET["page"]) && $_GET["page"] == "" && $_GET["page"] < 1){
    echo json_encode(
        array(
            "next" => false,
            "images" => array()
        )
    );
    exit;
}

// if($isHttps){
//     $siteUrl .= "https://";
// }
// else{
//     $siteUrl .= "http://";
// }

// $siteUrl .= $_SERVER['SERVER_NAME']."/assets/images/prewed/";

$siteUrl = "http://localhost/pawiwahanbayuniluh/assets/images/prewed/";

$page = $_GET["page"] - 1;
$fetch = 4;
$images = array();

for($index = $page * $fetch; $index < count($imagesData->images); $index++){        
    if(count($images) < $fetch){
        array_push($images, $imagesData->images[$index]);        
    }
    else{                
        break;
    }
}

$next = isset($imagesData->images[($page + 1) * $fetch])? true : false;

$response = (Object) array(
    "next" => $next,
    "site_url" => $siteUrl,
    "images" => $images  
);

if($next){
    $response->next_index = $page + 1 + 1;
}

echo json_encode($response);
?>