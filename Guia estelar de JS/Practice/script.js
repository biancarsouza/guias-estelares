let weight;

console.log(typeof weight);

/*
    let age = 25;
    let name = 'Fernanda';
    let stars = 6.3;
    let isSubscribed = true;
*/

const student1 = {

    age: 39,
    name: 'Fernanda',
    weight: 66.3,
    isSubscribed: true

}

let student2 = {

    age: 36,
    name: 'Fabiana',
    weight: 62.7,
    isSubscribed: true

}

console.log(typeof student1);
console.log(`${student1.name} de idade ${student1.age} pesa ${student1.weight} kg.`);

let students = [

    student1, student2

]

console.log(students);