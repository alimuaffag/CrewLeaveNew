<?php

$dbServerName = "localhost";
$dbUsername = "root";
// $dbPassword = "mysql";
$dbPassword = "";
$dbName = "crewleaves";

$conn = mysqli_connect($dbServerName, $dbUsername, $dbPassword, $dbName);

if ($mysqli->connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli->connect_error;
  exit();
}
