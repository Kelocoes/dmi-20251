let i = 0
while(i < 10) {
    console.log(i)
    var luisa = 10;
    i+= 2 
}

console.log(luisa)

function saludar(mensajito, nombre, apellido, edad){
    console.log(mensajito + nombre + " " + apellido);
}

saludar("Hola mundo!", "Kevin", "Rodriguez");

let luisa2 = `Luisa`
console.log(`Hola ${luisa2} adasd dsa  asdassa`)

console.log([1,2,3,4].concat([5,6,7,8]))

const resultado = 1 === 1 ? "Es verdad" : "Es falso"
console.log(resultado)

switch(1) {
    case 1:
        console.log("Es uno")
        break
    default:
        console.log("No es uno")
        break
}

for(let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        continue;
    }

    console.log("Llegué aquí")
}