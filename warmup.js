'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('В аргументы переданы не числа!');
    }

    return a + b;
}

/**
 * Определяет век по годуs
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (typeof year !== 'number') {
        throw new TypeError('Передано не число!');
    }
    if (year < 0) {
        throw new RangeError('Передано отрицательное число!');
    }
    if (year <= 100) {
        return 1;
    }
    if (year % 100 === 0) {
        return year / 100;
    }

    return (year - year % 100) / 100 + 1;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    const reg = /^#[0-9A-Fa-f]{6}/; // Шаблон формата HEX
    if (typeof hexColor !== 'string') {
        throw new TypeError('Цвет передан не строкой!');
    }
    if (!reg.test(hexColor)) {
        throw new RangeError('Значения цвета выходят за пределы допустимых!');
    }
    // Посимвольный перевод в десятичную систему счисления
    const r = parseInt(hexColor.charAt(1) + hexColor.charAt(2), 16);
    const g = parseInt(hexColor.charAt(3) + hexColor.charAt(4), 16);
    const b = parseInt(hexColor.charAt(5) + hexColor.charAt(6), 16);

    return `(${r}, ${g}, ${b})`;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (typeof n !== 'number') {
        throw new TypeError('Передано не число!');
    }
    if (n <= 0 || !Number.isInteger(n)) {
        throw new RangeError('Переданное число не является целым положительным!');
    }
    let fibPrePrev = 0; // Начальные значения для n = 1 или 2
    let fibPrev = 1;
    let fib = 1;
    for (let i = 3; i <= n; i++) {
        fibPrePrev = fibPrev;
        fibPrev = fib;
        fib = fibPrev + fibPrePrev;
    }

    return fib;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || !matrix.every(Array.isArray)) {
        throw new TypeError('Передан не двумерный массив!');
    }
    let matrixTransp = [];
    for (let i = 0; i < matrix[0].length; i ++) {
        matrixTransp.push([]);
        for (let j = 0; j < matrix.length; j ++) {
            matrixTransp[i].push(matrix[j][i]);
        }
    }

    return matrixTransp;
}

/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
function numberSystemProblem(n, targetNs) {
    if (typeof n !== 'number' || typeof targetNs !== 'number') {
        throw new TypeError('Переданные аргументы некорректного типа!');
    }
    if ((targetNs < 2) || (targetNs > 36)) {
        throw new RangeError('Система счисления может иметь значение от 2 до 36');
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof phoneNumber !== 'string') {
        throw new TypeError('Переданный номер некорректного типа!');
    }

    return /^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError('Передана не строка!');
    }
    const matches = text.match(/:-\)|\(-:/g);

    return matches ? matches.length : 0;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    for (let i = 0; i < 3; i ++) {
        if ((field[i][0] === field[i][1]) && (field[i][0] === field[i][2])) {
            return field[i][0];
        }
        if ((field[0][i] === field[1][i]) && (field[0][i] === field[2][i])) {
            return field[0][i];
        }
    }
    if ((field[0][0] === field[1][1]) && (field[0][0] === field[2][2])) {
        return field[0][0];
    }
    if ((field[0][2] === field[1][1]) && (field[0][2] === field[2][0])) {
        return field[0][2];
    }

    return 'draw';
}

module.exports = {
    abProblem,
    centuryByYearProblem,
    colorsProblem,
    fibonacciProblem,
    matrixProblem,
    numberSystemProblem,
    phoneProblem,
    smilesProblem,
    ticTacToeProblem
};
