const podeDirigir = true
if(podeDirigir) {
    console.log('Ela pode dirigir')
}

const saldoEmConta = 0  // Se alterar o 0 para 1 ele converte e não aparece o saldo
if(!saldoEmConta) { // ! é sinal de negação
    console.log('Não tem saldo')
}

const boolComString = 'ae hackerzao!!'

// força o valor a true ou false
// de acordo com a tabela
console.log('boolComString', !!boolComString)

// negação
console.log('negação', !boolComString)

// negação + forçar a boll
console.log(
    'nagação + forçar boll',
   ! (!!boolComString)
)