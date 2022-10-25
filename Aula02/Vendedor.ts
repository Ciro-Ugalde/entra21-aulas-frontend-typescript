export class Vendedor {
    public nome: string
    public idade: number
    public comissao: number
    public vendasRealizadas: number

    constructor(nome: string, idade: number, comissao: number, vendasRealizadas: number, calcularRendimento: number) {
        this.nome = nome
        this.idade = idade
        this.comissao = comissao
        this.vendasRealizadas = vendasRealizadas
        this.calcularRendimento
    }

    public apresentar(): string {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade}. Minha comissao é de ${this.comissao} e vendi o total de ${this.vendasRealizadas}, tive um rendimento de ${this.calcularRendimento}.`
    }

    public calcularRendimento():number{
        let calculo: number
        calculo = this.comissao * this.vendasRealizadas / 100
        return calculo
    }
}





// nome
// idade
// comissao
// vendasRealizadas
// métodos
// apresentar
// calcularRendimento