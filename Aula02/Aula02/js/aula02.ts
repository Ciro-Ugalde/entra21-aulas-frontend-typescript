import { Professor } from './../../Professor.js';
import { Aluno } from "../../Aluno.js";
import { Animal } from "../../Animal.js";
import { Vendedor } from '../../Vendedor.js';

console.log("Aula 02 funcionou");

let animal1:Animal=new Animal("drosofila", "mosca", 0.5, ["ar","lixo","comida"])

console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);


animal1.nome="cachorro"
animal1.peso=5.5
animal1.habitat[0]="onde quiser"
animal1.setEspecie="lupuscaninos"

console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);

let animal2:Animal=new Animal("Bradypus variegatus", "bicho-preguiça", 5.3, ["florestas"])

console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat[0]);
console.log(animal2.getEspecie);

animal2.nome="gatinho"
animal2.peso=3.2
animal1.habitat[0]="dentro de casa"
animal2.setEspecie="Felis catus"

console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat[0]);
console.log(animal2.getEspecie);



let ciro: Aluno = new Aluno("Ciro Ugalde",33, [9,10,8.5,8])
console.log(ciro);
console.log(ciro.nome);
console.log(ciro.idade);
console.log(ciro.calcularMedia());
console.log(ciro.apresentar());

let daniel: Aluno = new Aluno("Daniel Damasco", 28, [7,10,10,9.5])
console.log(daniel);
console.log(daniel.nome);
console.log(daniel.idade);
console.log(daniel.calcularMedia());
console.log(daniel.apresentar());

let professor: Professor = new Professor("Oliota", 33, ["Java", "JavaScript", "TypeScript"], 120, 300);
console.log(professor);
console.log(professor.nome);
console.log(professor.idade);
console.log(professor.disciplinas);
console.log(professor.apresentar());

let vendedor: Vendedor = new Vendedor("Manito", 25, 20, 15000, )
console.log(vendedor);
console.log(vendedor.nome);
console.log(vendedor.idade);
console.log(vendedor.comissao);
console.log(vendedor.apresentar);
console.log(vendedor.calcularRendimento);





























