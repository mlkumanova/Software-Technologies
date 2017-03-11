<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<?php
    $towns = "";
    if (isset($_GET['towns'])){
        $towns = explode("\n", $_GET['towns']);
        $towns = array_map('trim', $towns);
        sort($towns, SORT_STRING);
        $towns = implode("\n", $towns);
    }

?>

<form>
    <textarea rows="10" name="towns"><?= $towns ?></textarea>
    <br>
    <input type="submit" value="sort"/>
</form>
</body>
</html>