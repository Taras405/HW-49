"use strict";

let age = 16;
console.log(age);

let myName = 'Taki';
console.log(myName);

let isStudent = true;
console.log(isStudent);

let myString = 'Hello World';
console.log(myString);

let myNumber = 123;
console.log(myNumber + 10);

let myNull = null;
console.log(myNull);

const user = prompt("Введіть ваше ім'я", "");
let userName = user;
alert(user);
console.log(typeof (userName));

const warning = confirm("Ви дійсно хочете покинути сторінку?");
let userWarning = warning;
console.log(userWarning);

const attention = {
    alert: alert("Увага! Дія може бути небезпечною."),
    confirm: confirm("Ви впевненні що хочете продовжити?")
}
