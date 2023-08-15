let edad = prompt("Ingrese su edad");

if (isNaN(edad) && edad === null && edad === "") {
    alert(" solo ingrese numero")
    
} else {
    if (edad>18) {

        alert("mayor de edad")
    } else {
    alert("menor de edad")
        
    }
    
}