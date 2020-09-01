/*
Crie um programa onde o usuário digite uma expressão qualquer que use
parênteses. Seu aplicativo deverá analisar se a expressão passada está
com os parênteses abertos e fechados na ordem correta
*/


let lista_arm = []

let input = '()'

const verificarResultado = lista => {
    if(lista.length){
        console.log('Inválida')
    } else {
        console.log('Válida!')
    }
}

for(let c = 0; c < input.length; c++){
    if (input[c] == '('){
        lista_arm.push(input[c])
    } else if (input[c] == ')'){
        if(lista_arm.length){
            lista_arm.pop()
            if(c + 1 === input.length) {
                verificarResultado(lista_arm)
            }
        } else {
            lista_arm.push(input[c])
            verificarResultado(lista_arm)
            break
        }
    }
}


lista.sort()