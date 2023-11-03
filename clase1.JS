let nombre = prompt("1. Ingresa tu nombre:");
if (nombre == "Santino" || nombre == "Nahuel") {
alert("¡Bienvenido, " + nombre + "!");
}
alert(mensajeDeBienvenida())

let edad
if (edad >= 18) {
    return("sos mayor de edad")
}else{
    return ("sos menor de edad")
}
      


let CategoriaDeEdad
if (0 >= 11 ) {
return("Es un niño")
}
else if (12>=18 ) {
   return("Es un adolescente") 
}else if (19>=26 ) {
  return("Es joven")  
}else if (27>=59) {
 return("es adulto")   
}else{
    return("Es anciano")
}
  
function DiasLaborables(dias) {
    
}
if (dias == "sabado" || dias == "domingo")
{
  return("Es fin de semana.")
}
else
{
    return("Es un día laborable.")
}


let ComprobarContraseña = prompt("Ingresa la contraseña")
if (ComprobarContraseña == "secreto")
{
    return("Acceso concedido")
}
else
{
    return("Acceso denegado")
}
alert(ComprobarContraseña)

function MultiploDe5(numero) {
    if (MultiploDe5(numero))
        {
            return(numero + " es múltiplo de 5.");
        }
        else
        {
            return(numero + " no es múltiplo de 5.");
        }
}
alert(MultiploDe5(numero = 7))

function CalcularDescuento(edad , precio) {
    if (edad > 65) {
        return precio * 0.9; // 10% de descuento
        } else {
        return precio; 
    }
}    alert(CalcularDescuento)



function categoriaDeNotas(calificacion) {
    if (calificacion >= 80) {
      return "MS (Muy Satisfactorio)";
    } else if (calificacion >= 60) {
      return "S (Satisfactorio)";
    } else {
      return "EP (Evaluación Pendiente)";
    }
  }
  alert(categoriaDeNotas(75)) 

  function DiaCorrespondiente(dia) {
    if (dia != "Error")
    {
        return("El día correspondiente al número " + numero + " es: " + dia);
    }
    else
    {
        return("Número inválido. Debe estar entre 1 y 7.");
    }
}

{
    switch (num)
    {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Error";
    }
}
alert(DiaCorrespondiente(5))

let AñoBisiesto = prompt("Ingresa un año para verificar")
if (EsBisiesto(AñoBisiesto)) {
    return(AñoBisiesto + ("Es año bisiesto"))
} else {
    return(AñoBisiesto + ("No es año bisiesto"))
}
  alert(AñoBisiesto)    
  

