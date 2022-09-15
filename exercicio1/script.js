const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//# Exercício 1

//Crie duas funcões que recebem como parâmetro um objeto.


//1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
    function objetoMaiusculo(objeto){
        objeto.nome = objeto.nome.toUpperCase()
        objeto.profissao = objeto.profissao.toUpperCase()
        objeto.username = objeto.username.toUpperCase()
        objeto.senha = objeto.senha.toUpperCase()
        return objeto
            
        }
        
        console.log(objetoMaiusculo(objeto))


//2. A segunda deve retornar os valores do objeto como texto corrido.

function verValores(objeto){
    let texto = "";
    for(let i in objeto){
        texto += `${objeto[i]}`;
    }
    return texto
}
    console.log(verValores(objeto))
    

//3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.
//Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
//Repita o processo para a funcão 2


function paraRetornar  (objeto, funcao){
    console.log(funcao(objeto))
}

paraRetornar (objeto, objetoMaiusculo)