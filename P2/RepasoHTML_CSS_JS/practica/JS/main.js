//Este es un comentario de una línea

/* Esto es
un comentario
de varias líneas 
*/

//alerta
//alert("Soy una ventana de alerta")

//variables
var nombre = "Natalia Niebla Rosales";
let nombre2 = "Nat Niebla";
let edad = 19;
let logica=true;
let estatura=1.70;

//Mostrar en pantalla
let concatenacion = "La persona: "+nombre2+" tiene la edad de "+edad+" años";
/*document.write("<h1>"+concatenacion+"</h1>"+"<br>");
document.write("La persona: "+nombre2+" tiene la edad de "+edad+" años");
*/

//Mostrar en pantalla con el document.getElementById
let datos = document.getElementById("Informacion");
datos.innerHTML = `
<br>
<hr>
<h1>La personas ${nombre2} tiene la edad de ${edad} años</h1>
<hr>
<br>
`;

//let datos2 = document.getElementById("Información2");
datos2.innerHTML = "<h2>La edad es"+edad+"</h2>";

//Condicionales IF
if (estatura>=1.90)
    {
        document.write("Es una persona de estadura alta")
        datos.innerHTML +=`
    "<hr><h3> Es una persona alta</h3>";
else
    document.write("Es una persona de estatura promedio");
    datos.innerHTML +="<hr><h3> Es una persona de estatura promedio</h3>";