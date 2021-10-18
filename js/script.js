"use strict"; //деректива для строго режима

//use strict позволяет строго ограничевать работу старых функций js, которые уже не используются

let number = 5;
const leftBorderWidth = 1;

number = 10;

console.log(leftBorderWidth);

const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);

//прямых констант в js не бывает

console.log(people); //всплытие переменных
var people = 'Ivan';

//переменные let и const видны только в блоке кода ограниченного фигурными скобками
{
    let result = 50;
}
console.log(result);