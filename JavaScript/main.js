var Table1 = document.getElementsByTagName("tbody");
var submit = document.getElementById("submit");
var Months = new Array(
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
);

const ALERT = document.getElementById("alert");
//close the alert
const CloseAlert = document.getElementsByClassName("closebtn")[0];
CloseAlert.onclick = () => {
  CloseAlert.parentElement.style.display = "none";
};

var InputList = new Array();
CreateTable();

submit.addEventListener("click", CheckInputs);

function CreateTable() {
  for (var i = 0; i < 12; i++) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var mi = document.createElement("input");
    mi.setAttribute("type", "text");
    mi.setAttribute("placeholder", "Enter Max Num..");
    mi.setAttribute("id", Months[i]);
    td1.append(i + 1 + "- " + Months[i]);
    td2.append(mi);
    tr.append(td1);
    tr.append(td2);
    InputList.push(mi);
    Table1[0].append(tr);
  }
}

function CheckInputs(e) {
  e.preventDefault();
  let validInput = true;
  InputList.forEach((input) => {
    let val = input.value;

    
    if (val == "") {
      validInput = false;
    }
  });


 ALERT.innerHTML = '<span class="closebtn">&times;</span>';
  if (!validInput) {
    ALERT.style.display = "block";
    ALERT.append("Please fill all months fields");
    return;
  }
  ALERT.style.display = "block";
  ALERT.classList.add("success");
  ALERT.append("all months are set successfully");

}
