// yangi obyekt yaratish:
// let newObj1 = {}
// let newObj2 = new Object()
// console.log(newObj1, newObj2);

// let account = {
//     name: 'It park',
//     major: 'Frontend, bunker',
//     founded: 2019,
//    'full name': 'It park STAR lokal & GO global'
// }
// console.log(account.name);
// console.log(account['full name']);
// let key = 'major'
// console.log(account[key]);

// console.log(account.surname) => account objni ichiga surname qiymati qo'shiladi

// let account = {
//   name: "It park", // pastdagi qiymatni oladi
//   major: "Frontend, bunker",
//   name: "It park STAR lokal & GO global" // tepadan pastga qarab o'qigani uchun shu qiymatni oladi
// };
// Object.freeze(account); // objectni muzlatadi
// account.founded = 2022 // objda founded valuesi bo'lsa qiymatini o'zgartiradi bo'lmasa shuni create qiladi
// delete account.major // objning major qiymatini o'chirib tashlaydi

// console.log(account);

// let ac1 = {
//   name: "It park",
//   major: "Frontend, bunker",
// };// let ac2 = {
//   name: "It park",
//   major: "Frontend, bunker",
// };

// let ac3 = ac1
// console.log(ac1 == ac2); // false
// console.log(ac1 == ac3); // true
// console.log(ac1 === ac3); // true

// let name = "It park"
// let = major = "Frontend, bunker"
// let ac1 = {
//   name,
//   major,
// };
// // console.log(ac1);
// console.log('name' in ac1); // quyidagi o'zgaruvchi object ichida bor yo'qligini aniqlab beradi

// let account = {
//   name: "It park",
//   major: "Frontend, bunker",
//   founded: 2019,
//   students: 500
// };

// for (let i in account) console.log(i); // abjni itteratsiya qilish
