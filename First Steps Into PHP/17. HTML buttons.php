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
    $numbers = intval($_GET['num']);
    for ($i = 1; $i <= $numbers; $i++){
        echo "<button>$i</button>";
    }
}

?>

</body>
</html>