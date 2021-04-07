
let formulario:any=document.getElementById("formulario");
let mensaje:any=document.getElementById("mensajeDespedida");
let titulo:any=document.getElementById("titulo");
let rut:any=document.getElementById("rut");

/*BOTON ENVIAR DATOS*/
formulario.addEventListener("submit",function(evento){
    let valorRut=console.log(rut.value);
    titulo.style.display="none";
    formulario.style.display="none";
    mensaje.style.display="block";
    evento.preventDefault();
})

/*BOTON LIMPIAR DATOS*/
formulario.addEventListener("reset",function(evento){
})





