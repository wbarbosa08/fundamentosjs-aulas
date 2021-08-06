    class JogoDaMemoria {
       //se mandar um obj = {Tela: 1, idade: 2, etc: 3}
       //vai ignorar o resto das propriedades e pegar somente
       // a Tela
        constructor ({tela, util}){
            this.tela = tela
            this.util = Util
            //caminho do arquivo sempre relativo
            // ao index.html
            this.princessIniciais = [
                {img: './arquivos/bela.png', nome: 'bela'},
                {img: './arquivos/ariel.png', nome: 'ariel'},
                {img: './arquivos/branca.png', nome: 'branca'},
                {img: './arquivos/jasmine.png', nome: 'jasmine'},
                {img: './arquivos/cinderela.png', nome: 'cinderela'},
                {img: './arquivos/elf.png', nome: 'elf'},
             

            ]
            this.iconePadrao = './arquivos/coroa.png'
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
            this.tela.configurarBotaoMostrarTudo(this.mostrarPrincesasEscondidas.bind(this))
        }
        async embaralhar(){
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
            this.tela.exibirCarregando()

            const idDoIntervalo = this.tela.iniciarContador()
            //vamos esperar 3 segundo para atualizar a tela
            await this.util.timeout(3000)
            this.tela.limparContador(idDoIntervalo)
            this.esconderPrincess(copias)
            this.tela.exibirCarregando(false)
            
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
            this.princesasEscondidas = princessOcultos
        }
        exibirPrincess(nomeDaPrincesa){
            //vamos procurar essa princesa pelo nome em princessIniciais
            //vamos obter somente a imagem dele
            const { img } = this.princessIniciais.find(({ nome }) => nomeDaPrincesa === nome)
            //vamos criar a funçao na tela, para exibir somente o heroi selecionado
            this.tela.exibirPrincess(nomeDaPrincesa, img) 
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
                        this.exibirPrincess(item.nome)
                        //como o padrao é true, nao precisa passar nada
                        this.tela.exibirMensagem()
                        //para a execução
                        return;
                    }
                    this.tela.exibirMensagem(false)
                    //fim do case
                    break;
            }


        }
        mostrarPrincesasEscondidas() {
            //vamos pegar todas as pricesas da tela 
            //e colocar seu respectivo valor correto
            const princesasEscondidas = this.princesasEscondidas
            for(const princess of princesasEscondidas) {
                const { img } = this.princessIniciais.find(item => item.nome === princess.nome)
                princess.img = img
            }
            this.tela.atualizarImagens(princesasEscondidas)
        }

        jogar() {
            this.embaralhar()
               

    }
}