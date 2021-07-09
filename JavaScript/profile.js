let Crew = JSON.parse(sessionStorage.getItem("crew"));

const Id = document.getElementById("id");
const Name = document.getElementById("name");
const Age = document.getElementById("age");
const HireDate = document.getElementById("Hdate");
const Vdate = document.getElementById("Vdate");
const email = document.getElementById("email");


Id.innerHTML += " " + Crew.ID;
Name.innerHTML += " " + Crew.Name;
Age.innerHTML += " " + Crew.Age;
HireDate.innerHTML += " " + Crew.Date_of_hiring;
email.innerHTML += " " + Crew.Email;
Vdate.innerHTML +=" "+Crew.Date_of_Vocation;


console.log(JSON.parse(sessionStorage.getItem("crew")));