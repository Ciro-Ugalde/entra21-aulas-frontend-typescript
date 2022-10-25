export class Vendedor {
    constructor(nome, idade, comissao, vendasRealizadas, calcularRendimento) {
        this.nome = nome;
        this.idade = idade;
        this.comissao = comissao;
        this.vendasRealizadas = vendasRealizadas;
        this.calcularRendimento;
    }
    apresentar() {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade}. Minha comissao é de ${this.comissao} e vendi o total de ${this.vendasRealizadas}, tive um rendimento de ${this.calcularRendimento}.`;
    }
    calcularRendimento() {
        let calculo;
        calculo = this.comissao * this.vendasRealizadas / 100;
        return calculo;
    }
}
// nome
// idade
// comissao
// vendasRealizadas
// métodos
// apresentar
// calcularRendimento
