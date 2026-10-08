<?php
function sum_num($num1, $num2) {
    return $num1 + $num2;
}

function sum_array($array) {
    $sumasum = 0;
    foreach ($array as $value) {
        $sumasum += $value;
    }
    return $sumasum;
}

$koszyk = array(5, 5, 5);

echo sum_num(2, 4) . "<br>";
echo sum_array($koszyk) . "<br>";
?>
