// Задача 2-3
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
function findLongestWord(string = "") {
  // Write code under this line
  let array = string.split(" ");
  let longestWord = array[0].length;
  let nameLongestWord = "";
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length >= longestWord) {
      longestWord = array[i].length;
      nameLongestWord = array[i];
    }
  }
  return nameLongestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ЧЕРНОВИК РЕШЕНИЯ
// let array = string.split(" ");
// console.log(array);

// let longestWord = array[0].length;
// console.log(longestWord);

// let nameLongestWord = " ";
// for (let i = 0; i < array.length; i += 1) {
//   if (array[i].length >= longestWord) {
//     longestWord = array[i].length;
//     nameLongestWord = array[i];
//   }
// }
// console.log(nameLongestWord);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// РЕШЕНИЕ ДРУГОГО СТУДЕНТА:
// function findLongestWord(string = "") {
//   // Write code under this line
//   return string.split(" ").reduce((a, b) => (b.length > a.length ? b : a));
// }
// console.log(findLongestWord('Google do a roll'));
