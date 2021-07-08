var Table1 = document.getElementsByTagName("tbody");
var submit = document.getElementById("submit");
var edit = document.getElementById("edit");

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
getSlotsValue();

submit.addEventListener("click", CheckInputs);
edit.addEventListener("click", editBtn);

function CreateTable(slotsValue) {
  console.log(slotsValue);

  for (var i = 0; i < Months.length; i++) {

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    var inputElm = document.createElement("input");
    inputElm.setAttribute("type", "number");
    inputElm.setAttribute("placeholder", "Enter the Max Number");
    inputElm.setAttribute("id", Months[i]);
    inputElm.setAttribute("disabled", true);

    inputElm.setAttribute("value", slotsValue[i].max_slot);

    td1.append(i + 1 + "- " + Months[i]);
    td2.append(inputElm);
    tr.append(td1);
    tr.append(td2);

    InputList.push(inputElm);
    Table1[0].append(tr);
  }
}

// this function to get slots value form the database
function getSlotsValue() {

  var xhr = new XMLHttpRequest();

  xhr.open("GET", `../php/slots.inc.php`, true);

  //to Work with POST
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = () => {

    if (xhr.status == 200) {

      let res = xhr.responseText;
      if (res === 'Somthing Went Wrong') {

        ALERT.style.display = "block";
        ALERT.append(res);

      }
      else {

        res = JSON.parse(res);
        CreateTable(res);

      }

    }
  };

  xhr.send();
}

function CheckInputs(e) {
  var values = [];
  e.preventDefault();

  let validInput = true;
  InputList.forEach((input) => {
    let val = input.value;

    if (val === "") {
      validInput = false;
    } else {

      values.push(val);
    }

  });

  ALERT.innerHTML = '<span class="closebtn">&times;</span>';
  if (!validInput) {
    ALERT.style.display = "block";
    ALERT.append("Please fill all months fields");
    return;
  }


  saveValues(values);
}

function saveValues(values) {

  var xhr = new XMLHttpRequest();

  xhr.open("POST", `../php/slots.inc.php`, true);

  //to Work with POST
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = () => {

    if (xhr.status == 200) {

      let res = xhr.responseText;
      if (res === 'Somthing Went Wrong') {

        ALERT.style.display = "block";
        ALERT.append(res);

      }
      else {

        ALERT.style.display = "block";
        ALERT.classList.add("success");
        ALERT.append("all months are set successfully");

      }
    }
  };

  var prams = `save= &slots=${values}`;
  console.log(prams);
  xhr.send(prams);

}

// enable all input field
function editBtn() {
  var inputs = document.getElementsByTagName('input');

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false;
  }

}