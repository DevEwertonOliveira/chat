function Cripto(texto) {
    let aux = ''
    let txtCifrado = ''
    for (let i = 0; i < texto.length; i++) {
        aux = ''
        let code = texto.charCodeAt(i) + 3
        c = aux + code
        c = String.fromCharCode(c)
        txtCifrado += c;
    }
    return console.log(txtCifrado);
}

module.exports = Cripto

