<!DOCTYPE html>
<html lang = "en">
    <head>
        <link rel = "stylesheet" href = "practice1.css">
        <meta charset = "UTF-8">
        <meta name = "viewport" content = "width-device-widthn initial-scale = 1.0">
        <title>Practice 4 Assignment</title>
    </head>
    <body>
        <h1>PHP Multiplication table</h1>

        
            <form action = "practice4.php" method= "get">
                Multiplication table Size: <input type = "text" name = "multiplication-table-input">
                <input type = "submit">



            </form>

            <?php
    // Check if the form has been submitted and the input exists
    $size = $_GET["multiplication-table-input"];
    echo $size;

    
    echo "<table border = '1'>";
    echo"<thead><tr>";

    for($i = 0; $i <= $size; $i ++){
        if($i == 0){
            echo"<th> </th>";
        }
        else{
            echo"<th>$i</th>"; 
        }
    }
    echo"</tr></thead>";

    echo"<tbody>";
   
    $counter = 1;

    for($i = 1; $i <= $size; $i ++){
        echo"<tr>";
        echo"<td>$i</td>";
        for($j = 1; $j <= $size; $j ++){
            $k = $i * $j;
            echo"<td>$k</td>";
        }
        echo"</tr>";
        $counter++;
    
    }
    echo"</tbody></table>"


    ?>

        
        
    </body>






</html>