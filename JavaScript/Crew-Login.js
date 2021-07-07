
var submit = document.getElementById("submit");
var ID = document.getElementById("id");
var Password = document.getElementById("password");

const ALERT = document.getElementById("alert");

//close the alert
const CloseAlert = document.getElementsByClassName("closebtn")[0];
CloseAlert.onclick = () => {
  CloseAlert.parentElement.style.display = "none";
};


submit.addEventListener("click", CheckInputs);

function CheckInputs(e) {
  e.preventDefault();

 
   let validInput = true;
  
    
     ALERT.innerHTML = '<span class="closebtn">&times;</span>';

    
    
    if (ID.value == "" && Password.value== "") {
        ALERT.style.display = "block";
        ALERT.append("Please fill all Text Field");
        validInput = false;    
    }
    else{

      
      login(ID.value, Password.value);
    }
}


//Send POST to php via AJAX
function login(id, Pass) {

  var xhr = new XMLHttpRequest();

  xhr.open("POST", `php/login.inc.php`, true);
 
  //to Work with POST
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = () => {

    if (xhr.status == 200) {
     
      let crew = xhr.responseText;
      
      
      if (crew === "Wrong Password") {

        ALERT.style.display = "block";
        ALERT.append("Wrong ID or Password");

      }else{
        var crewJson = JSON.parse(crew);
        // console.log(typeof crewJson);
        // console.log(crewJson.Name);

        sessionStorage.setItem("crew", crew);

        window.location.href = `html/Profile.html?id=${id}`;
      }

    }
  };

  //set the parameters to send it as JSON
  var prams = `login=crew&id=${id}&password=${Pass}`;
  console.log(prams);
  xhr.send(prams);
}
