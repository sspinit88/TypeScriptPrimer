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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
//----------------------------------------------------------------------------------------------------------------------
// lesson #9 - Интерфейсы
// в интерфейсе перечисляются обязательные и необязательные поля, после этого передаем их как типы
function getLength(variable) {
    console.log('getLength:' + ' ' + variable.length);
}
getLength([1, 2, 3, 5, 7]);
var box = {
    name: 'Joe',
    // getLength() выдаст значение из box.length
    // length: 20
    // getLength() выдаст значение undefined, так как нет поля length у объекта
    // boxLength: 21
    // для того что бы избежать этой проблемы в функции указываем, что она должна принимать -> getLength(variable: { length: number })
    length: 25
};
// выдаст значение из box.length
getLength(box);
function getLength2(variable) {
    console.log('getLength:' + ' ' + variable.length);
}
var box2 = {
    name: 'Joe',
    length: 65,
};
getLength(box2);
// имплементироваться можно сразу от нескольких классов
// наследоваться только от одного класса
var User9 = /** @class */ (function () {
    function User9() {
        this.name = 'user';
    }
    User9.prototype.logInfo = function (info) {
        console.log(info);
    };
    User9.prototype.getYear = function () {
        return 200;
    };
    return User9;
}());
var user9 = new User9();
console.log(user9);
//----------------------------------------------------------------------------------------------------------------------
// lesson #10 - Общие типы (generic)
// generic - некое обозначение в общем типе
function getter(data) {
    return data;
}
console.log(getter(1980).length); // получим undefined
console.log(getter('год').length); // получим 3
// T - тип, который передадим
// этот вариант более универсален, в отчличии от any
function genericGetter(data) {
    return data;
}
// console.log(genericGetter(1980).length);  // подсветит ошибку, показывая, что нет поля length
console.log(genericGetter('год').length); // получим 3
// еще один способ обозначения типа данных в generic:
// let newGenericFu - создаем переменную;
// ": <T>(d: T) => T" - указываем тип, где d - принимаемый параметр, (d: T)- типа "T", и возвращаее тип 'T' (=> T).
// "<T>" - стоящее в самом начале говорит, что это generic типа 'T'
var newGenericFu = genericGetter;
console.log(newGenericFu('one').length);
// работа generic с классом
// простой класс
var Multiply = /** @class */ (function () {
    function Multiply(a, b) {
        this.a = a;
        this.b = b;
    }
    Multiply.prototype.getRes = function () {
        return this.a * this.b;
    };
    return Multiply;
}());
var n = new Multiply(10, 5);
console.log(n.getRes());
// generic класс
// <T extends number> - generic наследуется от типа number
var Multiply2 = /** @class */ (function () {
    function Multiply2(a, b) {
        this.a = a;
        this.b = b;
    }
    Multiply2.prototype.getRes = function () {
        return +this.a * +this.b;
    };
    return Multiply2;
}());
var nNum = new Multiply2(10, 3);
console.log(nNum.getRes());
// тут класс будет работать не корректно
// let nStr = new Multiply2(50, 'Краб');
// console.log(nStr.getRes());
//----------------------------------------------------------------------------------------------------------------------
// lesson #11 - Декораторы
// Декораторы - спец возможность TS по добавлению методаты для различных классов / функций.
// @decorator - декоратор это просто функция, которая принимает конструктор того класса, который за ней закреплен
// для закрепления класса за декоратором просто пишим название декоратора перед нужным классом.
function logger(constrFn) {
    console.log(constrFn);
}
// функция - обертка для декоратора, которая позволит передавать входящие значения в декоратор
function shouldLog(flag) {
    return flag ? logger : null;
}
var User11 = /** @class */ (function () {
    function User11(name, age) {
        this.name = name;
        this.age = age;
        console.log('I\'m new user!');
    }
    User11 = __decorate([
        shouldLog(true),
        __metadata("design:paramtypes", [String, Number])
    ], User11);
    return User11;
}());
// ----
function addShowAbility(constructorFu) {
    constructorFu.prototype.showHTML = function () {
        var pre = document.createElement('pre');
        pre.innerHTML = JSON.stringify(this);
        document.body.appendChild(pre);
    };
}
var User111 = /** @class */ (function () {
    function User111(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    User111 = __decorate([
        addShowAbility,
        __metadata("design:paramtypes", [String, Number, String])
    ], User111);
    return User111;
}());
var user111 = new User111('Joe', 20, 'Frontend');
console.log(user111);
user111.showHTML();
//----------------------------------------------------------------------------------------------------------------------
// lesson #12
//# sourceMappingURL=primer.js.map