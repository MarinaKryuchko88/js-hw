// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.log(friends);    ВЫВОДИТ ИМЕНА ЭЛЕМЕНТОВ МАССИВА
// console.log(friends[1]);   ВЫВОДИТ ИМЯ ЭЛЕМЕНТА С ИНДЕКСОМ 1

// ЗАМЕНА ЭЛЕМЕНТА С ИНДЕКСОМ 1
// friends[1] = "Chelsy";
// console.log(friends);
// console.log(friends[1]);

// ДОБАВЛЕНИЕ ЭЛЕМЕНТА С ИНДЕКСОМ 4
// friends[4] = "Dik";
// console.log(friends.length);   ВЫВОДИТ ДЛИНУ МАССИВА С КОЛ-ВОМ ЭЛЕМЕНТОВ
// console.log(friends);     ВЫВОДИТ ИМЕНА ЭЛЕМЕНТОВ ВСЕГО МАССИВА
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ПЕРЕБОР МАССИВА И ВЫВОД ИНДЕКСОВ МАССИВА
// for (let i = 0; i < friends.length; i += 1) {
//   console.log(i);            ВЫВОДИТ ВСЕ ИНДЕКСЫ ЭЛЕМЕНТОВ МАССИВА
//   console.log(friends[i]);   ВЫВОДИТ ИМЕНА ЭЛЕМЕНТОВ МАССИВА
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ВЫВОДИТ ССОБЩЕНИЕ  НАЙДЕН ИЛИ НЕ НАЙДЕН ИСКОМЫЙ ДРУГ
// const nametoFind = "Poly";
// let message;

// for (const friend of friends) {
//   if (friend === nametoFind) {
//     message = "Your friend is find";
//     break;
//   } else {
//     message = "Your friend is not find";
//   }
// }
// console.log(message);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let message = "";
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };
// const keys = Object.keys(feedback); //const keys = ['good', 'neutral', 'bad'];
// // console.log(keys);
// for (const loy of keys) {
//   //   console.log(loy);
//   //   console.log(feedback[loy]);
//   message += `${loy}:${feedback[loy]}\n`;
// }
// console.log(message);
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// feedback.add = ":)";
// console.log(feedback);
// console.log(keys);

// for (const key in keys) {
//   console.log(key);
//   console.log(keys[key]);
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee.getWage());
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// const petya = {
//   name: "Petya",
//   showName() {
//     console.log(petya.name);
//   },
// };

// petya.showName();
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const euros = [29.76, 41.85, 46.5];
// console.log(euros);
// const sum = euros.reduce((total, amount) => total + amount);
// console.log(sum);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const objB = {
//   z: 112,
// };
// const objA = Object.create(objB);

// objA.x = 1;
// objA.y = 2;

// console.log(objA.hasOwnProperty());
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   let balance = customerCredits - totalPrice;
//   // Пиши код ниже этой строки
//   const totalPrice = pricePerDroid * orderedQuantity;

//   if (totalPrice > customerCredits) {
//     message = "Недостаточно средств на счету!";
//   } else {
//     message =
//       "Вы купили ${orderedQuantity} дроидов, на счету осталось ${balance} кредитов";
//   }
//   // Пиши код выше этой строки
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//   result = message.toLowerCase().includes("spam" || "sale") ? true : false;
//   // Пиши код выше этой строки
//   return result;
// }
// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("Get best sale offers now!"));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const numbers = [1, 2, 3];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }
// // Функциональный forEach
// numbers.forEach((num) => console.log(num));

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));
// console.log(numbers);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function slugify(title) {
//   // Пиши код ниже этой строки
//   let arrayFromString = title.split(" ");
//   let stringWithoutLowerCase = arrayFromString.join("-");
//   return stringWithoutLowerCase.toLowerCase();
//   // Пиши код выше этой строки
// }
// console.log(slugify("Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ"));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// НАЙТИ САМОЕ ДЛИННОЕ СЛОВО В СТРОКЕ:
// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   const arrayFromString = string.split(" ");
//   let element = arrayFromString[0];
//   for (let i = 1; i < arrayFromString.length; i += 1) {
//     if (arrayFromString[i].length > element.length) {
//       element = arrayFromString[i];
//     }
//   }
//   return element;
//   // Пиши код выше этой строки
// }
// console.log(
//   findLongestWord("The quick brown tretre fox jumped over the lazy dog")
// );
// ~~~~~~~~~~~~
// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   // Пиши код ниже этой строки
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Пиши код выше этой строки
//   return numbers;
// }
// console.log(createArrayOfNumbers(11, 12));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   const arrayNew = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     // console.log(array1[i]);
//     if (array2.includes(array1[i])) {
//       arrayNew.push(array1[i]);
//     }
//   }
//   return arrayNew;

//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки
//   const arrayEvenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       arrayEvenNumbers.push(i);
//     }
//   }
//   return arrayEvenNumbers;
//   // Пиши код выше этой строки
// }
// console.log(getEvenNumbers(6, 12));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log("Нашли число 3, делаем возврат, прерывая цикл и функцию");
//       return i;
//     }
//   }

//   // Этот console.log не выполнится
//   console.log("Лог после цикла в теле функции");
// }

// const result = fn();
// console.log("Лог после выхода из функции");
// console.log(`Результат выполнения функции ${result}`);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const users = [
  { name: "Mango", isActive: true },
  { name: "Poly", isActive: false },
  { name: "Ajax", isActive: true },
  { name: "Chelsey", isActive: false },
];

// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно true, то текущий элемент (user) будет записан в результирующий массив.
const activeUsers = users.filter((user) => user.isActive);
console.log(activeUsers);
