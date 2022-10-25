let nome = "Ciro Ugalde";
let idade = 33;
console.log(nome, idade);
$("<p>", {
    text: `Oi ${nome} você tem ${idade} anos`
}).appendTo("body");
function teste() {
    return 0;
}
function dados(nome, idade) {
    if (nome == "Ciro" && idade == 33) {
        return true;
    }
    else {
        return false;
    }
}
function somar(numA, numB) {
    return numA + numB;
}
console.log("O resultado foi ", somar(5, 2));
