"use strict";
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
//----------------------------------------------------------------------------------------------------------------------
// lesson #2 - Массивы
var strArr = ['1', '2', '3'], strArr0 = ['1', '2', '3'], numArr = [1, 2, 3], numArr0 = [1, 2, 3], boolArr = [true, false], boolArr0 = [true, false];
// tuples
var array = [1, '2', '3'];
//----------------------------------------------------------------------------------------------------------------------
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
var user = {
    name: 'Mike',
    age: 25,
    jobs: ['Кинолог', 'Лётчик'],
    logName: function () {
        console.log(this.name);
    }
};
var rUser1 = user.logName();
console.log(rUser1);
var user2 = {
    name: 'Maks',
    age: 45,
    jobs: ['Врач', 'Конюх'],
    logJobs: function () {
        return this.jobs;
    }
};
var rUser2 = user2.logJobs;
console.log(rUser2);
//----------------------------------------------------------------------------------------------------------------------
//lesson #5 - работа с tsconfig.json
var one = '12';
console.log(one);
//----------------------------------------------------------------------------------------------------------------------
//lesson #6 - Специальные типы. Enum, never, null
//  Enum - тип для определения различных констант
var Job;
(function (Job) {
    Job[Job["frontend"] = 0] = "frontend";
    Job[Job["backend"] = 50] = "backend";
    Job[Job["disigner"] = 100] = "disigner";
    Job[Job["cat"] = 101] = "cat";
})(Job || (Job = {}));
// создаем переменную job с типом Job
var job = Job.backend;
console.log(job);
var job0 = Job.frontend;
console.log(job0);
var job2 = Job.disigner;
console.log(job2);
var job3 = Job.cat;
console.log(job3);
// never - для функция, которые не заканчиваются, но и ничего не возвращают
function throwNewError(err) {
    throw new Error(err);
}
// null
// null и undefined не конфликтуют
var newVar;
newVar = null;
// решение конфликта при передачи числа или null
var numberItem = 20;
numberItem = newVar;
console.log(numberItem);
//----------------------------------------------------------------------------------------------------------------------
//lesson #7 - Классы
//# sourceMappingURL=primer.js.map