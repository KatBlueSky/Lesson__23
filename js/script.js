"use strict";
// ----------ДОМАШКА по Операторам
// Вариант 1
//console.log('35' + - "22");
// Не вірно, буде 35-22

// Вариант 2
//console.log('35' * "22");
// Верно

// Вариант 3
//console.log('558' > 22++);
//let addUser = 22; addUser++; console.log(addUser);
// Помилка

// Вариант 4
// let userCounter = 0;
// let newUsers = userCounter++;
// console.log(newUsers);
// // Не верно, відповідь 0

// Вариант 5
//console.log(!false && 11 || 18 && !'');
// // ответ 11

// Вариант 6
//let name = 0;
//console.log(name ?? "Без имени");
// 0

// ===========Домашка Лекция If ELSE ELSE if
// Какой из вариантов вернет в консольслово истина
//Вариант 1
//if (1 === "1") {
//	console.log('Истина!');
//} else {
//	console.log('Ложь!');
//}
// ответ Ложь! НЕВЕРНО!!!!

//Вариант 2
//if (5 == "5") {
//console.log('Истина!');
//} else {
//	console.log('Ложь!');
//}
// ответ Ложь! НЕВЕРНО!!!!

//Вариант 3
//let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
//console.log(message);
// ответ Ложь! НЕВЕРНО!!!!

//Вариант 4
//if (0) {
//	console.log('Ложь!');
//} else if (" ") {
//	console.log('Истина!');
//}
// ответ Истина! ВЕРНО!!!!

// ==========ДОМАШКА Лекция ЦИКЛИ
// Задача 1
// вывести числа 1 до 5 всеми циклами которые мы сегодня изучили
// конструкция цикла while
//let num = 0;
//while (num < 5) {
//	console.log(num);
//num++;
//}

// конструкция цикла do while
//let num = 0;
//do {
//	console.log(num);
//	num++;
//} while (num < 5);

// конструкция цикла for
//for (let num = 0; num < 5; num++) {
//console.log(num)
//}

// Задача 2
//let num = 8;
//while (num) {
//	console.log(num);
//	num--;
//}
// !!!НЕВЕРНО ПОСЛЕДНИЙ РЕЗУЛЬТАТ 1

// Задача 3
// переписать на while
// for (let num = 0; num < 3; num++) {
//    console.log('Число : ${num}');
// }

// !!!
// let num = 0;
// while (num < 3) {
//    console.log(num);
//    num++;
// }

// Задача 4 Прекратить работу цикла1 когда size равно 1
// метка
//firstFor:
// цикл 1
//for (let num = 0; num < 2; num++) {
// цикл 2
//for (let size = 0; size < 3; size++) {
// если size ровно 1 прекратить
//if (size == 1) {
//break firstFor;
//	}
//console.log(size);
//}
//}
//  !!!0


//
// ==========ДОМАШКА Лекция ЧИСЛА

// задача 1 Получить верное значение округления
//let numOne = Math.round(1.005 * 100) / 100;
//console.log(numOne);

// Ответ
//let sourceNum = 1.005 + Number.EPSILON;
// let numOne = Math.round(sourceNum * 100) / 100;
// console.log(numOne);
//  !!!1.01

// Задача 2
// получить число из строки
//let value = "135.58px";
//let valueOne = parseFloat("135.58px");
//console.log(valueOne);
//console.log(typeof (valueOne));

// // Задача 3
// // Построить верное условие ветвления
//let value = 58 + "Фриланцер";
//if (58 + "Фриланцер" !== NaN) {
//	console.log('Результат выражения NaN');
//}

// // Задача 4 найти максимальное число
//console.log(Math.max(10, 58, 39, -150));

// // Задача 5 Округлить число
// // Округление числа в меньшую сторону Math.floor
//let numTwo = Math.floor(58.858);
//console.log(numTwo);

// ==========ДОМАШКА  СТроки
// Завдання 1
// Верна ли запись?
// let fls = "фриланцер";
// let text = `Привет! Я ${fls}`;
//ожидаем получить  Привет! Я фриланцер
// console.log(text);

// Завдання 2
//Получить символ "н" строки:
// let textAll = 'фриланцер';
// let textSymbol = textAll[5];
// console.log(textSymbol);


// Завдання 3
//Вірно?
// let text = 123 + "456";
// Ожидаем 579
// console.log(text);
// console.log(typeof (text));


// Завдання 4
//Получити строку в  верхем регистре
// let text = 'фриланцер';
// let textUp = text.toUpperCase();
// console.log(textUp);


// Завдання 5
//Получить подстроку "лан" из :
// let text = 'фриланцер';
// let textPart = text.slice(3, 6);
// console.log(textPart);


// Завдання 6
//true или false?
// let text = 'фриланцер';
// console.log(text.includes('лан', 4));


