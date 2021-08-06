class Heroi{
    atacar(){
        console.log('atacou')
    }
    defender(){
        console.log('defendeu')
    }
}

const heroi = new Heroi()
heroi.atacar()
heroi.defender()

//usando construtor

class Heroi2{
    constructor ( nome, idade, name2){
        this.nome = nome
        this.idade = idade 
        this.name2 = name2   
    }
    defender(){
        console.log(
            `o ${this.name2} defendeu!!`
        )
    }

    atacar(){ 
        console.log(
            `o ${this.nome} atacou!!`
        )
    }
}
const heroi2 = new Heroi2(
    'Flash', 80 , 'hulk'
)
heroi2.atacar()
heroi2.defender()

class Heroi3 {
    static obterAnoNascimento(idade) {
        return 2021 - idade
    }
}
const anoDeNascimento = Heroi3.obterAnoNascimento(46)
console.log(
    `O ano do nasciemnto do heroi é ${anoDeNascimento}`
)