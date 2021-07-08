var Table1 = document.getElementsByTagName("tbody");
var Months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

getCrews();

function getCrews() {

  var xhr = new XMLHttpRequest();

  xhr.open("GET", `../php/crew.inc.php`, true);

  //to Work with POST
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = () => {

    if (xhr.status == 200) {

      let res = xhr.responseText;
      if (res === 'Somthing Went Wrong') {

        ALERT.style.display = "block";
        ALERT.append(`Couldn't Retreive data ${res}`);

      }
      else {

        res = JSON.parse(res);
        CreateTable(res);

      }
    }
  };

  xhr.send();

}

function CreateTable(data) {
  console.log(data[1]);
  for (var i = 0; i < data.length; i++) {
    var tr = document.createElement("tr");

    var name = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");

    name.append(data[i].Name);
    td2.append(data[i].ID);
    td3.append(data[i].Age);
    td4.append(data[i].Date_of_hiring);
    td5.append(data[i].Date_of_Vocation === "null" ? 'No Vacation' : data[i].Date_of_Vocation);
    td6.append(data[i].Remainig_Day === "null" ? 'No Vacation' : data[i].Remainig_Day);
    td7.append(0);

    tr.append(name);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    tr.append(td6);
    tr.append(td7);

    Table1[0].append(tr);
  }
}