// lesson #1 - объявление переменной и типизация
// string
let str: string = 'str';
// number
let num: number = 1;
// boolean
let bool: boolean = true;

// other
let unknown: any = 1;
let other: string | number = 1;

// console.log('lesson-1: ' + ' ' + typeof str + ' ' + typeof num + ' ' + typeof bool + ' ' + typeof unknown + ' ' + typeof other);

//----------------------------------------------------------------------------------------------------------------------
// lesson #2 - Массивы
let strArr: string[] = ['1', '2', '3'],
    strArr0: Array<string> = ['1', '2', '3'],

    numArr: number[] = [1, 2, 3],
    numArr0: Array<number> = [1, 2, 3],

    boolArr: boolean[] = [true, false],
    boolArr0: Array<boolean> = [true, false];

// tuples
let array: [number, string, string] = [1, '2', '3'];

//----------------------------------------------------------------------------------------------------------------------
// lesson #3 - function
const myName: string = 'Kir';
const myAge: number = 23;

// function getMyName(): string {} - функция возвращает строку.
function getMyName(): string {
    return myName;
}

console.log(getMyName());

function getMyAge(): number {
    return myAge;
    // return myName;
}

console.log(getMyAge());

// ts позволяет указывать тип, входящих в функцию, данных
// параметры передавать в строгом порядке
// number | string - тип: или число, или строка
function getMyAge2(age: number, prefix: string = 'Возраст'): number | string {
    return prefix + " " + age;

}

console.log(getMyAge2(40));

// функция consoleLog() ничего не возвращает
// для таких ситуаций предусмотрен специальный тип
// void - тип, говорящий, что мы ничего не ожидаем в ответ от функции
function consoleLog(any: any): void {
    console.log(any);
}

consoleLog('start console.log!');

// mySum станет функцией;
// let mySum;
let mySum: (numb1: number, numb2: number) => number;

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

mySum = sum;

console.log(sum(2, 3));
console.log(mySum(2, 3));

//----------------------------------------------------------------------------------------------------------------------
//lesson #4 - Объекты
// logName: () => void - говорим ts, что у нас есть функция, которая ничего не принимает в себя и ничего не возвращает
// создаем переменную для указания типа (type User )
// для обозначения необязательного поля используется '?'
type User = { name: string, age: number, jobs: string[], logName?: () => void, logJobs?: () => string[] };

let user: { name: string, age: number, jobs: string[], logName: () => void } = {
    name: 'Mike',
    age: 25,
    jobs: ['Кинолог', 'Лётчик'],
    logName(): void {
        console.log(this.name);
    }
};
let rUser1 = user.logName();
console.log(rUser1);

let user2: User = {
    name: 'Maks',
    age: 45,
    jobs: ['Врач', 'Конюх'],
    logJobs() {
        return this.jobs;
    }
};

let rUser2 = user2.logJobs;
console.log(rUser2);

//----------------------------------------------------------------------------------------------------------------------
//lesson #5 - работа с tsconfig.json

let one: string = '12';
console.log(one);

//----------------------------------------------------------------------------------------------------------------------
//lesson #6 - Специальные типы. Enum, never, null

//  Enum - тип для определения различных констант
enum Job {
    frontend,
    backend = 50,
    disigner = 100,
    cat
}

// создаем переменную job с типом Job
const job: Job = Job.backend;
console.log(job);

const job0: Job = Job.frontend;
console.log(job0);

const job2: Job = Job.disigner;
console.log(job2);

const job3: Job = Job.cat;
console.log(job3);

// never - для функция, которые не заканчиваются, но и ничего не возвращают
function throwNewError(err: string): never {
    throw new Error(err);
}

// null
// null и undefined не конфликтуют
let newVar;
newVar = null;
// решение конфликта при передачи числа или null
let numberItem: number | null = 20;
numberItem = newVar;

console.log(numberItem);

//----------------------------------------------------------------------------------------------------------------------
//lesson #7 - Классы

class User7 {
    // ts можно определять поля класса

    // public - (по умолчанию) ключевое слово (модификатор), которое говорит что поле будет доступно у экземпляров
    // класса, его
    // наследников и у самого класса.
    // private - поле будет доступно только в классе и более нигде.
    // protected - говорит, что экземполяр данного класса не может обращаться к переменной, а наследники могут.

    // в/у модификаторы можно использовать и с методами

    // наследование приватных методов и т.п. можно использовать при обращении к ним через публичные методы в классе.

    name: string; // public
    private isTeacher: boolean = true;
    protected age: number = 30;

    constructor(name: string, public job: string) {
        this.name = name;
        this.job = job;

    }

    getAge(): number {
        return this.age;
    }

    public setTitle(title: boolean) {
        console.log(this.isTeacher);
        this.isTeacher = title;
        console.log(this.isTeacher);
    }

}

const userItem7 = new User7('Егор', 'frontend');
console.log(userItem7);
console.log(userItem7.getAge());
userItem7.setTitle(false);

//----------------------------------------------------------------------------------------------------------------------
//lesson #8 - Наследование классов

class User8 {
    protected age: number = 30;

    constructor(public name: string, public job: string) {

    }

