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
                {img: './arquivos/flash.png', name: 'flash'},
                {img: './arquivos/homenAranha.png', name: 'homenAranha'},
                {img: './arquivos/batman.png', name: 'batman'},
                {img: './arquivos/hellBoy.png', name: 'hellBoy'}

            ]
        }
        //para usar o this, não podemos usar static
        inicializar(){
            //vai pegar todas as funções da classe tela
            //coloca todas as princesas na tela
            this.tela.atualizarImagens(this.princessIniciais)
            //força a tela a usar a função THIS de jogo da memoria
            this.tela.configurarBotaoJogar(this.jogar.bind(this))
        }
        embaralhar(){
            const copias = this.princessIniciais
            //duplicar os itens
            .concat(this.princessIniciais)
            //entrar em cada item e criar um id aleatorio
            .map(item=> {
                return Object.assign({}, item, {id: Math.random() / 0.5})
            })
            //ordenar aleatoriamente
            .sort(() => Math.random() - 0.5)

            this.tela.atualizarImagens(copias)
        }
        jogar(){
            this.embaralhar()
        }

    }