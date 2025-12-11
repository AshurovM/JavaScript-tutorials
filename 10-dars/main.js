// let ar = [1, 2323, 'webbrain', function test() {}, null, undefined, true, false]

// console.log(ar[6]);
// console.log(ar.length);
// console.log(ar[ar.length - 1]); // array eng oxirgi elementini aniqlab olish
// console.log(ar[ar.length - 2]);
// console.log(ar.at(-2)); // indexni oxiridan boshlab chiqarish

// let ar = new Array()
// let arr = []

// console.log(ar); //
// console.log(arr); // ikkalasi ham array qaytaradi

// arr[100] = 1;
// console.log(arr.length); // 100ta bo'sh index yaratadi va 101 bo'ladi

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];

// console.log(arr1.concat(arr2)); // ikkita arrayni bir biriga qo'shib beradi

// console.log(arr1 + arr2);
// console.log(arr1.toString()); // arrni string qilib beradi
// console.log(arr1.join('/')); // malumotlar o'rtasida / qo'shib beradi

// console.log(typeof {}); // obyekt qaytaradi
// console.log(typeof []); // obyekt qaytaradi

// console.log(Array.isArray([])); // true array yoki arraymasligini aniqlab beradi

// let arr = [];

// console.log(arr == 0); // true bo'sh array nolga teng
// console.log(arr == '0'); // false

// let arr = ['Abdulloh', 'Muhammad', 'Sardor', 'Ozodbek']

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// for (value of arr) {
//     console.log(value); // arrayni itteratsiya qilish
// } // bundan faqat value keladi

// for (index in arr) {
//     console.log(index);
// } // bundan faqat index keladi

// Array Methods

// let arr = [1, 2, 3, 4]

// arr.push(5) // array oxiriga malumot qo'shish
// arr.push(5, 6, 7, 8) // bu tarzda ham qo'shsa bo'ladi
// arr.pop() // array oxiridan malumot olib tashlash
// arr.unshift(0) // array boshiga ma'lumot qo'shadi
// arr.shift()  // array boshidan malumot olib tashlaydi
// arr.splice(0, 2) // 0chi indexdan 2chi indexgacha kesib tashlaydi
// arr.splice(2, 0, 5) // 2chi indexdan keyin hech narsani o'chirmaydi va 5ni qo'shib qo'yadi
// console.log(arr);

// let arr1 = [1, 2, 3, 4];
// arr1.slice(0, 2);
// console.log(arr1.slice(0, 2)); // splice bilan bir xil. Bu maumotni kesib olmaydi va ikkinchi son indexni ko'rsatadi

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// console.log(arr1.indexOf(3)); // array ichida shu ma'lumot bo'lsa indexni bo'lmasa -1 chiqaradi
// console.log(arr1.lastIndexOf(3)); // oxiridan boshlab sanaydi

// let str = '1, 2, 34, 4, 5'
// console.log(str.split(',')); // vergulni ko'rishi bilan yangi array yasab oldi

// let arr = [1, 2, 3, 4];

// arr.reverse() // teskarisini chiqarib beradi
// console.log(arr.includes(3)); malumot array ichida bor true yoki yo'g' false qaytaradi