// function sayHi() {
//     console.log(`Hi ${user.name}`);
// }
// let user = {
//     name: 'It park',
//     sayHi() {
//         console.log(`Hi ${user.name}`)
//         // console.log(`Hi ${this.name}`)
//     }
//     // sayHi: function() {
//     //     `Hi ${this.name}`;
//     // }
//     // sayHi: sayHi,
// }
// user.sayHi()
// let usr = user
// console.log(usr);

// function getName() {
//     this.name = 'webbrain'
//     console.log(this);
// }
// console.log(new getName().name) // name ni tashqarida ishlatish uchun

// let id1 = Symbol("id");
// let id2 = Symbol("id");

// let obj = {
//     [id1]: 'It park'
// }

// console.log(obj[id1]);

// destruction----------------------
// let obj = {
//     name: 'It park',
//     title: 'It center',
//     age: '34567',
//     child: {
//         childName: 'testing name',
//     }
// }
// const {name: newName, title, child:{childName}} = obj;
// console.log(obj.age);
// console.log(newName);
