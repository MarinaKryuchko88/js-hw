// Задача 2-1
// Использование for
// Напиши функцию getItemsString(array), которая получает массив и возвращает строку, полученную из объединения (конкатенации) строк в формате ${номер элемента} - ${значение элемента}\n , где \n - спецсимвол переноса.

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// Используйте вспомогательную переменную result для добавления (конкатенации) строк внутри цикла for

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ЭТО ПРИМЕР ИЗ КОНСПЕКТА
// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }

// console.log("numbers: ", numbers); // ['label-0', 'label-1', 'label-2']

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ЭТО ПОПЫТКА-1 РЕШИТЬ ЗАДАЧУ
// let result = [];
// let string = "";
// const getItemsString = function (array) {
//   if (array === []) {
//     console.log("");
//   }
//   for (let i = 0; i < array.length; i += 1) {
//     string += `${i + 1} - ${array[i]}`;
//   }
//   result.push(string);

//   const done = result.join("\n");
//   return done;
// };

// console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
// // console.log(getItemsString([5, 10, 15]));
// // console.log(getItemsString([]));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ЭТО ПОПЫТКА-2 РЕШИТЬ ЗАДАЧУ
// const result = [];
// const getItemsString = function (array) {
//   "use strict";
//   // Write code under this line
//   if (array === []) {
//     console.log("");
//   }
//   for (let i = 0; i < array.length; i += 1) {
//     result.push(`${i + 1} - ${array[i]}`);
//   }
//   const string = result.join("\n");
//   return string;
// };

// console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ЭТО РЕШЕНИЕ ПРИНЯЛ БОТ В АВТОПРОВЕРКЕ!

const getItemsString = function (array) {
  "use strict";
  // Write code under this line
  let result = "";
  for (let i = 0; i < array.length; i += 1) {
    result += `${i + 1} - ${array[i]}\n`;
  }

  return result;
};

console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
