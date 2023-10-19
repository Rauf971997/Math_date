// Задание 1

/* const arr = [1, 2, 3, 4, 5, 6, 7, 8];

if (arr.length === 0) {
  console.log("Массив пуст");
} else {
  const index = Math.floor(Math.random() * arr.length);
  const value = arr[index];
  console.log("Случайное значение из массива:", value);
} */

// Задание 2

/* const numbers = [200,600,100,900,10,2]; 

if (numbers.length === 0) {
  console.log(-Infinity);
} 

else {
  let maxNumber = numbers[0]; 
 for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }

  console.log("Максимальное число из массива:", maxNumber);
} */



// Задание 3

/* 
 const length = 7; 
const characters = 'RaufjkSzdfghjkkl';
let strRan = '';

for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
   strRan += characters[randomIndex];
}

console.log("Случайная строка:", strRan);   */


// Задание 4
/* const year = Number(prompt("Введите год:"));
const month = Number(prompt("Введите месяц (1-12):"));

const monthNames = [
  "Январь", "Февраль", "Март", "Апрель",
  "Май", "Июнь", "Июль", "Август",
  "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

if (typeof year === 'number' && typeof month === 'number' && month >= 1 && month <= 12) {
  const monthName = monthNames[month - 1];
  const daysInMonth = new Date(year, month,0).getDate();
  console.log(`В ${year} году в месяце ${monthName} ${daysInMonth} дней.`);
} else {
  console.log("Не правильно ввели год или месяц");
}
 */







