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
function calculate ($num){
    return ($num * 2);
}
if (isset($_GET['num'])){
    $num = floatval($_GET['num']);
    $multiply = calculate($num);

    echo "$multiply";
}
?>




</body>
</html>