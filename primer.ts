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
// создаем переменную для указания типа
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

let rUser2 = user2.logJobs();
console.log(rUser2);