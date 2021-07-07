var Table1=document.getElementsByTagName("tbody");
var Months = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

CreateTable();



function CreateTable() {
    for(var i=0;i<12;i++){
      var tr =document.createElement("tr");
      var td1 =document.createElement("td");
      var td2 =document.createElement("td");
      var td3 =document.createElement("td");
      var td4 =document.createElement("td");
      var td5 =document.createElement("td");
      var td6 =document.createElement("td");
      var td7 =document.createElement("td");

      td1.append("A");
      td2.append("B");
      td3.append("B");
      td4.append("B");
      td5.append("B");
      td6.append("B");
      td7.append("B");

      tr.append(td1);
      tr.append(td2);
      tr.append(td3);
      tr.append(td4);
      tr.append(td5);
      tr.append(td6);
      tr.append(td7);
        Table1[0].append(tr);
    }
}