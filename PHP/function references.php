<?phpfunction add_some_extra(&$string){
    $string .='and something extras.';

}
$str = 'This is a string,';
add_some_extra($str);
echo $str; 
?>
