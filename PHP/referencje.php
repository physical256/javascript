<?php
$foo =  'BOB';
$bar = &$foo;
$bar= 'Andy';
echo $bar;
echo $foo;
?>
