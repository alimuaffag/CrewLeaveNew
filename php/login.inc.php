<?php

include('connectDB.inc.php');
// echo "what";
if (isset($_POST['login'])) {

    session_start();

    $id = $_POST["id"];
    $Password = $_POST["password"];

    if ($_POST['login'] == "crew") {

        $sql = "SELECT * FROM crew where ID=$id and pass='$Password';";
        $result = mysqli_query($conn, $sql);

        // $resultCheck = mysqli_num_rows($result);
        if ($result->num_rows > 0) {

            $row = mysqli_fetch_assoc($result);

            $_SESSION['crew'] = $row;


            echo  json_encode($row);
        } else {
            echo "Wrong Password";
        }
    } else {

        $sql = "SELECT * FROM admin where ID=$id and pass='$Password';";
        $result = mysqli_query($conn, $sql);

        // $resultCheck = mysqli_num_rows($result);
        if ($result->num_rows > 0) {

            $row = mysqli_fetch_assoc($result);

            $_SESSION['admin'] = $row;


            echo  json_encode($row);
        } else {
            echo "Wrong Password";
        }
    }




    unset($_POST);
    exit();
}
