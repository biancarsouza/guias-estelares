// Comentário em linha.

/* Comentário
em mais de uma linha. */

console.log("Aqui vem uma string.");
console.log('Outra string.');;
console.log(`A crase possibilita realizar expressões dentro de um string, como essa: ${1 + 1}.`);

// Criando um objeto:

console.log({

    nome: "Bianca",
    idade: 17

})

// Criando uma variável.

var clima = "Quente";
let clima2 = "Frio";
const clima3 = "Ameno"; // A const, diferente do let e do var, não pode mudar no meio do programa.

console.log(clima);
console.log(clima2);
console.log(clima3);

let teste = true;

console.log(typeof teste);

// var dentro do scope funciona fora dele.
// let só funciona dentro do scope.

{
    var x = 0;
    console.log(x);
}

console.log(x);

{
    let y = 1;
    console.log(y);
}

console.log(y);

{
    const z = 1;
    console.log(z);
}

console.log(z);

// A diferença entre let e const, nesses casos, é que o let você pode declarar fora e mudar o valor dentro do scope que fora vai ler o valor que foi atualizado, enquanto no const você não pode atualizar o valor nem fora.



var name;
name = "Bianca";
console.log(typeof name);

let age, isHuman;
isHuman = true;
age = 17;

console.log(name, isHuman, age);

if (isHuman == true){
    console.log('A ' + name + ' tem ' + age + ' anos.');
    console.log(`A ${name} tem ${age} anos.`)
}

else {
    console.log('Não é humano.')
}



// Segunda parte.

const pessoa = {

    nome: 'John',
    idade: 30,
    peso: 88.6,
    isAdmin: true

}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos.`);

const animais = [

    'Leão', 'Macaco', 
    {
        nome: 'Gato',
        idade: 3
    }

]

console.log(animais[0]);
console.log(animais.length);
console.log(`${animais[2].nome} tem ${animais[2].idade} anos.`)