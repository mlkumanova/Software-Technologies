<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<form>
    N: <input type="text" name="num" />
    <input type="submit" />
</form>
<?php
if (isset($_GET['num'])){
    $num = intval($_GET['num']);

function factorial( $num )
{
    if( $num < 1 ){
        $num = 1;
    }
    return array_product( range( 1, $num ));
}
echo factorial($num);
}

?>

</body>
</html>