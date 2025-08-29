// Para comentar se utiliza o atalho CTRL + ;
var texto = "Olá"; //aspas duplas serve para String
let texto2 = "Mundo"; //ponto e vírgula é opcional 
const texto3 = '!'; //aspas simples serve para String

console.log(texto, texto2 + texto3); //vírgula concatena com espaço e sinal de + concatena sem espaço (Tudo junto).

texto = "Hello";

let msg = `${texto} ${texto2} ${texto3}`; //Use a crase para concatenar, famoso Template String
console.log(msg);

// texto3 = "teste"
// O exemplo acima mostra que é impossível reatribuir um novo valor a uma constante.

let numero = 34;
console.log(typeof numero);//O typeof mostra o tipo da variável

let obj = { nome: "Lucas", idade: 26 }; //Obs.: Nunca deixe a sua linha de código com mais de 80 caracteres

console.log(`Nome da pessoa: ${obj.nome}, e a sua idade é ${obj.idade}`);

console.log(typeof obj);
// Objeto é sempre um elemento chave/valor

let arr = ['Lucas', 'F.', 'N.', 'Veloso'];

console.log(arr); //No Javascript um array é tratado como um Objeto
console.log(arr[0]);
console.log(typeof arr);