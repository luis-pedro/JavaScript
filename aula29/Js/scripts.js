//toLowerCase e toUpperCase

var frase = 'Esta é a frase que vamos manipular';

var fraseCaixaAlta = frase.toUpperCase();

console.log(frase.toLowerCase());

console.log(fraseCaixaAlta);

//trim

var nome = '                Luis                ';

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

//split

console.log(frase.split(" "));

var tags = 'PHP, JavaScript, HTML, CSS';

console.log(tags.split(", "));

//lastIndexOf

var frasedois = 'Eu quero a última palavra teste dessa frase de teste';

console.log(frasedois.indexOf('teste'));

console.log(frasedois.lastIndexOf('teste'));