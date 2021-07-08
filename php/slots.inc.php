<?php

include("connectDB.inc.php");

if (isset($_POST['save'])) {

    $slots = explode(",", $_POST['slots']);

    for ($i = 0; $i < count($slots); $i++) {

        $sql = "update slots set max_slot=$slots[$i] where id=$i;";
        mysqli_query($conn, $sql);
    }

    echo 'true';
} else if (isset($_GET)) {

    $sql = "SELECT max_slot, slot FROM slots;";
    $result = mysqli_query($conn, $sql);

    if ($result->num_rows > 0) {

        $row = mysqli_fetch_all($result, MYSQLI_ASSOC);

        echo json_encode($row);
    } else {
        echo "Somthing Went Wrong";
    }
}
