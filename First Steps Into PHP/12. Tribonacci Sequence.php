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
if (isset($_GET['num'])) {
    $num = intval($_GET['num']);

    $x = 1;
    $y = 1;
    $m = 2;
    echo $y . " ";
    echo $y . " ";
    echo $m . " ";

    for($i = 1; $i < $num - 1; $i++)
    {
        $z = $x  + $y + $m;
        echo $z . " ";
        $x = $y;
        $y = $m;
        $m = $z;

    }

}

?>

</body>
</html>