function exibir(num) {
    console.log("A operação resultou em: "+num);
}

function soma(a, b, callback) {
    var operacao = a + b;
    callback(operacao)
}

function multiplicacao(a, b, cb) {
    var operacao = a * b;
    cb(operacao)
}

soma(2, 2, exibir);

multiplicacao(2, 4, exibir);