/////////////////////////////////////
/* //Values and Variables
let js = 'amazing';

console.log(40 + 8 + 23 - 10);
console.log('Jonas');

let firstName = 'Bob';
console.log(firstName);

let PI = 3.1415;
 */

/////////////////////////////////////
/*
//Data types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Hello');

let year;
console.log(typeof year);

year = 1991;
console.log(typeof year);

// it's a bug that was never fixed
console.log(typeof null);
*/

/////////////////////////////////////
/*
//let, const and var
let age = 30;
age = 31;

// const birthYear = 1991;
// birthYear = 1990;

// const birthYear;
*/

/////////////////////////////////////
/* //basic operators
// Assignment operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Petrauskas';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 10;
x++; // +1
x--; // -1
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
const isFullAge = ageSarah >= 18;
console.log(isFullAge);
 */

/////////////////////////////////////
/*
//Operator Precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

 */

/////////////////////////////////////
/* //Code Challenge 1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.


const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.88;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn ** heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
 */

// Strings and Template Literals
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;
//
// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas)
//
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew)
//
// console.log('String with\n\
// multiple \n\
// lines')
//
// console.log(`String
// multiple
// lines`)

// // if else conditions
// const age = 15;
// const isOldEnough = age >= 18;
//
// if (isOldEnough) {
//     console.log('Sarah can start driving license 🚗!');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
// }
// let century
// const birthYear = 1991;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century)

// // Code Challenge 2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 95;
// const heightJohn = 1.88;
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn ** heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);
//
// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`)
// }

// //type conversion and coercion
// const inputYear = '1991';
// console.log(inputYear + 18); // add as string
// console.log(Number(inputYear) + 18);
//
// console.log(Number('Jonas'));
// console.log(typeof NaN);
//
// console.log(String(23));
// console.log(typeof String(23));
//
// console.log('I am' + 23 + ' years old!');
// console.log('23' - '10' - 3);
//
// let n = '1' + 1;
// console.log(n, typeof n)
// n = n - 1;
// console.log(n, typeof n);
//
// let x = 2 + 3 + 4 + '5'
// console.log(x, typeof x)
//
// let y = '10' - '4' - '3' - 2 + '5'
// console.log(y, typeof y)

// // Truthy and Falsy values
//
// // 5 falsy values: 0, '', undefined, null, NaN
//
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
//
// const money = 0;
// if (money) {
//     console.log(`Don't spend it all.`);
// } else {
//     console.log(`You should get a job!`)
// }
//
// let height;
// height = 100;
// if (height) {
//     console.log(`is working`);
// } else {
//     console.log(`not working`);
// }

// // Equality Operators == === != !==
// const age = 18;
// if (age === 18) console.log('1 answer');
// if (age === '18') console.log('2 answer');
// if (age == '18') console.log('3 answer');
//
// const favourite = Number(prompt('What is you favourite number?'));
// console.log(favourite, typeof favourite);
// if (favourite === 30) console.log('4 answer');

// // Logical operators
// const hasDriversLicense = true;
// const hasGoodVision = false;
//
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(hasDriversLicense && !hasGoodVision);

// // Coding Challenge 3
// scoreDolphins = (96 + 108 + 89) / 3;
// scoreKoalas = (89 + 91 + 110) / 3;
//
// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`Dolphins win!`)
// } else if (scoreKoalas > scoreDolphins) {
//     console.log(`Koalas win!`);
// } else {
//     console.log('Draw!')
// }

// // Switch Statement
// const day = 'thursday';
//
// switch (day) {
//     case "monday":
//         console.log('First');
//         console.log('Second');
//         break;
//     case 'tuesday':
//         console.log('Third');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Fourth');
//         break;
//     case 'friday':
//         console.log(`Fifth`);
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Last');
//         break;
//     default:
//         console.log('Not a valid day');
// }

// // Conditional
// const age = 1;
// // one way
// age >= 18 ? console.log('First') :
//     console.log('Second');
//
// // second way
// age >= 18 ? console.log('Third'): console.log('Fourth')
//
// // as variable
// const x = age >= 18 ? 'Fifth' : 'Sixth';
// console.log(x);
//
// console.log(`The answer is ${x}`);

// // Coding Challenge 4
// const bill = 430;
// const tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
















