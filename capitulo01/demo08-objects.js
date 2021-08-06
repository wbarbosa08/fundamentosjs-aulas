const heroi = {
    nome: 'flash',
    idade: 100,
    sexo: 'masculino'

}

//console.log('nome', heroi.nome)
//console.log('idade', heroi['idade'])
//console.log('sexo', heroi.sexo)
//console.log('naoExiste', heroi.naoExiste)

//heroi.id = 0001
//console.log(heroi)

//saber chaves
//console.log(Object.keys(heroi))

//saber valores
//console.log(Object.values(heroi))

//juntar 02 objetos

const pessoa = {
    tamanho: '10 metros'
}
const novoObj = Object.assign(heroi, pessoa)

console.log(novoObj)
delete novoObj.nome

console.log(novoObj)

