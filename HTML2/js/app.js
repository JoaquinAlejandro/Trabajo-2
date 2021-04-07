var formulario = document.getElementById("formulario");
var mensaje = document.getElementById("mensajeDespedida");
var titulo = document.getElementById("titulo");
var rut = document.getElementById("rut");
/*BOTON ENVIAR DATOS*/
formulario.addEventListener("submit", function (evento) {
    var valorRut = console.log(rut.value);
    titulo.style.display = "none";
    formulario.style.display = "none";
    mensaje.style.display = "block";
    evento.preventDefault();
});
/*BOTON LIMPIAR DATOS*/
formulario.addEventListener("reset", function (evento) {
});
