let variavelSemInicializacao // variável sem inicializacao é do tipo underfined
console.log(
    variavelSemInicializacao,
    typeof(variavelSemInicializacao)
)

variavelSemInicializacao = "Hello world" // Quando recebe valor, nesse caso string

console.log(
    variavelSemInicializacao,
    typeof(variavelSemInicializacao)
)

variavelSemInicializacao = null
console.log(
    variavelSemInicializacao,
    typeof(variavelSemInicializacao)
)