// While-----------------------
// let i = 3;
// while (i) {
//   console.log("hey");
//   i++;
// }
// do while--------------------
// let i = 3;
// do {
//     console.log('hey');
//     i--;
// } while (i == 0)

// function => bir marta kod yozib keyin undan bir necha marta foydalanish uchun yizilgan kod
// Hoisting => function va variablelarni yuqorida chaqirish
// function 3-xil usulda yaratiladi

// function decloration => hosting xususiyatiga ega:
// name()
// function getAvr() {
//     console.log('hello');
// }

// function expression:
// let getAvr = function() {
//     console.log('hello');
// }
// getAvr();

// arrow function:
// let getAvr = () => {}

// Variabe shadow - global va local o'zgaruvchilar bir xil bo'lishi:
// let name = 'webbrain'
// const test = () => {
//     name = 'academy'
//     console.log(name);
// }
// console.log(name);
// test()

// const telegram = (name, surname = '') => {
//     if (surname) console.log(name, surname);
//     else console.log(name);
//     surname ? console.log(name, surname) : console.log(name)
// }

// functiondan qaytgan qiymat bir nechta maqsadda bajarilsa "return" qo'yiladi
// return - natijani funksiyadan tashqariga chiqarish:
// const getNumber = (a) => {
//     return a
// }
// getNumber(6)