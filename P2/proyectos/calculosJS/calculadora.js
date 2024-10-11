function operaciones() {
    let n1, n2, tipoope, ope, respuesta;

     n1 = parseInt(document.getElementById("n1").value);
     n2 = parseInt(document.getElementById("n2").value);
     tipoope = document.getElementById("tipo").value;

    if (isnumber(n1) && isnumber(n2)) {   
        let ope;
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
                ope = n1 / n2;
                break;  
            default:
                ope = "Operación no válida";
        }
        let respuesta = document.getElementById("resultado");
        respuesta.innerHTML = `<h3><hr>  ${n1}  ${op}  ${n2} = ${ope}</h3>`;
    } 
    else
        alert('Alerta: Ingrese solo números por favor');
}

function isnumber(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}