<?php

include("connectDB.inc.php");

if (isset($_POST['save'])) {
    $slots = explode(",", $_POST['slots']);

    for ($i = 0; $i < count($slots); $i++) {

        $sql = "update slots set max_slot=$slots[$i] where id=$i;";
        mysqli_query($conn, $sql);
    }
    $sql = "select id from crew order by Date_of_hiring";
    $result = mysqli_query($conn, $sql);
    if ($result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {
            

             $ids = $row["id"];
             $sql = "select Month_Priority from vocation where Crew_id=$ids";
             $employeeResult =  mysqli_query($conn, $sql);
             if($employeeResult->num_rows > 0){
                while($monthesRow = $employeeResult->fetch_assoc()){
                    $done = false;
                    $month = explode(",",$monthesRow["Month_Priority"]);
                    for($i = 0 ; $i < count($month); $i++){
                      $monthDone = false;
                      $wantedMonth = $month[$i];
                      $sql = "select max_slot , slot from slots where Monthe = '$wantedMonth'";  
                      $monthResult = mysqli_query($conn,$sql);
                      if($monthResult->num_rows>0){
                        while($slotRow = $monthResult->fetch_assoc()){
                            $maxSlot = $slotRow["max_slot"];
                            $currSlot = $slotRow["slot"];
                            echo "$maxSlot ";
                            if($currSlot < $maxSlot){
                                $done = true;
                                $sql = "update crew set Date_of_Vocation ='$wantedMonth' where id=$ids";
                                mysqli_query($conn,$sql);
                                $currSlot = $currSlot + 1;
                                $sql = "update slots set slot = $currSlot where Monthe = '$wantedMonth'";
                                mysqli_query($conn,$sql);
                                $monthDone = true;
                                break;
                            }
                        }
                      }
                      if($monthDone == true){
                          break;
                      }
                    }
                    if($done == true){
                        break;
                    }
                }
             }

        }
    }
    // echo 'true';
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
