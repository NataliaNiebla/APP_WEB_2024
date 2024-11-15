function conversion() {
    const pesos = document.getElementById('pesos').value;
    const tipo = document.getElementById('tipo').value;
    let resultado = 0;
    if (tipo === 'dolares') {
        resultado = pesos * 20.01; 
    } else if (tipo === 'euros') {

        resultado = pesos * 21.69; 
    }
    alert(`El resultado es: ${resultado}`)
}