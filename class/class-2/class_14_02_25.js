class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.paws = 4; 
    }

    sound() {
        console.log(`Animal sound by ${this.name}`);
        return 0;
    }
}

const obj1 = new Animal("Perrito", 10);
obj1.sound()

class Dog extends Animal {

}

const perrito = new Dog("Lucas", 20);
console.dir(perrito)
perrito.sound();


const {nameDog, ageDog } = perrito;


console.log(nameDog, ageDog);

const perrito2 = perrito
console.dir(perrito)
console.dir(perrito2)
perrito.name = "Tarzán"
console.log(perrito);
console.log(perrito2)