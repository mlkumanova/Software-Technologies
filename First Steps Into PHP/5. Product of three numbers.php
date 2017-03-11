<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<form>
    X: <input type="text" name="num1" />
    Y: <input type="text" name="num2" />
    Z: <input type="text" name="num3" />
    <input type="submit" />
</form>
<?php
function count_negatives(array $numbers)
{
    $counter=0;
    foreach ($numbers as $x){
        if ($x < 0){
            $counter++;
        }
    }
    return $counter;
}
    if (isset($_GET['num1']) && isset($_GET['num2']) && isset($_GET['num3'])) {

        $numbers = array("num1", "num2", "num3");

    $result = count_negatives(array($numbers));

       if ($result % 2 == 1){
            echo "Negative";
       }
       else if ($result % 2 == 0){
           echo "Positive";
       }
    }
?>



</body>
</html>