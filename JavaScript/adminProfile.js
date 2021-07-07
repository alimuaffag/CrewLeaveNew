let admin = JSON.parse(sessionStorage.getItem("admin"));

const id = document.getElementById("id");
const name = document.getElementById("name");
const age = document.getElementById("age");
const email = document.getElementById("email");

updateProfile();

function updateProfile() {
    id.innerHTML += " " + admin.ID;
    name.innerHTML += " " + admin.Name;
    age.innerHTML += " " + admin.Age;
    email.innerHTML += " " + admin.Email;
}