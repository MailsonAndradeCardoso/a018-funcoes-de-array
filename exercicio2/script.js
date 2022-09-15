/* # Exercício 2
Crie um array de números que contenha 8 números.
Depois disso, utilize este array para criar duas funcões de array `map()`:*/
const arrayDeNumeros = [2, 5, 8, 10, 15, 26, 28, 35]

/*1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;*/

const triplos = arrayDeNumeros.map((numeros) =>{
    return numeros * 3
} ) 
console.log(triplos)

 
/*2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const; */

const metades = arrayDeNumeros.map((numeros)=> numeros/2)
console.log(metades)