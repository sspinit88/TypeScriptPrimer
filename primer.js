"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var User7 = /** @class */ (function () {
    function User7(name, job) {
        this.job = job;
        this.isTeacher = true;
        this.age = 30;
        this.name = name;
        this.job = job;
    }
    User7.prototype.getAge = function () {
        return this.age;
    };
    User7.prototype.setTitle = function (title) {
        console.log(this.isTeacher);
        this.isTeacher = title;
        console.log(this.isTeacher);
    };
    return User7;
}());
var userItem7 = new User7('Егор', 'frontend');
console.log(userItem7);
console.log(userItem7.getAge());
userItem7.setTitle(false);
//----------------------------------------------------------------------------------------------------------------------
//lesson #8 - Наследование классов
var User8 = /** @class */ (function () {
    function User8(name, job) {
        this.name = name;
        this.job = job;
        this.age = 30;
    }
    User8.prototype.getAge = function () {
        return this.age;
    };
    return User8;
}());
// extends - наследование от класса
// super - вызывает конструктор родителя
var WFM = /** @class */ (function (_super) {
    __extends(WFM, _super);
    function WFM(job) {
        var _this = _super.call(this, 'Joe', job) || this;
        // т.к. age является protected, то мы можем изменять его из наследника
        _this.age = 35;
        return _this;
    }
    return WFM;
}(User8));
var wfm = new WFM('Frontend');
console.log(wfm);
// getAge() - публичный и мы его можем наследовать
console.log(wfm.getAge());
// abstract - создает абстрактный класс / метод, от которого нельзя сделать экземпляр объекта, но от которого можно
// наследовать
var Car = /** @class */ (function () {
    function Car() {
        this.year = 2010;
    }
    Car.prototype.getCarYear = function () {
        return this.year;
    };
    return Car;
}());
var Mersedes = /** @class */ (function (_super) {
    __extends(Mersedes, _super);
    function Mersedes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mersedes.prototype.logInfo = function (info) {
        console.log(info);
    };
    return Mersedes;
}(Car));
var car = new Mersedes();
console.log(car);
car.logInfo('Info#1');
console.log(car.getCarYear());
//# sourceMappingURL=primer.js.map