<?php
$a1 = array ("BMW"=>"2013","Audi"=>"2018","Mercedes"=>"2026");
$a2= array ("toyota"=>"2012");
print_r ($a1);
echo "<br>";
array_splice($a1,0,0,$a2);
print_r($a1);
?>