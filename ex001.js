/*
Crie um programa onde o usuário digite uma expressão qualquer que use
parênteses. Seu aplicativo deverá analisar se a expressão passada está
com os parênteses abertos e fechados na ordem correta
*/

let pilhaParenteses = []
let input = '()'

const verificarResultado = lista => {
  if (lista.length) {
    console.log('Inválida')
  } else {
    console.log('Válida!')
  }
}

for (let c = 0; c < input.length; c++) {
  if (input[c] === '(') {
    pilhaParenteses.push(input[c])
  } else if (input[c] === ')') {
    if (pilhaParenteses.length) {
      pilhaParenteses.pop()

      const valid = c + 1 === input.length && verificarResultado(pilhaParenteses)
    } else {
      pilhaParenteses.push(input[c])
      verificarResultado(pilhaParenteses)
      break
    }
  }
}
