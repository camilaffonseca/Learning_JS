/*
Crie um programa que vai ler vários números e colocar em uma lista.
Depois disso, mostre:
A) Quantos números foram digitados.
B) A lista de valores, ordenada de forma decrescente.
C) Se o valor 5 foi digitado e está ou não na lista.
*/

const input = [2, 5, 1, 0, 27, 8, 14]

const ordenador = (a, b) => {
    return b - a
}

const listaOrdenada = input.slice().sort(ordenador)

const verificar5 = input.includes(5) ? 'está na lista' : 'não está na lista'

console.log(
    `Foram digitados ${input.length} números:`,
    ...listaOrdenada,
    `O valor 5 ${verificar5}`
)
