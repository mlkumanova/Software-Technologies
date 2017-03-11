<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<form>
   Celsius <input type="number" name="celsius">
    <input type="submit">
</form>

<?php
function calculate ($celsius){
return ($celsius * 9/5) + 32;
}
if (isset($_GET['celsius'])){
    $celsius = floatval($_GET['celsius']);
    $fahrenheit = calculate($celsius);

    echo "$celsius &deg;C = $fahrenheit &deg;F";
}
?>
</body>
</html>
