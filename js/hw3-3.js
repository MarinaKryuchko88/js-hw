// Задача 3-3
// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).Сотрудники и кол - во выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач".
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const findBestEmployee = function (employees) {
  "use strict";
  // Write code under this line

  const arrayValues = Object.values(employees);
  // console.log("array: ", arrayValues);
  let biggest = arrayValues[0];
  // console.log("array[0]: ", array[0]);
  for (let i = 1; i < arrayValues.length; i += 1) {
    if (arrayValues[i] > biggest) {
      // console.log("array[i]:", array[i]);
      biggest = arrayValues[i];
    }
  }
  // console.log(biggest);
  let bestEmployee = "";
  for (const key in employees) {
    // console.log(key);
    // console.log(employees[key]);
    if (employees[key] === biggest) {
      bestEmployee = key;
      // console.log(bestEmployee);
    }
  }
  // console.log(employees.values[biggest]);
  return bestEmployee;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// ("lorence");

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// ("lux");
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
