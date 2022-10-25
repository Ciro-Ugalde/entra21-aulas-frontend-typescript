export class Professor {
    constructor(nome, idade, disciplinas, valorHora, quantidadeHoras) {
        this.nome = nome;
        this.idade = idade;
        this.disciplinas = disciplinas;
        this.valorHora = valorHora;
        this.quantidadeHoras = quantidadeHoras;
    }
    apresentar() {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade}. Lecionei às matérias ${this.disciplinas.join(", ")}.`;
    }
}
