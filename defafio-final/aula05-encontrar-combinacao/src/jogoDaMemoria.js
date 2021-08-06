    class JogoDaMemoria {
       //se mandar um obj = {Tela: 1, idade: 2, etc: 3}
       //vai ignorar o resto das propriedades e pegar somente
       // a Tela
        constructor ({tela}){
            this.tela = tela
            //caminho do arquivo sempre relativo
            // ao index.html
            this.princessIniciais = [
                {img: './arquivos/bela.png', nome: 'bela'},
                {img: './arquivos/ariel.png', nome: 'ariel'},
                {img: './arquivos/branca.png', nome: 'branca'},
                {img: './arquivos/jasmine.png', nome: 'jasmine'},
                {img: './arquivos/flash.png', nome: 'flash'},
                {img: './arquivos/homenAranha.png', nome: 'homenAranha'},
                {img: './arquivos/batman.png', nome: 'batman'},
                {img: './arquivos/hellBoy.png', nome: 'hellBoy'}

            ]
            this.iconePadrao = './arquivos/padrao.png'
            this.princessEscondidos = []
            this.princessSelecionadas =[]
        }
        //para usar o this, não podemos usar static
        inicializar(){
            //vai pegar todas as funções da classe tela
            //coloca todas as princesas na tela
            this.tela.atualizarImagens(this.princessIniciais)
            //força a tela a usar a função THIS de jogo da memoria
            this.tela.configurarBotaoJogar(this.jogar.bind(this))
            this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
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
            //vamos esperar 1 segundo para atualizar a tela
            setTimeout(() => {
                this.esconderPrincess(copias)
            }, 1000);
        }
         
        esconderPrincess(princess){
            //vamos trocar as imagens de todos os herois existentes
            //pelo icone padrão
            //como fizemos no constructor, vamos extrair somente o necessário
            //usando a sintaxe ({chave: 1}) estamos falando que vamos retornar
            //o que tiver dentro do parenteses
            //quando não usamos : (exemplo do id), o JS entende que o nome
            //é o mesmo do valor. Ex. id: id, vira id,
            const princessOcultos = princess.map(({nome, id})=> ({
                id,
                nome,
                img: this.iconePadrao
            }))
            //atualizamos a tela com os herois ocultos
            this.tela.atualizarImagens(princessOcultos)
            //guardamos os herois para trabalhar com eles depois
            this.princessOcultos = princessOcultos
        }
        verificarSelecao( id, nome ) {
            const item = { id, nome }
            //vamos verificar a quantidade de princesas selecionadas
            //e tomar ação se escolheu certo o errado
            const princessSelecionadas = this.princessSelecionadas.length
            switch(princessSelecionadas) {
                case 0:
                    //adiciona a escolha na lista, esperando pela proxima clicada
                    this.princessSelecionadas.push(item)
                    break;
                
                case 1:
                    // se a quantidade de escolhidos for 1, signofoca que
                    // o usuario só pode escolher mais 1
                    //vamos obter o primeiro item da lista
                    const [ opcao1 ] = this.princessSelecionadas
                    //zerar lista para não selecionar mais que dois
                    this.princessSelecionadas = []
                    //conferimos se os nomes e ids batem conforme o esperado
                    if(opcao1.nome === item.nome &&
                    //aqui verificamos se os ids são diferentes
                    //para o usuario não clicar duas vezes no mesmo
                    opcao1.id !== item.id
                    ) {
                        alert('Combinaçao correta' + item.nome)
                        //para a execução
                        return;
                    }
                    alert('Combinação incorreta!')
                    //fim do case
                    break;
            }

        }

        jogar() {
            this.embaralhar()
               

    }
}