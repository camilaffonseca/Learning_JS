/*
Crie um programa que vai ler vários números e colocar em uma lista.
Depois disso, crie duas listas extras que vão conter apenas os valores
pares e os valores ímpares digitados, respectivamente. Ao final, mostre
o conteúdo das três listas geradas.
*/

const inputNumeros = [1, 6, 0, 34, 2, 107]

const numerosPares = []
const numerosImpares = []

inputNumeros.forEach(element => {
  if (element % 2 == 0) {
    numerosPares.push(element)
  } else {
    numerosImpares.push(element)
  }
})

console.log(`
Números: ${inputNumeros.join(' | ')}
Números Pares: ${numerosPares.join(' | ')}
Números Ímpares: ${numerosImpares.join(' | ')}
`)
