let n1;
let n2;

// Pascal Case = NomeVariavel.
// Camel Case = nomeVariavel.
// Kebab Case = nome-variavel (tanto faz como começa, o importante é separar por hífen).
// Snake Case = nome_variavel (tanto faz como começa, o importante é separar por inderline).

function Soma (){
    console.log( 5 + 12 );
}
Soma(); //Função simples que não recebe parâmetros.

function SomaComParametros (v1, v2){
    let resultado = v1 + v2;
    return resultado;
}


console.log(SomaComParametros(5, 6));

