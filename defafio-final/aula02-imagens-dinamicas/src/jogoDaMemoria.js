    class JogoDaMemoria {
       //se mandar um obj = {Tela: 1, idade: 2, etc: 3}
       //vai ignorar o resto das propriedades e pegar somente
       // a Tela
        constructor ({tela}){
            this.tela = tela
            //caminho do arquivo sempre relativo
            // ao index.html
            this.princessIniciais = [
                {img: './arquivos/bela.png', name: 'bela'},
                {img: './arquivos/ariel.png', name: 'ariel'},
                {img: './arquivos/branca.png', name: 'branca'},
                {img: './arquivos/jasmine.png', name: 'jasmine'},

            ]
        }
        //para usar o this, não podemos usar static
        inicializar(){
            //vai pegar todas as funções da classe tela
            //coloca todas as princesas na tela
            this.tela.atualizarImagens(this.princessIniciais)


        }

    }