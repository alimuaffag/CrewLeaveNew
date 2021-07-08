<?php

include('connectDB.inc.php');

if (isset($_POST['addPriority'])) {

    $crewID = $_POST["crewID"];
    $priority = $_POST["priority"];

    $sql = "INSERT INTO vocation(Crew_id, Month_Priority) VALUES ({$crewID}, '{$priority}');";

    if (mysqli_query($conn, $sql)) {

        $month = explode(",", $priority)[0];

        $sql = "UPDATE crew SET `Date_of_Vocation` = '$month ' WHERE ID = $crewID ;";
        mysqli_query($conn, $sql);

        echo 'true';
    } else {
        echo 'false';
    }


    unset($_POST);
    exit();
}
