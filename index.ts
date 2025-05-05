// Написати цикли, які роблять наступне:

//1 Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

//2 Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

//3 Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

//4 Дане ціле число. З'ясувати, чи є воно простим (простим називається число,
// більше 1, які не мають інших дільників крім 1 і себе).

//5 Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

// # 1
// let count: number = 20;
// for(count; count <= 30; count+=0.5){
//   console.log(`count : ${count}`)
// }




// # 2
// let dollar: number = 41
// console.log(`one dollar : ${dollar} UAH`);

// for(let x = 10; x <= 100; x+=10) {
//   let dollars = dollar * x
//   console.log(`${x} $ dollars = ${dollars} UAH`);
// }




// # 3
// const num: number = Number(prompt('введіть квадрат чисел не більше 100: '))

// if (isNaN(num) || num <= 0) {
//   alert(`ви відмінили або ввели пусте поле`)
// }

// if (num <= 100) {
//   for(let sqrtNumber: number = 1; sqrtNumber <= num; sqrtNumber++) {
//     if (sqrtNumber ** 2 <= num){
//       console.log(`число : ${sqrtNumber}`);
//     } else {
//       break;
//     }
//   }

//   num && alert('результат дивимося у консолі.');

// } else {
//   alert(`ви ввели число : ${num} а це число більше 100`);
// }




// # 4
// alert("З'ясувати, чи є число простим");
// let num: number;
// let trueNumber: boolean = true;

// do {
//   num = Number(prompt("введіть число :"));

//   if (num === 1) alert("число 1 не є простим!");
//   else if (isNaN(num)) alert("ви ввели літери а потрібно ввести число");
// } while (isNaN(num) || num === 1);

// if (!num) alert(`ви натиснули кнопку відміни! або ввели пусте поле!`);

// if (num > 1) {
//   for (let i: number = 2; i < num; i++) {
//     if (num % i === 0) {
//       trueNumber = false;
//       break;
//     }
//   }

//   if (trueNumber) {
//     alert(`число: ${num} Просте число!`);
//   } else {
//     alert(`число: ${num} НЕ просте число`);
//   }
// }



// # 5
let num: number = Number(prompt('зведення числа у 3 степінь'));
let sqrtNumber = false;

for (let i:number = 0; i < num; i++) {

  if (3 ** i === num) {
    sqrtNumber = true
    alert(`число ${num} = (3 ** ${i}) `)
    break;
  }
}

if (!sqrtNumber) {
  alert(` це число ${num} не являється у 3 степені`);
}