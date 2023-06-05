function log(param){
    console.log(param);
}
class Personagem {
    constructor(nome){
        this.nome = this.capitalize(nome)
        this.vida = 10
        this.ataque = 2
    }

    combate() {
        return `total do ataque ${this.ataque}`
    }
    capitalize(string){
        return `${string.charAt(0).toUpperCase()}${string.slice(1).toLowerCase()}`
    }
}

class Player extends Personagem{
    constructor(nome, classe){
        super(nome)
        this.classe = classe
        this.moedas = 1200
    }
}
var goblin = new Personagem("goBLin")
log(goblin);
var jogador = new Player("micael", "Mago")
log(jogador);
