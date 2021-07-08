var Table1 = document.getElementsByTagName("tbody");
var submit = document.getElementById("submit");
var Months = new Array(
  "Month",
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

var map = new Map();

var SelectionList = new Array();
var SelectedValue = new Array();

CreateTable();

//if the select box change hide the month name
SelectionList.forEach((select) => {
  select.addEventListener("change", DeleteSelected);
});

submit.addEventListener("click", SubmitFn);

//Delete the month name from the Select box
function DeleteSelected() {
  let index = this.selectedIndex;
  let month = this.options[index].value;
  let prevIndex =
    map.get(this.getAttribute("id")) === undefined
      ? -1
      : map.get(this.getAttribute("id"));

  map.set(this.getAttribute("id"), index);

  SelectedValue.push(this.value);
  SelectionList.forEach((select) => {
    if (this.getAttribute("id") !== select.getAttribute("id")) {
      if (index != 0) {
        select.options[index].style.display = "none";
      }

      if (prevIndex != -1 && prevIndex != 0) {
        select.options[prevIndex].style.display = "block";
      }
    }
  });
}

//submit button action
function SubmitFn(e) {

  e.preventDefault();

  let noMonth = false;

  SelectionList.forEach((select) => {
    let index = select.options.selectedIndex;
    let month = select.options[index].value;

    if (index == 0) {
      noMonth = true;
    }
  });

  ALERT.innerHTML = '<span class="closebtn">&times;</span>';

  if (noMonth) {
    ALERT.style.display = "block";
    ALERT.append("Please Select all the Priority Month");
    return;
  }

  addPriority(SelectedValue);
  // console.log();
}

//Create the Priority Table
function CreateTable() {
  for (var i = 0; i < 12; i++) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var select = document.createElement("select");
    select.setAttribute("id", "Priority" + (i + 1));

    for (const val of Months) {
      var option = document.createElement("option");
      option.value = val;
      option.text = val;
      select.appendChild(option);
    }

    td1.append("- Priority " + (i + 1));
    td2.append(select);
    tr.append(td1);
    tr.append(td2);

    SelectionList.push(select);

    Table1[0].append(tr);
  }
}


// add Priority function 
function addPriority(SelectedValue) {

  var crew = JSON.parse(sessionStorage.getItem('crew'));
  var crewID = crew.ID;
  var priority = SelectedValue.toString();

  console.log(crewID);

  var xhr = new XMLHttpRequest();

  xhr.open("POST", `../php/addPriority.inc.php?addPriority= &crewID=${crewID}&priority=${priority}`, true);

  //to Work with POST
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = () => {

    if (xhr.status == 200) {

      let response = xhr.responseText;
      console.log(response);
      if (response === 'false') {
        ALERT.style.display = "block";
        ALERT.append("Somthing went wrong, Try again later");
      } else {
        ALERT.style.display = "block";
        ALERT.classList.add("success");
        ALERT.append("Your Priority List has been successfuly sent");
      }

    }
  };

  //set the parameters to send it as JSON
  var prams = `addPriority= &crewID=${crewID}&priority=${priority}`;

  xhr.send(prams);
}