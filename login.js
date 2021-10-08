let loginBtn = document.getElementById("login");

let userEmail = "vimal@gmail.com";
let userPass = "vimal123";

loginBtn.onclick = () =>{
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value; 

    if(email===userEmail && pass === userPass){
        window.location.href = "./pages/main.html"
    }

    else{
        document.getElementsByClassName("error")[0].style.display="block"
    }

    event.preventDefault();
}