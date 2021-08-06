const textoPar = 'Par'
const textoImpar = 'Impar'
// for(let index = 0; index <=10; index++) {
//     const decisão = index % 2===0 ? textoPar : textoImpar
//     console.log(`O número ${index} é ${decisão}`)
// }

const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() * 10), //parseInt = ignora a casa decimal
        nome: 'Zezinho',
        poder: 'veloz'
    },
    {
        id: parseInt(Math.random()),
        nome: 'Mariazinha',
        poder: 'super força'
    }
]
for(let index = 0; index < minhaListaDeTarefas.length; index++) { 
    const item = minhaListaDeTarefas[index]
    console.log(
        `
        id: ${item.id}
        nome: ${item.nome}
        super poder: ${item.poder}
        `
    )
}

//não precisa de contador
for(const index in minhaListaDeTarefas) {
    const item = minhaListaDeTarefas[index]
    console.log('Nome', item.nome) 
}

//não precisa usar indice

for(const item of minhaListaDeTarefas)
console.log('Nome**', item.nome, 'Id', item.id)