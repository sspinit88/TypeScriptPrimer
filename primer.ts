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

console.log('lesson-1: ' + ' ' + typeof str + ' ' + typeof num + ' ' + typeof bool + ' ' + typeof unknown + ' ' + typeof other);

// lesson #2 - типизация массива
let strArr: string[] = ['1', '2', '3'],
    strArr0: Array<string> = ['1', '2', '3'],

    numArr: number[] = [1, 2, 3],
    numArr0: Array<number> = [1, 2, 3],

    boolArr: boolean[] = [true, false],
    boolArr0: Array<boolean> = [true, false];

// tuples
let array: [number, string, string] = [1, '2', '3'];

// lesson #3



