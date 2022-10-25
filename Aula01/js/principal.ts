let nome: string = "Ciro Ugalde"
let idade: number = 33;

console.log(nome, idade);

$("<p>", {
    text: `Oi ${nome} você tem ${idade} anos`
}).appendTo("body")

function teste(): number {
    return 0;
}

function dados(nome: string, idade: number): boolean {
    if (nome == "Ciro" && idade == 33) {
        return true;
    } else {
        return false;
    }
}

function somar(numA:number, numB:number): number{
    return numA+numB
}

console.log("O resultado foi ", somar(5,2));


