const lista = []
const minhaListaDeTarefas = [
    'mandar email',
     'colocar comida para o dog',
      'limpar o quarto'
]
// verificar índice na lista

//console.log(minhaListaDeTarefas[0])
//console.log(minhaListaDeTarefas[1])
//console.log(minhaListaDeTarefas[4])

// quantidade de itens no array

//console.log(minhaListaDeTarefas.length)

//adicionar um item

minhaListaDeTarefas.push('formatar computador')
//console.log(minhaListaDeTarefas)

//remover ultimo da lista

//const ultimo = minhaListaDeTarefas.pop()
//console.log(ultimo, minhaListaDeTarefas)

//remover primeiro da lista

//const primeiro = minhaListaDeTarefas.shift()
//console.log(primeiro, minhaListaDeTarefas)

//remover um item especifico a partir de um indice

//console.log(minhaListaDeTarefas[2])
//qual item de inicio 
//quantos remover

//minhaListaDeTarefas.splice(2, 1)
//console.log(minhaListaDeTarefas)

const itens = [
    1, 'computador', 0.22
]

//verificar tipo de array
//console.log(typeof(itens))

//verificar se array de forma correta
//console.log(Array.isArray(itens))

//ordenar

//const numeros = ['b', 'e', 's', 'z']
//console.log(numeros.sort())

//juntar dois arrays

//const novo = itens.concat([1 ,2 ,3])
//console.log(novo)

//juntar arrays em uma string

//console.log(itens.join(','))

//verificar indice do item

const index = itens.indexOf('computador')
//console.log(index)
console.log(itens[index])