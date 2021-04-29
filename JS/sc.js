document.getElementById("btn--iniciar-sesion").addEventListener("click",Iniciar);
document.getElementById("btn--registrarse").addEventListener("click",register);

var formulario_login = document.querySelector(".formulario_login");
var formulario__register = document.querySelector(".formulario__register");
var contenedor__login_register = document.querySelector(".contenedor__login_register");
var caja__trsera_login = document.querySelector(".caja__trsera_login");
var caja__trasera_registrer = document.querySelector(".caja__trasera_registrer")

function Iniciar(){
    formulario__register.style.display = "none";
    contenedor__login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja__trasera_registrer.style.opacity = "1";
    caja__trsera_login.style.opacity = "0";
}
function register(){
    formulario__register.style.display = "block";
    contenedor__login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja__trasera_registrer.style.opacity = "0";
    caja__trsera_login.style.opacity = "1";
}
