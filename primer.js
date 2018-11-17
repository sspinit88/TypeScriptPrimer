// lesson #1 - объявление переменной и типизация
// string
var str = 'str';
// number
var num = 1;
// boolean
var bool = true;
// other
var unknown = 1;
var other = 1;
// console.log('lesson-1: ' + ' ' + typeof str + ' ' + typeof num + ' ' + typeof bool + ' ' + typeof unknown + ' ' + typeof other);
// lesson #2 - типизация массива
var strArr = ['1', '2', '3'], strArr0 = ['1', '2', '3'], numArr = [1, 2, 3], numArr0 = [1, 2, 3], boolArr = [true, false], boolArr0 = [true, false];
// tuples
var array = [1, '2', '3'];
// lesson #3 - function
var myName = 'Kir';
var myAge = 23;
// function getMyName(): string {} - функция возвращает строку.
function getMyName() {
    return myName;
}
console.log(getMyName());
function getMyAge() {
    return myAge;
    // return myName;
}
console.log(getMyAge());
// ts позволяет указывать тип, входящих в функцию, данных
// параметры передавать в строгом порядке
// number | string - тип: или число, или строка
function getMyAge2(age, prefix) {
    if (prefix === void 0) { prefix = 'Возраст'; }
    return prefix + " " + age;
}
console.log(getMyAge2(40));
// функция consoleLog() ничего не возвращает
// для таких ситуаций предусмотрен специальный тип
// void - тип, говорящий, что мы ничего не ожидаем в ответ от функции
function consoleLog(any) {
    console.log(any);
}
consoleLog('start console.log!');
// mySum станет функцией;
// let mySum;
var mySum;
function sum(num1, num2) {
    return num1 + num2;
}
mySum = sum;
console.log(sum(2, 3));
console.log(mySum(2, 3));
