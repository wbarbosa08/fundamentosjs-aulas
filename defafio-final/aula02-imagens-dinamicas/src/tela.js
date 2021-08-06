const ID_CONTEUDO = "conteudo"
class Tela {
    static obterCodigoHtml(item) {
        return `
        <div class="col-md-3">
            <div class="card" style="width: 60%;">
             <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
            </div>
            <br />
        </div>
        `
    }
    static alterarConteudoHtml(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML=codigoHtml
    }
    static gerarStringHtmlPelaImagem(itens) {
        //para cada item da lista, vai executar a função obterCodigoHtml
        //ao final, vaiconcatenar tudo em uma unica string
        //muda de array para String
        return itens.map(Tela.obterCodigoHtml).join('')
    }
    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringHtmlPelaImagem(itens)
        Tela.alterarConteudoHtml(codigoHtml)
    }
}
