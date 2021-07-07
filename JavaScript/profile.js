let Crew = JSON.parse(sessionStorage.getItem("crew"));

const Id = document.getElementById("id");
const Name = document.getElementById("name");
const Age = document.getElementById("age");
const HireDate = document.getElementById("Hdate");
const RemDays = document.getElementById("Vdate");


Id.innerHTML += " " + Crew.ID;
Name.innerHTML += " " + Crew.Name;
Age.innerHTML += " " + Crew.Age;
HireDate.innerHTML += " " + Crew.Date_of_hiring;
remDays.innerHTML += (Crew.Remainig_Day == null) ? " " + 0 : " " + Crew.Remainig_Day;



console.log(JSON.parse(sessionStorage.getItem("crew")));