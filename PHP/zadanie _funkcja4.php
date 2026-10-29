<?php

$tablica =[3,57,2,34];
$nowaTablica = [];

$min = min($tablica);
$max = max($tablica);

foreach ($tablica as $wartosc) {
    if ($wartosc === $min) {
        $nowaTablica[] = $max;   
    
    } else {
        $nowaTablica[] = $wartosc; 
    }
}

print_r($nowaTablica);
?>