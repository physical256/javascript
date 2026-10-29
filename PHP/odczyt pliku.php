

<?php
$myfile = fopen("kk.txt", "r") or die("Unable to open file!");
echo fread($myfile, filesize("kk.txt"));
fclose($myfile);
?>