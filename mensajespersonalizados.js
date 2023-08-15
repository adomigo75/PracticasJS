let nombre = "no hay datos"
function mostrarMensaje(){
    nombre = prompt("ingrese su nombre")

    if (!isNaN(nombre) && nombre === null && nombre === "") {
    
        alert("ingrese solo texto")
    } else {
        nombre = nombre.toLowerCase()
        alert("¡Hola," + nombre + " Espero que estés disfrutando de JavaScript. ")
    
        
    }

}