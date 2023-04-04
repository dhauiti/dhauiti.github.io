<?php
$url = $_GET['url'];
$data = file_get_contents($url);
header('Content-Type: ' . get_headers($url, 1)['Content-Type']);
echo $data;
?>
