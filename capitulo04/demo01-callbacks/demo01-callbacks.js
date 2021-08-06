const fs = require('fs') //fs = file system
// fs.readFile('./arq01.txt', (error, resposta)=>{
//     if(error) {
//         console.error('Deu ruim!', error.stack)
//         return;
//     }
//     console.log('resposta', resposta.toString())
// })
fs.readFile('./arq01.txt', (errorArq01, respostaArq01)=>{
    if(errorArq01) {
        console.error('Deu ruim Arq01!', errorArq01)
        return;
    }
    fs.readFile('./arq02.txt', (errorArq02, respostaArq02) =>{
        if(errorArq02) {
            console.error('Deu ruim Arq02', errorArq02)
            return;
        }
        fs.readFile('./arq03.txt', (errorArq03, respostaArq03)=>{
            if(errorArq03) { 
                console.error('Deu ruim Arq03!'. errorArq03)
                return;
            }
            const conteudo = `${respostaArq01}\n${respostaArq02}\n${respostaArq03}`
            console.log(conteudo) //fs.writeFile = Escrever arquivo
            fs.writeFile('./final.txt', conteudo, (errorWrite, respostaWrite )=> {
                if(errorWrite) {
                    console.error('Deu ruim na gravação!', errorWrite)
                    return
                }
                console.log('Arquivo salvo com sucesso!')
            })
        })
    })
})