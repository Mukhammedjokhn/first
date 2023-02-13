console.log("js is started");

let arr = [20, 30, 15];

// 1 way
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 2 way
// for (let n of arr) {
//     console.log(n);
// }

// 3 way
// arr.forEach((k) => {
//     console.log(k);
// });

arr.push("end"); // arrayni oxiriga data qo'shish
arr.unshift("start"); // arrayni boshiga data qo'shish

arr.pop(); // arrayni oxiridan olib tashlaydi
arr.shift(); // arrayni boshidan olib tashlaydi

// console.log(arr);

let salary = [500, 150, 200];
let newSalary = [];

salary.forEach((n) => {
    newSalary.push(n + n * 0.1);
});

// console.log(newSalary);

let names = ["Abror", "Ibrohimjon", "Ismoil", "Jonibek"];
let mr = [];

names.forEach((t) => {
    if (t.toLowerCase().includes("jon")) {
        mr.push(t);
    } else {
        mr.push(t + "jon");
    }
});

console.log(mr);

let sonlar = [15, -6, 8, -3, 10];
let musbat = [];

sonlar.forEach((n) => {
    musbat.push(Math.abs(n));
});

console.log(musbat);
