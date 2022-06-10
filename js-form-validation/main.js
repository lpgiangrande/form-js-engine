// 1 Target id and classes
// 2 add EventListener -> submit
// 3 engine function
// 4 test the system

/*
fonction pour empêcher la répétition "getElementById"
*/
 /*let id = (id) => {
     return document.getElementById(id)
 }*/

// autre façon d'écrire cette fonction 
// fonction flêchée en une ligne : pas besoin de return
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

// appel de la fonction engine() pour tous les inputs
  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
});

/* Cette fonction empêche de répéter 
le if else pour tous les inputs */ 
let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message; // serial = index
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};


// https://www.youtube.com/watch?v=VufN46OyFng&ab_channel=JoyShaheb