function operaciones() {
    let n1, n2, tipoope, ope, respuesta;

     n1 = parseInt(document.getElementById("n1").value);
     n2 = parseInt(document.getElementById("n2").value);
     tipoope = document.getElementById("tipo").value;

    if (isnumber(n1) && isnumber(n2)) {   
        switch(tipoope) {
            case "+":
                ope = n1 + n2;
                break;
            case "-":
                ope = n1 - n2;
                break;
            case "*":
                ope = n1 * n2;
                break;
            case "/":
                ope = n1 / n2; break;  
        }
        respuesta = document.getElementById("resultado").innerHTML=`<h2> ${n1}  ${tipoope}  ${n2} = ${ope}</h2>`;
    } 
    else
    respuesta = document.getElementById("resultado");
    respuesta.innerHTML=`<h2>Ingrese solo numeros por favor</h2>`;
        alert('Alerta: Ingrese solo números por favor');
}

function isnumber(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}