    public getAge(): number {
        return this.age;
    }

}

// extends - наследование от класса
// super - вызывает конструктор родителя

class WFM extends User8 {

    constructor(job: string) {
        super('Joe', job);
        // т.к. age является protected, то мы можем изменять его из наследника
        this.age = 35;
    }
}

const wfm = new WFM('Frontend');
console.log(wfm);
// getAge() - публичный и мы его можем наследовать
console.log(wfm.getAge());

// abstract - создает абстрактный класс / метод, от которого нельзя сделать экземпляр объекта, но от которого можно
// наследовать

abstract class Car {
    year: number = 2010;

    getCarYear(): number {
        return this.year;
    }

    // метод абстрактный, по этой причине не имеет тела функции.
    // описывается только то, как он будет выглядеть.

    abstract logInfo(info: string): void;

}

class Mersedes extends Car {
    logInfo(info: string): void {
        console.log(info);
    }
}

const car = new Mersedes();
console.log(car);
car.logInfo('Info#1');
console.log(car.getCarYear());

//----------------------------------------------------------------------------------------------------------------------
// lesson #9 - Интерфейсы
// в интерфейсе перечисляются обязательные и необязательные поля, после этого передаем их как типы

function getLength(variable: { length: number }): void {
    console.log('getLength:' + ' ' + variable.length);
}

getLength([1, 2, 3, 5, 7]);

const box = {
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

// создание интерфейса
// в интерфейсе перечисляются обязательные и необязательные поля, после этого передаем их как типы
interface ILength {
    length: number;

}

function getLength2(variable: ILength): void {
    console.log('getLength:' + ' ' + variable.length);
}


const box2 = {
    name: 'Joe',
    length: 65,
};

getLength(box2);

// также можно создавать интерфейсы классов

interface IUser {
    name: string;
    age?: number;

    logInfo(info: string): void;
}

interface IGetYear {
    getYear(): number;
}

// имплементироваться можно сразу от нескольких классов
// наследоваться только от одного класса
class User9 implements IUser, IGetYear {
    name: string = 'user';

    logInfo(info: string): void {
        console.log(info);
    }

    getYear(): number {
        return 200;
    }
}

let user9 = new User9();
console.log(user9);


//----------------------------------------------------------------------------------------------------------------------
// lesson #10 - Общие типы (generic)
// generic - некое обозначение в общем типе

function getter(data: any) {
    return data;
}

console.log(getter(1980).length);  // получим undefined
console.log(getter('год').length); // получим 3

// T - тип, который передадим
// этот вариант более универсален, в отчличии от any
function genericGetter<T>(data: T): T {
    return data;
}

// console.log(genericGetter(1980).length);  // подсветит ошибку, показывая, что нет поля length
console.log(genericGetter('год').length); // получим 3

// еще один способ обозначения типа данных в generic:
// let newGenericFu - создаем переменную;
// ": <T>(d: T) => T" - указываем тип, где d - принимаемый параметр, (d: T)- типа "T", и возвращаее тип 'T' (=> T).
// "<T>" - стоящее в самом начале говорит, что это generic типа 'T'

let newGenericFu: <T>(d: T) => T = genericGetter;

console.log(newGenericFu<string>('one').length);

// работа generic с классом
// простой класс
class Multiply {
    constructor(private a: number, private b: number) {

    }

    public getRes(): number {
        return this.a * this.b;
    }
}

let n: Multiply = new Multiply(10, 5);
console.log(n.getRes());

// generic класс
// <T extends number> - generic наследуется от типа number
class Multiply2<T extends number> {
    constructor(private a: T, private b: T) {

    }

    public getRes(): number {
        return +this.a * +this.b;
    }
}

let nNum = new Multiply2(10, 3);
console.log(nNum.getRes());

// тут класс будет работать не корректно

// let nStr = new Multiply2(50, 'Краб');
// console.log(nStr.getRes());


//----------------------------------------------------------------------------------------------------------------------
// lesson #11 - Декораторы
// Декораторы - спец возможность TS по добавлению методаты для различных классов / функций.

// @decorator - декоратор это просто функция, которая принимает конструктор того класса, который за ней закреплен
// для закрепления класса за декоратором просто пишим название декоратора перед нужным классом.

function logger(constrFn: Function) {
    console.log(constrFn);
}

// функция - обертка для декоратора, которая позволит передавать входящие значения в декоратор
function shouldLog(flag: boolean): any {
    return flag ? logger : null;
}

@shouldLog(true)
class User11 {
    constructor(public name: string, public age: number) {
        console.log('I\'m new user!');
    }
}

// ----

function addShowAbility(constructorFu: Function) {
    constructorFu.prototype.showHTML = function () {
        const pre = document.createElement('pre');
        pre.innerHTML = JSON.stringify(this);
        document.body.appendChild(pre);
    }
}

@addShowAbility
class User111 {
    constructor(public name: string, public age: number, public job: string) {
    }
}

let user111 = new User111('Joe', 20, 'Frontend');
console.log(user111);
(<any>user111).showHTML();

//----------------------------------------------------------------------------------------------------------------------
// lesson #12