<?php

$dbServerName = "localhost";
$dbUsername = "root";
// $dbPassword = "mysql";
$dbPassword = "";
$dbName = "crewleaves";

$conn = mysqli_connect($dbServerName, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_errno) {
  echo "Failed to connect to MySQL: " . $conn->connect_error;
  exit();
}
