<?php
$hour = date("H");

if($hour < "10" ) {
    echo "Have a good day!";
} else {
    echo "Have a good night!";
}
?>