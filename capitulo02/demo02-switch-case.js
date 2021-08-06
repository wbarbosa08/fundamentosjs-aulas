const readline = require('readline')
const terminal = readline.createInterface({
    //definir o modo de entrada via terminal
    input: process.stdin,
    //definir o modo de saida do terminal
    output: process.stdout
})

//texto do menu
const textoMenu = `
Olá, seja bem vindo ao sistema de media 
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de heróis
Digite 3 para acessar o menu de gerreiras
Digite 0 para sair
`

//console.log('Texto Menu', textoMenu)

//const opção = 2
//switch(opção){
//    case 1:
//        console.log('Pressionou opção 1')
//        break;
//    case 2: 
//       console.log('Pressionou opção 2 ')
//        break;
//    default: 
//        console.log('Opção inválida')
//        break
//}

//terminal.question('Qual o seu nome?', (msg) => {
//    console.log('Você escreveu',  msg )
//    terminal.close()
//})

const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    },
    Opção1: {
        texto: 'Submenu! Pressione enter para obter mais opções.',
        fn: Opção1
    }
}
function Opção1 (msg) { 
    console.log('Não tem mais opção!')
    terminal.close()
}
function menuInicial (msg) { 
    const opção = Number(msg)
    if(isNaN(opção)) {
        throw new Error ('Não é um número', msg)
    }
    switch(opção) {
        case 0: 
            console.log('Saindo...')
            terminal.close()
            break;
        case 1: 
            console.log('Menu inicial')
            terminal.question(
                questoes.Opção1.texto,
                questoes.Opção1.fn
            )
            break;
        default: 
            console.log('Opção inválida')
            terminal.close()
            break
    }
}
terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)