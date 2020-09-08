/*
Crie um programa onde o usuário digite uma expressão qualquer que use
parênteses. Seu aplicativo deverá analisar se a expressão passada está
com os parênteses abertos e fechados na ordem correta
*/

const pilhaParenteses = []
const input = '()'

const verificarResultado = lista => {
  const resultado = lista.length ? 'Inválida' : 'Válida'
  console.log(resultado)
}

for (let c = 0; c < input.length; c++) {
  switch (input[c]) {
    case '(':
      pilhaParenteses.push(input[c])
      break

    case ')':
      if (pilhaParenteses.length) {
        pilhaParenteses.pop()
        c + 1 === input.length && verificarResultado(pilhaParenteses)
      } else {
        pilhaParenteses.push(input[c])
        verificarResultado(pilhaParenteses)
        break
      }
    default:
      break
  }
}
