<?php
$now = time();
$week = 7*24*60*60; // w sekundach
echo "<br>za tydzień : " . 
date ("d.m.y h:i:sa", $now+$week);
?>