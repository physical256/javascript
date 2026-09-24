<?php
$liczba = 1;
$lista = [];
while ($liczba <= 50) {
    array_push ($lista,$liczba);
    $liczba++;
   }



for ($liczba = 51; $liczba <= 100; $liczba++) {
    $lista[] = $liczba;
}


   print_r ($lista);

?>