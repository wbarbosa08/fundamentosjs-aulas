let frutaExistenteNoMercado = false
let temCpuSuficiente = true

//obter valores do terminal
const args = process.argv
const saldo = args [args.length -1]
//console.log('args', args)
//console.log('saldo', saldo)

if(isNaN(saldo)){
    console.log('valor inválido!!!')
}

let tipoCliente = "Premium"
if(saldo<9) {
    tipoCliente = "Basic"
}
else if(saldo>=10 && saldo <20) {
    tipoCliente = "Gold"
}
else {
    tipoCliente = null
}
if(!tipoCliente) {
    tipoCliente = "indefinido"
}
console.log('Tipo do cliente = ', tipoCliente)

const operadorOu = 1 > 2 || 2 < 1
const operadorE = 1 === 1 && 2!== 2
const operadorNot = !(1==1)

const idade = 18
const resultado = idade >= 18?
                        "Pode dirigir":
                        'Não pode dirigir'

console.log('resultado', resultado)                        