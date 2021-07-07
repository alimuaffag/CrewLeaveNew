<?php

include('connectDB.inc.php');

if (isset($_POST['addPriority'])) {

    $crewID = $_POST["crewID"];
    $priority = $_POST["priority"];
    echo $priority . '  ';

    $sql = "INSERT INTO vocation(id_sender, Month_Priority) VALUES ({$crewID}, '{$priority}');";

   
   
    if ( mysqli_query($conn, $sql)) {
        echo 'true';
    } else {
        echo 'false';
        // echo "Error: " . mysqli_error($conn);
    }
   

    unset($_POST);
    exit();
}
