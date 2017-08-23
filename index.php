<?php

require_once('vendor/autoload.php');

// Create new Plates instance
$templates = new League\Plates\Engine("public/templates/");

// Render a template
echo $templates->render('home.plates');

?>