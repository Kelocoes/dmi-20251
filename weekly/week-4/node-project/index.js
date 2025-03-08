import dayjs from "dayjs";

console.info("This is my first node project!");

var hola = "Hola Mundo";

console.log(hola);

var hello;

console.log(dayjs().format());
console.log(dayjs().isBefore(dayjs().add(1, "day")));