<?php

include('connectDB.inc.php');


if (isset($_POST[''])) {
} else if (isset($_GET)) {

    $sql = "SELECT * FROM crew ORDER BY Date_of_hiring ASC;";
    $result = mysqli_query($conn, $sql);

    if ($result->num_rows > 0) {

        $row = mysqli_fetch_all($result, MYSQLI_ASSOC);

        echo json_encode($row);
    } else {
        echo "Somthing Went Wrong";
    }
}
