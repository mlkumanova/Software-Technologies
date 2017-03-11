<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>
    <style>
        div{
            display: inline-block;
            width: 160px;
            padding: 10px;
            margin: 8px;
        }
    </style>

</head>
<body>



<ul>
    <?php
    for ( $red = 0; $red <= 255; $red += 51){
        for ($green = 0; $green<= 255; $green += 51){
          for ($blue = 0; $blue <= 255;$blue += 51){
              echo "<div style='background-color: rgb($red, $green, $blue )'>rgb($red, $green, $blue)</div>";
          }
        }
    }


   echo "<li style='color: $color'>$i</li>";

    ?>
</ul>
</body>
</html>