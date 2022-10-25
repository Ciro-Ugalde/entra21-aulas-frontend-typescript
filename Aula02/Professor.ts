export class Professor {
    public nome: string
    public idade: number
    public disciplinas: Array<string>
    private valorHora: number
    private quantidadeHoras: number

    constructor(nome: string, idade: number, disciplinas: Array<string>, valorHora: number, quantidadeHoras: number) {
        this.nome = nome
        this.idade = idade
        this.disciplinas = disciplinas
        this.valorHora = valorHora
        this.quantidadeHoras = quantidadeHoras
    }

    public apresentar(): string {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade}. Lecionei às matérias ${this.disciplinas.join(", ")}.`

    }
}

