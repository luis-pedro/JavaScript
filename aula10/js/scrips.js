var objeto = {
    nome: "Luis",
    idade: 16,
    profissao: "Estudante",
    estaTraabalhando: true,
}

console.log(objeto);
console.log(typeof objeto);

console.log(objeto.nome);
console.log(objeto.idade);
console.log(objeto.profissao);

console.log("O meu nome é " + objeto.nome);

objeto.nome = "Pedro";

console.log(objeto);

objeto.graduacao = true;